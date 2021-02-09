// TO DO: GET THE IMAGE SOURCE AND PLACE IT INTO THE HTML

(function() {

    let newimage = document.getElementById("source").getAttribute("data-image");

    // CREATE A NEW IMAGE TAG
    newImg = document.createElement("IMG");
    // CREATE THE SRC TAG FOR THE IMAGE
    newImg.src = newimage;
    // CREATE THE ALT TAG FOR THE IMAGE
    newImg.alt = "new image";
    // CREATE THE TITLE TAG FOR THE IMAGE
    newImg.title = "new image";
    // APPEND THE IMG TAG TO THE TARGET
    document.getElementById('target').append(newImg);

})();
