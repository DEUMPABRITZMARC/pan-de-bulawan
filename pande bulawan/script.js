const images = [
  "images/store1.jpg",
  "images/store2.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function showImage() {
  carouselImage.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}
