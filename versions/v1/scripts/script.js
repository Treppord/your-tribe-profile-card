document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
      const clickEffect = document.createElement("div");
      clickEffect.className = "click-effect";
      document.body.appendChild(clickEffect);

      const x = event.clientX;
      const y = event.clientY;

      // Adjust the position to be more to the upper right
      clickEffect.style.left = x - 10 + "px";
      clickEffect.style.top = y - 10 + "px";
      clickEffect.style.transform = "scale(1)"; // Grow the circle

      setTimeout(() => {
          clickEffect.style.transform = "scale(0)"; // Shrink and disappear
          clickEffect.addEventListener("transitionend", () => {
              document.body.removeChild(clickEffect); // Remove the element after it disappears
          });
      }, 50);
  });
});
