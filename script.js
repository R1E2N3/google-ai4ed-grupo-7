document.addEventListener('DOMContentLoaded', function() {
  const text = "Modernize";
  const typingSpeed = 150; // Adjust typing speed here
  let index = 0;

  function type() {
    if (index < text.length) {
      document.getElementById("typing-animation").innerHTML += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    } else {
      document.getElementById("typing-animation").style.borderRight = "none"; // Remove cursor
    }
  }

  type();
});
