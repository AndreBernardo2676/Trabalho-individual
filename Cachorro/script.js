const dogImage = document.getElementById('dog-image');

dogImage.addEventListener('mouseleave', function() {
  this.src = "triste.png";
});

dogImage.addEventListener('mouseenter', function() {
  this.src = "rindo.png";
});