let str = "";
for(let d = 1; d <= 11; d++){
  if(d % 2 !== 0){
    str += "★\n";
  }else{
    str += "☆\n";
  }
}
console.log(str);
