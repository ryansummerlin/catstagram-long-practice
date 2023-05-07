const catImageURL = "https://api.thecatapi.com/v1/images/search";

const getCatImage = function() {

    fetch(catImageURL)
    .then(function(res) {
        return res.text();
      })
      .then(function(data) {
        let parsedData = JSON.parse(data);
        return parsedData[0]
      })
      .then(function(obj) {
        const imageContainer = document.getElementById("image-container");
        const image = document.createElement("img");
        image.setAttribute("id", "image");
        image.setAttribute("alt", "cat image from Cat API");
        let imageURL = obj["url"];
        image.setAttribute("src", imageURL);
        imageContainer.appendChild(image);
      });

}

document.addEventListener("DOMContentLoaded", getCatImage);
