// TO DO: GET THE TEXT FROM THE PARAGRAPH AND LET IT APPEAR ONE BY ONE (LIKE A TYPEWRITER)
// MAKE SURE THE SPEED OF APPEARANCE IS RANDOM

(function () {

    // SPECIFY THE SOURCE OF THE TEXT, AND PREVENT IT FROM LOADING (EMPTY USING SPLIT)

    let text = document.getElementById("target").innerText;
    let splitText = text.split("");
    document.getElementById("target").innerText = "";
    let index = 0

    // SET THE SPEED OF THE APPEARANCE TO RANDOM

    let delay = setInterval(typeWriter, (Math.random() * 500));

    // USE AN IF...ELSE
    // CLEAR THE SETINTERVAL WHEN THE LENGTH OF THE TEXT IS REACHED

    function typeWriter() {
        if (index === splitText.length) {
            clearInterval(delay);
        }

// PRINT THE TEXT ONTO THE SCREEN
        else {
            document.getElementById("target").innerHTML += splitText[index];
            index++;
        }
    }
})();

