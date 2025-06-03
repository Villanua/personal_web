document.addEventListener('DOMContentLoaded', function() {
  // Get all navbar links
  const navLinks = document.querySelectorAll('.navbar a');
  
  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor behavior
      e.preventDefault();
      
      // Get the target section id from the href
      const targetId = this.getAttribute('href');
      
      // Find the target element
      const targetElement = document.querySelector(targetId);
      
      // Scroll to the element smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});
