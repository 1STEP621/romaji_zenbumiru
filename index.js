addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('hiragana');
  const output = document.querySelector('#romajis p');
  const copy = document.getElementById('copy');
  let worker;
  input.addEventListener('input', () => {
    worker?.terminate();
    worker = new Worker('main.js');
    worker.postMessage(input.value);
    output.textContent = "変換中...";
    worker.addEventListener('message', (e) => {
      output.textContent = e.data.join(' ');
    });
  });
  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(output.textContent);
    copy.textContent = "コピーしました！";
    setTimeout(() => {
      copy.textContent = "コピー";
    }, 1000);
  });
});