class TestScore {
  constructor(){
    this.name = "";
    this.english = 0;
    this.math = 0;
    this.japanese = 0;
  }
}

function printScore(student) {
  let sum = student.english + student.math + student.japanese;
  let ave = sum / 3;
  console.log(name + "さんの合計" + sum + "平均：" + ave);
}

let taro = new TestScore();
  taro.name = "太郎";
  taro.english = 92;
  taro.math = 87;
  taro.japanese = 74;
printScore(taro);

let hanako = new TestScore();
  hanako.name = "花子";
  hanako.english = 79;
  hanako.math = 95;
  hanako.japanese = 83;
printScore(hanako);
