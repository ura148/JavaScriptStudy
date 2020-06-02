let fishNameList = new Map();

// 主にターゲットとなる魚種名を登録。キーは魚種名、値は釣った場合のポイント
fishNameList.set("クロダイ", 3);
fishNameList.set("カサゴ", 1);
fishNameList.set("ギンポ", -1);

let fishPointKurodai = fishNameList.get("クロダイ");
console.log("クロダイは" + fishPointKurodai + "pointです。");
