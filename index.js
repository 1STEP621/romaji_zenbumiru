addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('hiragana');
  const output = document.querySelector('#romajis p');
  const copy = document.getElementById('copy');
  const customRomajis = document.getElementById('custom-romajis');
  const settingsHeader = document.getElementById('settings-header');
  const settings = document.getElementById('settings-main');
  const useLiaison = document.getElementById('liaison');

  let romajisCfg = {
    "k": [["か", true], ["き", true], ["く", true], ["け", true], ["こ", true]],
    "s": [["さ", true], ["し", true], ["す", true], ["せ", true], ["そ", true]],
    "t": [["た", true], ["ち", true], ["つ", true], ["て", true], ["と", true]],
    "n": [["な", true], ["に", true], ["ぬ", true], ["ね", true], ["の", true]],
    "h": [["は", true], ["ひ", true], ["ふ", true], ["へ", true], ["ほ", true]],
    "m": [["ま", true], ["み", true], ["む", true], ["め", true], ["も", true]],
    "y": [["や", true], ["い", false], ["ゆ", true], ["いぇ", true], ["よ", true]],
    "r": [["ら", true], ["り", true], ["る", true], ["れ", true], ["ろ", true]],
    "w": [["わ", true], ["うぃ", true], ["う", false], ["うぇ", true], ["を", true]],
    "l": [["ぁ", true], ["ぃ", true], ["ぅ", true], ["ぇ", true], ["ぉ", true]],
    "x": [["ぁ", true], ["ぃ", true], ["ぅ", true], ["ぇ", true], ["ぉ", true]],
    "d": [["だ", true], ["ぢ", true], ["づ", true], ["で", true], ["ど", true]],
    "dh": [["でゃ", true], ["でぃ", true], ["でゅ", true], ["でぇ", true], ["でょ", true]],
    "ts": [["つぁ", true], ["つぃ", true], ["つ", true], ["つぇ", true], ["つぉ", true]],
    "th": [["てゃ", true], ["てぃ", true], ["てゅ", true], ["てぇ", true], ["てょ", true]],
    "b": [["ば", true], ["び", true], ["ぶ", true], ["べ", true], ["ぼ", true]],
    "p": [["ぱ", true], ["ぴ", true], ["ぷ", true], ["ぺ", true], ["ぽ", true]],
    "f": [["ふぁ", true], ["ふぃ", true], ["ふ", true], ["ふぇ", true], ["ふぉ", true]],
    "v": [["ヴぁ", true], ["ヴぃ", true], ["ヴ", true], ["ヴぇ", true], ["ヴぉ", true]],
    "ky": [["きゃ", true], ["きぃ", true], ["きゅ", true], ["きぇ", true], ["きょ", true]],
    "gy": [["ぎゃ", true], ["ぎぃ", true], ["ぎゅ", true], ["ぎぇ", true], ["ぎょ", true]],
    "sy": [["しゃ", true], ["しぃ", true], ["しゅ", true], ["しぇ", true], ["しょ", true]],
    "sh": [["しゃ", true], ["し", true], ["しゅ", true], ["しぇ", true], ["しょ", true]],
    "zy": [["じゃ", true], ["じぃ", true], ["じゅ", true], ["じぇ", true], ["じょ", true]],
    "j": [["じゃ", true], ["じ", true], ["じゅ", true], ["じぇ", true], ["じょ", true]],
    "ty": [["ちゃ", true], ["ちぃ", true], ["ちゅ", true], ["ちぇ", true], ["ちょ", true]],
    "ch": [["ちゃ", true], ["ち", true], ["ちゅ", true], ["ちぇ", true], ["ちょ", true]],
    "dy": [["ぢゃ", true], ["ぢぃ", true], ["ぢゅ", true], ["ぢぇ", true], ["ぢょ", true]],
    "ny": [["にゃ", true], ["にぃ", true], ["にゅ", true], ["にぇ", true], ["にょ", true]],
    "hy": [["ひゃ", true], ["ひぃ", true], ["ひゅ", true], ["ひぇ", true], ["ひょ", true]],
    "by": [["びゃ", true], ["びぃ", true], ["びゅ", true], ["びぇ", true], ["びょ", true]],
    "py": [["ぴゃ", true], ["ぴぃ", true], ["ぴゅ", true], ["ぴぇ", true], ["ぴょ", true]],
    "fy": [["ふゃ", true], ["ふぃ", true], ["ふゅ", true], ["ふぇ", true], ["ふょ", true]],
    "my": [["みゃ", true], ["みぃ", true], ["みゅ", true], ["みぇ", true], ["みょ", true]],
    "ry": [["りゃ", true], ["りぃ", true], ["りゅ", true], ["りぇ", true], ["りょ", true]],
    "q": [["くぁ", true], ["くぃ", true], ["く", false], ["くぇ", true], ["くぉ", true]],
    "kw": [["くぁ", true], ["くぃ", true], ["くぅ", true], ["くぇ", true], ["くぉ", true]],
    "gw": [["ぐぁ", true], ["ぐぃ", true], ["ぐぅ", true], ["ぐぇ", true], ["ぐぉ", true]],
    "tw": [["とぁ", true], ["とぃ", true], ["とぅ", true], ["とぇ", true], ["とぉ", true]],
    "dw": [["どぁ", true], ["どぃ", true], ["どぅ", true], ["どぇ", true], ["どぉ", true]],
    "c": [["か", false], ["し", false], ["く", false], ["せ", false], ["こ", false]],
    "wy": [[undefined, false], ["ゐ", true], [undefined, false], ["ゑ", true], [undefined, false]],
    "g": [["が", true], ["ぎ", true], ["ぐ", true], ["げ", true], ["ご", true]],
    "z": [["ざ", true], ["じ", true], ["ず", true], ["ぜ", true], ["ぞ", true]],
    "xt": [[undefined, false], [undefined, false], ["っ", true], [undefined, false], [undefined, false]],
    "lt": [[undefined, false], [undefined, false], ["っ", true], [undefined, false], [undefined, false]],
    "xts": [[undefined, false], [undefined, false], ["っ", true], [undefined, false], [undefined, false]],
    "lts": [[undefined, false], [undefined, false], ["っ", true], [undefined, false], [undefined, false]],
    "xy": [["ゃ", true], ["ぃ", false], ["ゅ", true], ["ぇ", false], ["ょ", true]],
    "ly": [["ゃ", true], ["ぃ", false], ["ゅ", true], ["ぇ", false], ["ょ", true]],
    "xw": [["ゎ", true], [undefined, false], [undefined, false], [undefined, false], [undefined, false]],
    "lw": [["ゎ", true], [undefined, false], [undefined, false], [undefined, false], [undefined, false]],
    "qy": [["くゃ", true], ["くぃ", true], ["くゅ", true], ["くぇ", true], ["くょ", true]],
    "qw": [["くゎ", true], ["くぃ", true], ["くぅ", true], ["くぇ", true], ["くぉ", true]],
    "cy": [["ちゃ", true], ["ちぃ", true], ["ちゅ", true], ["ちぇ", true], ["ちょ", true]],
    "jy": [["じゃ", true], ["じぃ", true], ["じゅ", true], ["じぇ", true], ["じょ", true]],
    "vy": [["ヴゃ", true], ["ヴぃ", true], ["ヴゅ", true], ["ヴぇ", true], ["ヴょ", true]],
    "wh": [["うぁ", true], ["うぃ", true], ["うぅ", true], ["うぇ", true], ["うぉ", true]],
    "lk": [["ヵ", true], [undefined, false], [undefined, false], [undefined, false], [undefined, false]],
    "xk": [["ヵ", true], [undefined, false], [undefined, false], [undefined, false], [undefined, false]],
    "sw": [["すぁ", true], ["すぃ", true], ["すぅ", true], ["すぇ", true], ["すぉ", true]],
    "fw": [["ふぁ", false], ["ふぃ", false], ["ふぅ", true], ["ふぇ", false], ["ふぉ", false]]
  };

  let worker;

  input.addEventListener('input', sendToWorker);
  copy.addEventListener('click', copyToClipboard);
  settingsHeader.addEventListener('click', () => settings.classList.toggle('show'));
  useLiaison.addEventListener('change', () => input.dispatchEvent(new Event('input')));

  drawRomajisTable(romajisCfg);

  function simplifyRomajisCfg(romajisCfg) {
    // romajisCfgの第二要素の真偽値から第一要素を取り出す
    return Object.fromEntries(
      Object.entries(romajisCfg).map((item) => {
        return [item[0], item[1].map((item) => item[1] ? item[0] : null)]
      })
    );
  }

  function sendToWorker(e) {
    worker?.terminate();
    const romajis = simplifyRomajisCfg(romajisCfg);
    worker = new Worker('main.js');
    worker.postMessage({
      text: e.target.value,
      romajis: romajis,
      useLiaison: document.getElementById('liaison').checked,
    });
    output.textContent = "変換中...";
    worker.addEventListener('message', (e) => {
      output.textContent = e.data.join(' ');
    });
  }

  function copyToClipboard(e) {
    navigator.clipboard.writeText(output.textContent);
    copy.textContent = "コピーしました！";
    setTimeout(() => {
      copy.textContent = "コピー";
    }, 1000);
  }

  function drawRomajisTable(romajisCfg) {
    // テーブルを描画
    customRomajis.innerHTML = "";
    Object.entries(romajisCfg).forEach((item) => {
      const row = document.createElement('tr');
      const header = document.createElement('th');
      header.textContent = item[0];
      row.appendChild(header);
      item[1].forEach((value, index) => {
        const cell = document.createElement('td');
        cell.dataset.consonant = item[0];
        cell.dataset.vowel = index;
        cell.textContent = value[0] ?? "N/A";
        cell.role = "button";
        if (!value[0]) {
          cell.inert = true;
        }
        if (value[1]) {
          cell.classList.add('active');
        }
        row.appendChild(cell);
        cell.addEventListener('click', (e) => {
          const consonant = e.target.dataset.consonant;
          const vowel = e.target.dataset.vowel;
          romajisCfg[consonant][vowel][1] = !romajisCfg[consonant][vowel][1];
          drawRomajisTable(romajisCfg);
          input.dispatchEvent(new Event('input'));
        });
      });
      customRomajis.appendChild(row);
    })
  };
});