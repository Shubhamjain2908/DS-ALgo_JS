function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;

    // IIFE
    // This num value will be same for it's own scope
    // Despite changing the value of i.
    ((num) => {
      button.onclick = function () {
        alert('This is button ' + num);
      };
    })(i);

    body.appendChild(button);
  }
}

createButtons();

// Solved it using IIFE