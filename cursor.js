(function () {
  const link = document.querySelectorAll(".hover-this");
  const cursor = document.querySelector(".cursor");
  const mainHeading = document.querySelector(".main-heading");

  // Add styles to cursor element
  cursor.style.pointerEvents = "none"; // So it doesn't interfere with clicks

  // Function to update cursor position
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  // Functions to handle hover effects
  const handleHover = () => {
    cursor.style.transform = "scale(8)"; // Adjust scale as needed
  };

  const handleMouseLeave = () => {
    cursor.style.transform = "scale(1)"; // Reset scale
  };

  mainHeading.addEventListener("mouseenter", handleHover);
  mainHeading.addEventListener("mouseleave", handleMouseLeave);

  // Add event listeners
  link.forEach((el) => {
    el.addEventListener("mouseenter", handleHover);
    el.addEventListener("mouseleave", handleMouseLeave);
  });

  // Update cursor position on mousemove
  window.addEventListener("mousemove", editCursor);
})();
