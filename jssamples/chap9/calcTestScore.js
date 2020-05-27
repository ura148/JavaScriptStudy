function printScore(name, english, math, japanese) {
  let sum = english + math + japanese;
  let ave = sum / 3;
  console.log(name + "さんの合計" + sum + "平均：" + ave);
}

let taroName = "太郎";
let taroEnglish = 92;
let taroMath = 87;
let taroJapanese = 74;
printScore(taroName, taroEnglish, taroMath, taroJapanese);
