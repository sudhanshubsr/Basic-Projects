const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//UNSPLASH API

const count = 30;
const apiKey = "XoyV00Q5G28thr9ygYdjN4tw1w22ACTl6tbS7ZQowqQ";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if all images were loaded

function imageLoaded() {
  imagesLoaded += 1;
  if (imagesLoaded === totalImages) {
    loader.hidden = true;
    ready = true;
  }
}

// Helper Function to Set Attributes to DOM Elements

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for LINKs & Photos, Add to DOM

function displayPhotos() {
  totalImages = photosArray.length;
  imagesLoaded = 0;
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //Event Listener for Loading Image

    img.addEventListener("load", imageLoaded);

    //Put <img> inside <a>, then puth both inside image Container Element

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from API

async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log("error", error);
  }
}

//check to see if scrolling near bottom of page, Load More Photos

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
