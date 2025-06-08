// h1要素を取得
const h1Element = document.querySelector('h1');

// h1要素にクリックイベントを追加
h1Element.addEventListener('click', () => {
  h1Element.style.color =
    h1Element.style.color === 'blue' ? 'red' : 'blue';
});
