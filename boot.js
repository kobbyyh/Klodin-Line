const cardSection = document.querySelector('.card-section');

// Get the distance from the top of the page to the section
const sectionTop = cardSection.offsetTop;

// Set up a scroll event listener
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPos = window.scrollY;

  // If the user has scrolled to the section, trigger the animation
  if (scrollPos >= sectionTop) {
    cardSection.classList.add('animate'); // Add CSS class to trigger animation
  }
});
