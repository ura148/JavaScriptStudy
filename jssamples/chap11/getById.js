function onH1ButtonClick(){
  let headTitle = document.getElementById("headTitle");

  console.log(headTitle);
}

function onH1TextButtonClick(){
  let headTitleText = headTitle.textContent;
  // 取得したテキスト部分をコンソール表示
  console.log(headTitleText);
}

function onH1TextAltButtonClick(){
  let headTitle = document.getElementById("headTitle");

  headTitle.textContent = "ここに文章を挿入したよ"
}
