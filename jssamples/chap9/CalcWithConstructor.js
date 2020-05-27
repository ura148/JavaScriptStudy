// たろうさん用のTestScoreAveを使ってデータ表示
let taro = new TestScoreWithConstructor("たろう",92,87,74);
taro.printScore();

// はなこさん用のTestScoreAveを使ってデータ表示
let hanako = new TestScoreWithConstructor("はなこ",55,99,78);
hanako.printScore();

// たろうさんの合計点を取得
let taroSum = taro.calcSum();
// はなこさんの合計点を取得
let hanakoSum = hanako.calcSum();
// 2人の合計点の平均を産出して表示
let ave2 = (taroSum + hanakoSum) / 2;
console.log("2人の合計の平均：" + ave2);

// 太郎さんの平均点を取得
let taroAve =  taro.calcAve();
// はなこさんの平均点を取得
let hanakoAve =  taro.calcAve();
// 2人の平均の平均点を算出し表示
let aveAve = (taroAve + hanakoAve) / 2;
console.log("2人の平均の算出：" + aveAve);
