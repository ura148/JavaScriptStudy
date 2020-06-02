console.log("road");

function onP2RedButtonClick(){
  let showText = document.getElementById("showText");
  showText.setAttribute("class", "redText");
  console.log("red");
}


function onP2DefaultButtonClick(){
  let showText = document.getElementById("showText");
  showText.removeAttribute("class");
  console.log("default");
}
