// TO DO: CREATE A SLIDESHOW USING THE IMAGES FROM THE ARRAY

(function () {

    // THIS IS THE ORIGINAL GALLERY ARRAY

    let gallery = [

        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // SET THE INDEX NUMBER
    let i = 1;

    // LISTEN TO THE ID 'NEXT' AND ADD AN EVENT LISTENER FOR EVERY CLICK
    document.getElementById("next").addEventListener("click", () => {
        // ADD AN ATTRIBUTE TO 'IMG' CALLED 'SRC' AND LINK IT TO THE GALLERY ARRAY
        document.querySelector("img").setAttribute("src", gallery[i]);
        // USE AN IF...ELSE STATEMENT TO INCREASE THE INDEX ON EVERY CLICK, THUS SHOWING THE NEXT INDEX FROM THE GALLERY
        if (i < gallery.length-1) {
            i++;
        }else {
            i=0;
        }
    });

})();