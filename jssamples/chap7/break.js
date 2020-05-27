let breakPoint = Math.round(Math.random() * 10);
console.log("breakPoint=" + breakPoint);

for(let i = 1; i <= 10; i++){
  console.log(i + "回目 roop start");
  if(i === breakPoint){
    console.log("breakPointのためbreak");
    continue;
  }
  console.log(i + "回目 roop end");
}
