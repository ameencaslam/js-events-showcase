(function () {
  const toggleButton = document.getElementById("toggleModeButton");
  let modeValue = 0;

  toggleButton.addEventListener("click", function () {
    if (modeValue === 0) {
      toggleButton.style.backgroundImage = "url(moon.png)";
      document.documentElement.style.filter = "invert(100%)";
      modeValue = 1;
    } else {
      toggleButton.style.backgroundImage = "url(sun.png)";
      document.documentElement.style.filter = "invert(0%)";
      modeValue = 0;
    }
  });
})();
