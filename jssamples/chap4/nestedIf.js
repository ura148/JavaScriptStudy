let num = Math.round(Math.random() * 100);
console.log("now value:" + num);
if((num % 2 === 0) && (num % 3 === 0)){
  console.log("2の倍数でありかつ3の倍数でもあります。");  
}else{
  console.log("それ以外です")
}
