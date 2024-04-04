// id=textのHTML要素を取得
const texts = document.getElementById('text');
const bTn = document.getElementById ('btn');
// btnがクリックされたら
bTn.addEventListener('click', () => {

    const newH2 = 'ボタンをクリックしました';
    texts.textContent = newH2;

});
