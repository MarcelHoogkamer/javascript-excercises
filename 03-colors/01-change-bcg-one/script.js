// TO DO: WHEN THE USER CLICKS ONE OF THE FOUR BUTTONS, THE BACKGROUND COLOR CHANGES TO THE MENTIONED COLOR

(function() {

    document.getElementById("red").addEventListener("click", function() {
        document.body.style.background = "#FF0000";
    });

    document.getElementById("green").addEventListener("click", function() {
        document.body.style.background = "#00FF00";
    });

    document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.background = "#FFFF00";
    });

    document.getElementById("blue").addEventListener("click", function() {
        document.body.style.background = "#0000FF";
    });

})();
