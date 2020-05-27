let nums = [];
for(let i = 0; i < 30; i++){
  nums[i] = Math.round(Math.random() * 100);
  console.log((i + 1) + "番目の値=" + nums[i]);
}

let sum = 0;
let max = 0;
for(let num of nums){
  sum += num;
  if(num > max){
    max += num;
  }
}

let ave = sum / nums.length;
console.log("sum:" + sum);
console.log("max:" + max);
console.log("ave:" + ave);
