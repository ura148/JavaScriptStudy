class TestScoreExtended extends TestScoreWithConstructor{
  // コンストラクタ
  constructor(name = "", english = 0, math = 0, japanese = 0, science = 0, social = 0){
    // 親クラスのコンストラクタの呼び出し
    super(name,english,math,japanese);
    // プロパティの定義、及び初期データ格納
    this.science = science;
    this.social = social;
  }

  // ５教科の合計点を計算するメソッド
  calcTotalScore(){
    let sum3 = this.calcSum();
    // 理科と社会の点を加算して合計を算出。
    let total = sum3 + this.science + this.social;
    return total;
  }

  // ５教科の平均点を計算するメソッド
  calcTotalAve(){
    // calcTotalScore()の戻り値を５で割って平均点を算出
    let ave = this.calcTotalScore() / 5;
    return ave;
  }

  // 合計点と平均点を表示するメソッド
  printScore(){
    // 親クラスのprintScore()メソッドを呼び出し
    super.printScore();
    // このクラス内のメソッドを使って合計点と平均点を取得。
    let total = this.calcTotalScore();
    let ave = this.calcTotalAve();
    // 表示
    console.log(this.name + "さんの５教科合計：" + total + "平均：" + ave);
  }
}
