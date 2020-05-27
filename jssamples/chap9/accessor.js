class AccessorProp {
  constructor(lastName,firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // nameプロパティのゲッタ
  get name() {
    return this.lastName + this.firstName;
  }

  // extNameのプロパティのセッタ。
  set extName(value){
    this.lastName = value;
    this.firstName = value;
  }
}

// 中田太郎という誌名でAccessorPropオブジェクトを生成。
let taro = new AccessorProp("中田","太郎");

console.log("lastName：" + taro.lastName);
console.log("firstName：" + taro.firstName);

console.log("name：" + taro.name);

taro.extName = "山口二郎";

console.log("lastName：" + taro.lastName);
console.log("firstName：" + taro.firstName);

console.log("extName：" + taro.extName);
console.log("name：" + taro.name);
