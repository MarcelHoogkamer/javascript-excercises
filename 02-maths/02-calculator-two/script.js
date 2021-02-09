// TO DO: MAKE THE CALCULATOR WORK USING 'SWITCH'

(function () {

    // MAKE 4 CASES FOR EACH OF THE POSSIBLE CALCULATIONS
    var performOperation = function (operation) {

            switch (operation) {

                case "addition":
                    alert(+document.getElementById("op-one").value + +document.getElementById("op-two").value);
                    break;

                case "substraction":
                    alert(document.getElementById("op-one").value - document.getElementById("op-two").value);
                    break;

                case "multiplication":
                    alert(document.getElementById("op-one").value * document.getElementById("op-two").value);
                    break;

                case "division":
                    alert(document.getElementById("op-one").value / document.getElementById("op-two").value);
                    break;

            }
        };

    // TO LISTEN TO THE BUTTONS, THIS USES A FOREACH
    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });
})();