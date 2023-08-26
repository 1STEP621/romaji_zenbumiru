addEventListener('message', (e) => {
  const vowelRomajis = ['a', 'i', 'u', 'e', 'o'];
  const vowelHiraganas = ['あ', 'い', 'う', 'え', 'お'];
  const normalRomajis = {
    "": vowelHiraganas,
    "k": ["か", "き", "く", "け", "こ"],
    "s": ["さ", "し", "す", "せ", "そ"],
    "t": ["た", "ち", "つ", "て", "と"],
    "n": ["な", "に", "ぬ", "ね", "の"],
    "h": ["は", "ひ", "ふ", "へ", "ほ"],
    "m": ["ま", "み", "む", "め", "も"],
    "y": ["や", null, "ゆ", "いぇ", "よ"],
    "r": ["ら", "り", "る", "れ", "ろ"],
    "w": ["わ", "うぃ", null, "うぇ", "を"],
    "l": ["ぁ", "ぃ", "ぅ", "ぇ", "ぉ"],
    "x": ["ぁ", "ぃ", "ぅ", "ぇ", "ぉ"],
    "d": ["だ", "ぢ", "づ", "で", "ど"],
    "dh": ["でゃ", "でぃ", "でゅ", "でぇ", "でょ"],
    "ts": ["つぁ", "つぃ", "つ", "つぇ", "つぉ"],
    "th": ["てゃ", "てぃ", "てゅ", "てぇ", "てょ"],
    "b": ["ば", "び", "ぶ", "べ", "ぼ"],
    "p": ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
    "f": ["ふぁ", "ふぃ", "ふ", "ふぇ", "ふぉ"],
    "v": ["ヴぁ", "ヴぃ", "ヴ", "ヴぇ", "ヴぉ"],
    "ky": ["きゃ", "きぃ", "きゅ", "きぇ", "きょ"],
    "gy": ["ぎゃ", "ぎぃ", "ぎゅ", "ぎぇ", "ぎょ"],
    "sy": ["しゃ", "しぃ", "しゅ", "しぇ", "しょ"],
    "sh": ["しゃ", "し", "しゅ", "しぇ", "しょ"],
    "zy": ["じゃ", "じぃ", "じゅ", "じぇ", "じょ"],
    "j": ["じゃ", "じ", "じゅ", "じぇ", "じょ"],
    "ty": ["ちゃ", "ちぃ", "ちゅ", "ちぇ", "ちょ"],
    "ch": ["ちゃ", "ち", "ちゅ", "ちぇ", "ちょ"],
    "dy": ["ぢゃ", "ぢぃ", "ぢゅ", "ぢぇ", "ぢょ"],
    "ny": ["にゃ", "にぃ", "にゅ", "にぇ", "にょ"],
    "hy": ["ひゃ", "ひぃ", "ひゅ", "ひぇ", "ひょ"],
    "by": ["びゃ", "びぃ", "びゅ", "びぇ", "びょ"],
    "py": ["ぴゃ", "ぴぃ", "ぴゅ", "ぴぇ", "ぴょ"],
    "fy": ["ふゃ", "ふぃ", "ふゅ", "ふぇ", "ふょ"],
    "my": ["みゃ", "みぃ", "みゅ", "みぇ", "みょ"],
    "ry": ["りゃ", "りぃ", "りゅ", "りぇ", "りょ"],
    "q": ["くぁ", "くぃ", "く", "くぇ", "くぉ"],
    "kw": ["くぁ", "くぃ", "くぅ", "くぇ", "くぉ"],
    "gw": ["ぐぁ", "ぐぃ", "ぐぅ", "ぐぇ", "ぐぉ"],
    "tw": ["とぁ", "とぃ", "とぅ", "とぇ", "とぉ"],
    "dw": ["どぁ", "どぃ", "どぅ", "どぇ", "どぉ"],
    "c": ["か", "し", "く", "せ", "こ"],
    "wy": [null, "ゐ", null, "ゑ", null],
    "g": ["が", "ぎ", "ぐ", "げ", "ご"],
    "z": ["ざ", "じ", "ず", "ぜ", "ぞ"],
    "xt": [null, null, "っ", null, null],
    "lt": [null, null, "っ", null, null],
    "xts": [null, null, "っ", null, null],
    "lts": [null, null, "っ", null, null],
    "xy": ["ゃ", null, "ゅ", null, "ょ"],
    "ly": ["ゃ", null, "ゅ", null, "ょ"],
    "xw": ["ゎ", null, null, null, null],
    "lw": ["ゎ", null, null, null, null],
    "qy": ["くゃ", "くぃ", "くゅ", "くぇ", "くょ"],
    "qw": ["くゎ", "くぃ", "くぅ", "くぇ", "くぉ"],
    "cy": ["ちゃ", "ちぃ", "ちゅ", "ちぇ", "ちょ"],
    "jy": ["じゃ", "じぃ", "じゅ", "じぇ", "じょ"],
    "vy": ["ヴゃ", "ヴぃ", "ヴゅ", "ヴぇ", "ヴょ"],
    "wh": ["うぁ", "うぃ", "うぅ", "うぇ", "うぉ"],
    "lk": ["ヵ", null, null, null, null],
    "xk": ["ヵ", null, null, null, null],
    "sw": ["すぁ", "すぃ", "すぅ", "すぇ", "すぉ"],
    "fw": [null, null, "ふぅ", null, null]
  };
  const smallHiraganas = ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゃ', 'ゅ', 'ょ'];

  toRomaji(e.data).then((res) => {
    postMessage(res);
  });

  async function toRomaji(hiragana) {
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
      if (vowelHiraganas.includes(char)) {
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
        results = appendSpell(results, ["-", ...(searchVowel(prevChar) ?? []), ""]);
        continue;
      }
      if (char === "～") {
        results = appendSpell(results, ["-", ...(searchVowel(prevChar) ?? []), ""]);
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