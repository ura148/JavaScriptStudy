function onFreewordButtonClick() {
  // idがfreewordInputのinput要素を取得
  let freewordInput = document.getElementById("freewordInput");

  let freewordInputValue = freewordInput.value;
  // 取得したinput要素のname属性値を取得
  let freewordInputName = freewordInput.getAttribute("name");
  // idがshowInputのp要素を取得
  showInput.textContent = "name属性値が" + freewordInputName + "の入力された値:" +freewordInputValue;
}
