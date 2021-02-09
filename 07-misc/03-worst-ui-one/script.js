
// TO DO: MAKE THE SLIDER DISPLAY THE CURRENT VALUE (PLUS A '0' IN THE BEGINNING

(function() {

    // MAKE VARIABLES FOR THE VALUE (INPUT FROM SLIDER) AND FOR THE TARGET (WHERE IT DISPLAYS THE CURRENT NUMBER)

    var slider = document.getElementById("slider");
    var output = document.getElementById("target");

    // DECLARE THAT IN THE OUTPUT 'TARGET', IT WILL DISPLAY THE VALUE
    output.innerHTML = slider.value;

    // USE A FUNCTION TO GRAB ON TO THE INPUT, AND DISPLAY THE VALUE AFTER A '0'
    slider.oninput = function () {
        output.innerHTML = 0 + this.value;
    }
}());