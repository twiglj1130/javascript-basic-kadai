// todayの宣言し、全部取得その中からそれぞれの値を引き出す
let today = new Date();

// 年だけ取得
let year = today.getFullYear();
// console.log(year);

// 月だけ取得
let month = today.getMonth() + 1;
// console.log(month);

// 日にちだけ取得
let day = today.getDate();
// console.log(day);

console.log(year + '年' + month + '月' + day + '日')
