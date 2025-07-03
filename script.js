// 
// GoldTube - A Luxury YouTube Clone
// Author: [Your Name]
// Date: [Today's Date]
//

// Select all video cards
const videoCards = document.querySelectorAll('.video-card');

// Add event listener to each video card
videoCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('smooth-transition');
  });
  
  card.addEventListener('mouseout', () => {
    card.classList.remove('smooth-transition');
  });
});

// Add fade-in animation to main content
document.querySelector('.main').classList.add('fade-in');

// Error handling and user feedback
try {
  // Code to execute
} catch (error) {
  console.error('Error:', error);
  alert('An error occurred. Please try again later.');
}