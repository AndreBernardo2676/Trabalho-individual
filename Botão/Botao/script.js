const fleeButton = document.getElementById('fleeButton');

fleeButton.addEventListener('click', () => {
  const newX = Math.random() * (window.innerWidth - fleeButton.offsetWidth);
  const newY = Math.random() * (window.innerHeight - fleeButton.offsetHeight);
  
  fleeButton.style.left = newX + 'px';
  fleeButton.style.top = newY + 'px';
});