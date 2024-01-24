document.addEventListener("DOMContentLoaded", function () {
  const imageGrid = document.getElementById("imageGrid");
  const grayscaleToggle = document.querySelector(".switch input");
  const fetchButton = document.querySelector(".button1");
  const morePhotosButton = document.getElementById("morePhotosButton");

  let nrOfImages = 4;

  function fetchImages() {

      const apiUrl = "https://source.unsplash.com/367x200/?random&quality=high";

    imageGrid.innerHTML = "";

    for (let i = 1; i <= nrOfImages; i++) {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const randomParam = Math.floor(Math.random() * 1000);

      const image = document.createElement("img");
      image.classList.add("image");
      image.src = `${apiUrl}${randomParam}`;
      image.alt = `Image ${i}`;

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      overlay.textContent =
        "Lukas Budimaier https://unsplash.com/photots/pwaaqfoMibl";

      imageContainer.appendChild(image);
      imageContainer.appendChild(overlay);
      imageGrid.appendChild(imageContainer);
    }

    if (grayscaleToggle.checked) {
      toggleGrayscale();
    }
  }

  function toggleGrayscale() {
    const images = document.querySelectorAll(".image");

    images.forEach((image) => {
      if (grayscaleToggle.checked) {
        image.style.filter = "grayscale(100%)";
      } else {
        image.style.filter = "none";
      }
    });
  }

  function fetchMorePhotos() {
    nrOfImages += 4;
    fetchImages();
  }

  fetchImages();

  grayscaleToggle.addEventListener("change", toggleGrayscale);

  fetchButton.addEventListener("click", function () {
    fetchImages();
  });
  morePhotosButton.addEventListener("click", fetchMorePhotos);
});