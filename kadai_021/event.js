// id=textのHTML要素を取得
const texts = document.getElementById('text');
const bTn = document.getElementById ('btn');




// btnがクリックされたら
bTn.addEventListener('click', () => {

    // 2s後に表示が変わる
setTimeout(() => {
    const newH2 = 'ボタンをクリックしました';
    texts.textContent = newH2;
}, 2000);

});
