addEventListener('message', (e) => {
  const vowelRomajis = ['a', 'i', 'u', 'e', 'o'];
  const vowelHiraganas = ['あ', 'い', 'う', 'え', 'お'];
  e.data.romajis[""] = vowelHiraganas;
  const normalRomajis = e.data.romajis;
  const smallHiraganas = ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゃ', 'ゅ', 'ょ'];
  console.log(e.data.romajis);

  toRomaji(e.data.text, e.data.useLiaison).then((res) => {
    postMessage(res);
  });

  async function toRomaji(hiragana, useLiaison) {
    let results = [[]];

    for (let i = 0; i < hiragana.length; i++) {
      let char = hiragana.substring(i, i + 1);
      let nextChar = hiragana.substring(i + 1, i + 2);
      let prevChar = hiragana.substring(i - 1, i);

      if (char === "っ") {
        // 次の文字があいうえお、ん、っ、記号などではないか確認
        // 母音のある文字 かつ あいうえおではない
        if (searchVowel(nextChar) && !vowelHiraganas.includes(nextChar)) {
          const spells_connect = searchSpell(nextChar).map((item) => item.substring(0, 1) + item);
          const spells_separate = appendSpell(searchSpell(char).map((item) => [item]), searchSpell(nextChar)).map((item) => item.join(''));
          const spells = [...spells_connect, ...spells_separate];
          results = appendSpell(results, spells);
          i++;
          continue;
        }
      }
      if (smallHiraganas.includes(nextChar)) {
        const spells_connect = searchSpell(hiragana.substring(i, i + 2));
        const spells_separate = appendSpell(searchSpell(char).map((item) => [item]), searchSpell(nextChar)).map((item) => item.join(''));
        const spells = [...spells_connect, ...spells_separate];
        results = appendSpell(results, spells);
        i++;
        continue;
      }
      if (vowelHiraganas.includes(char) && useLiaison) {
        // 連母音を判定
        if (searchVowel(prevChar) === searchVowel(char) ||
          searchVowel(prevChar) + searchVowel(char) === "ou") {
          results = appendSpell(results, ["", ...searchSpell(char)]);
          continue;
        }
      }
      if (char === "ん") {
        results = appendSpell(results, ["n", "nn"]);
        continue;
      }
      if (char === "ー") {
        results = appendSpell(results, ["-", ...(searchVowel(prevChar) ?? []), ...(useLiaison ? [""] : [])]);
        continue;
      }
      if (char === "～") {
        results = appendSpell(results, ["-", ...(searchVowel(prevChar) ?? []), ...(useLiaison ? [""] : [])]);
        continue;
      }
      if (char === "、") {
        results = appendSpell(results, [",", ""]);
        continue;
      }
      if (char === "。") {
        results = appendSpell(results, [".", ""]);
        continue;
      }

        // 非ひらがな(記号など)を判定
      if (Object.values(normalRomajis).some((elem) => elem.includes(char))) {
        results = appendSpell(results, searchSpell(char));
      } else {
        results = appendSpell(results, [char]);
      }
    }
    return Array.from(new Set(results.map((item) => item.join(''))));
  }

  function doublingArray(arr, n) {
    // 配列の要素数をn倍する
    return structuredClone(arr.reduce((acm, item) => acm.concat(Array(n).fill(item)), []));
  }

  function appendSpell(arr, spells) {
    // 配列の各要素にスペルを追加する
    let res = arr;
    res = doublingArray(arr, spells.length);
    res = res.map((item, index) => [...item, spells[index % spells.length]]);
    return res;
  }

  function searchSpell(char) {
    // ローマ字表からcharを検索してスペルを返す
    return Object.entries(normalRomajis).filter((item) => item[1].includes(char)).map((item) => item[0] + vowelRomajis[item[1].indexOf(char)]);
  }
  
  function searchVowel(char) {
    // ローマ字表からcharを検索して母音を返す
    if (char === "っ") {
      return null;
    }
    return vowelRomajis[Object.values(normalRomajis).find((item) => item.includes(char))?.indexOf(char)];
  }

  function searchConsonants(char) {
    // ローマ字表からcharを検索して子音を返す
    return Object.entries(normalRomajis).filter((item) => item[1].includes(char)).map((item) => item[0]);
  }
});