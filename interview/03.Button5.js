function createButtons() {
  // it is block scope
  for (let i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    button.onclick = function () {
      alert('This is button ' + i);
    };
    body.appendChild(button);
  }
}

createButtons();