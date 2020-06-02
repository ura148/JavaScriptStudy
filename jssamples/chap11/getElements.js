console.log("start");

function onTagButtonClick() {
  let buttonTags = document.getElementsByTagName("button");
  
  let result = "";
  
  for(let i = 0; i < buttonTags.length; i++) {
    result += buttonTags[i].textContent + ":"
  }
  
  let resultP = document.getElementById("result");
  
  resultP.textContent = result;
}


function onClassButtonClick(){
  let redElemnets = document.getElementsByClassName("redText");
  
  console.log(redElemnets);
  
  let result = ""
  
  for(let i = 0; i < redElemnets.length; i++){
    result += redElemnets[i].textContent + ":";
  }
  
  let resultP = document.getElementById("result");
  
  resultP.textContent = result;
}

function onNameButtonClick(){
  let checkboxes = document.getElementsByName("skill");
  
  let result = "チェックされたもの："
  for(let i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked){
      result += checkboxes[i].value + ",";
    }else{
      result += checkboxes[i].value +  "は該当しない" +","
    }
  }
  
  let resultP = document.getElementById("result");
  resultP.textContent = result;
}