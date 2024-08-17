(function () {
  const originalConsoleLog = console.log;
  const consoleDiv = document.getElementById("consoleDiv");
  const toggleButton = document.getElementById("toggleConsoleButton");
  let logCounter = 1;

  // Override console.log method
  console.log = function (...args) {
    const logMessage = document.createElement("div");
    logMessage.className = "logMessage";

    const lineNumber = document.createElement("span");
    lineNumber.style.color = "#0f0";
    lineNumber.textContent = logCounter++ + ": ";

    logMessage.appendChild(lineNumber);
    logMessage.appendChild(document.createTextNode(args.join(" ")));

    consoleDiv.appendChild(logMessage);

    // Maintain the scroll position
    consoleDiv.scrollTop = consoleDiv.scrollHeight;

    originalConsoleLog.apply(console, args);
  };

  // Toggle visibility of the console box
  toggleButton.addEventListener("click", function () {
    if (
      consoleDiv.style.display === "none" ||
      consoleDiv.style.display === ""
    ) {
      consoleDiv.style.display = "block";
      toggleButton.textContent = "Hide Console";
    } else {
      consoleDiv.style.display = "none";
      toggleButton.textContent = "Show Console";
    }
  });
})();

// Test logs
console.log("Hello world! Console Here.");
