//varible creation for images

let getPictures = document.querySelectorAll("img[data-src]");

//when picture loads the original src image is replaced by the data-src image
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

//Controls speed of loading
const options = {
    threshold: .25,
    rootMargin: "0px 0px 50px 0px",
};

//asks if the window can run intersection observer 
if ("IntersectionObserver" in window) {
    
//set up function that will cause the images to load only if in view
    const observer = new IntersectionObserver((photos, observer) => {
      photos.forEach((photo) => {
        if (photo.isIntersecting) {
          loadImages(photo.target);
          observer.unobserve(photo.target);
        }
      });
    },options);
    getPictures.forEach((img) => {
      observer.observe(img);
    });
  } else {
    getPictures.forEach((img) => {
      loadImages(img);
    });
  }
  









