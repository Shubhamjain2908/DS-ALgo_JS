function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

const addClickFunctionality = (button, num) => {
  button.onclick = () => {
    alert('This is button ' + num);
  };
}


createButtons();