let nameList = ["松田", "田中", "吉田", "柏木", "都筑"];

// for(let i = 0; i <= 4; i++){
//   console.log((i + 1) + "人目は" + nameList[i]);
// }
//
// for(let i = 0; i < nameList.length; i++){
//   console.log((i + 1) + "人目は" + nameList[i]);
// }


for(let name of nameList){
  console.log(name);
}
