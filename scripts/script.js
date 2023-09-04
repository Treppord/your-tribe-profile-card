const expandButton = document.querySelector('header button');
const article = document.querySelector('article');
const header = document.querySelector('header');

expandButton.addEventListener('click', expand);

function expand() {
  document.body.classList.toggle('expand');
  
  if (document.body.classList.contains('expand')) {
    // Calculate the scroll position to include the header
    const scrollPosition = header.offsetTop - 20; // You can adjust the offset as needed
    
    // Scroll to the calculated position
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    
    // Add a class to the <dl> element for the expanded state
    document.querySelector('dl').classList.add('expanded');
  } else {
    // Remove the class when the button is pressed again to collapse
    document.querySelector('dl').classList.remove('expanded');
  }
}
