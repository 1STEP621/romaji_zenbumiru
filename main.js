addEventListener('message', (e) => {
  const vowelHiraganas = ['あ', 'い', 'う', 'え', 'お'];
  const vowelRomajis = ['a', 'i', 'u', 'e', 'o'];
  const smallHiraganas = ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゃ', 'ゅ', 'ょ'];
  const consonantRomajis = {
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

  toRomaji(e.data).then((res) => {
    postMessage(res);
  });

  async function toRomaji(hiragana) {
    let results = [[]];

    for (let i = 0; i < hiragana.length; i++) {
      let char = hiragana.substring(i, i + 1);

      if (char == "ん") {
        results = appendSpell(results, ["n", "nn"]);
        continue;
      } else if (char == "っ") {
        if (Object.values(consonantRomajis).some((elem) => elem.includes(hiragana.substring(i + 1, i + 2)))) {
          const spells_connect = searchSpell(hiragana.substring(i + 1, i + 2)).map((item) => item.substring(0, 1) + item);
          const spells_separate = appendSpell(searchSpell(char).map((item) => [item]), searchSpell(hiragana.substring(i + 1, i + 2))).map((item) => item.join(''));
          const spells = [...spells_connect, ...spells_separate];
          results = appendSpell(results, spells);
          i++;
        } else {
          results = appendSpell(results, searchSpell(char));
        }
        continue;
      } else if (smallHiraganas.includes(hiragana.substring(i + 1, i + 2))) {
        const spells_connect = searchSpell(hiragana.substring(i, i + 2));
        const spells_separate = appendSpell(searchSpell(char).map((item) => [item]), searchSpell(hiragana.substring(i + 1, i + 2))).map((item) => item.join(''));
        const spells = [...spells_connect, ...spells_separate];
        results = appendSpell(results, spells);
        i++;
        continue;
      } else if (vowelHiraganas.includes(char)) {
        const spells = [...vowelRomajis[vowelHiraganas.indexOf(char)], ...searchSpell(char)];
        // 連母音を判定
        if ((searchSpell(hiragana.substring(i - 1, i))[0]?.slice(-1) === vowelRomajis[vowelHiraganas.indexOf(char)] ||
            searchSpell(hiragana.substring(i - 1, i))[0]?.slice(-1) + vowelRomajis[vowelHiraganas.indexOf(char)] === "ou") &&
            !smallHiraganas.includes(hiragana.substring(i - 1, i)) &&
            hiragana.substring(i - 1, i) !== "っ") {
          results = appendSpell(results, ["", ...spells]);
        } else {
          results = appendSpell(results, spells);
        }
        continue;
      }  else if (char == "ー") {
        results = appendSpell(results, ["-", ""]);
        continue;
      } else if (char == "～") {
        results = appendSpell(results, ["~", ""]);
        continue;
      } else if (char == "、") {
        results = appendSpell(results, [",", ""]);
        continue;
      } else if (char == "。") {
        results = appendSpell(results, [".", ""]);
        continue;
      }

      if (Object.values(consonantRomajis).some((elem) => elem.includes(char))) {
        results = appendSpell(results, searchSpell(char));
      } else {
        // 非ひらがな(記号など)はそのまま追加
        results = appendSpell(results, [char]);
      }
    }
    return results.map((item) => item.join(''));
  }

  function doublingArray(arr, n) {
    // 配列の要素数をn倍する
    // JSON.parseとJSON.stringifyを使っているのは、参照渡しを防ぐため
    // structuredClone()でもいいはずなのになぜかうまくいかない
    return JSON.parse(JSON.stringify(arr.reduce((acm, item) => acm.concat(Array(n).fill(item)), [])));
  }

  function appendSpell(arr, spells) {
    // 配列の各要素にスペルを追加する
    res = arr;
    res = doublingArray(arr, spells.length);
    res.forEach((item, index) => {
      item.push(spells[index % spells.length]);
    });
    return res;
  }

  function searchSpell(char) {
    // ローマ字表からcharを検索してスペルを返す
    return Object.entries(consonantRomajis).filter((item) => item[1].includes(char)).map((item) => item[0] + vowelRomajis[item[1].indexOf(char)]);
  }
});