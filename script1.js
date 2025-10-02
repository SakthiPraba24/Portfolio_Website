
  // Animated Text In Home
  
  const titles = ["Web Developer", "Software Developer", "Front-End Developer"];
  const textElement = document.querySelector(".animated-text");

  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (!deleting) {
      textElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentTitle.length) {
        deleting = true;
        setTimeout(typeEffect, 1500); // Wait before deleting
        return;
      }
    } else {
      textElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }
    setTimeout(typeEffect, deleting ? 50 : 100); // Typing & deleting speed
  }

  typeEffect();
