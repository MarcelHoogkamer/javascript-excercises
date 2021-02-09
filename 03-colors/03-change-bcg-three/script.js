
// WHEN THE USER CLICKS THE BUTTON, GENERATE A RANDOM BACKGROUND COLOR

(function() {

    document.getElementById("run").addEventListener("click", function () {

        function randomize() {

            var rgbcolor;
            // USE MATH.RANDOM TO GENERATE DIFFERENT COLOR CODES
            red = Math.random() * 255;
            green = Math.random() * 255;
            blue = Math.random() * 255;

            rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            document.body.style.background = rgbColor;

        }

        randomize();
    });

})();