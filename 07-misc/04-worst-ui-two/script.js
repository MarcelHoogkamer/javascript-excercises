// TO DO: INCREASE THE NUMBER WITH EVERY CLICK TO CREATE A PHONE NUMBER

(function() {

    // THIS IS THE OUTPUT WHERE THE NUMBER IS SHOWN (AND CHANGES)
    let output = document.getElementById("target");

    // THESE ARE THE FOUR BUTTONS SHOWN
    let button1 = document.getElementById("part-one");
    let button2 = document.getElementById("part-two");
    let button3 = document.getElementById("part-three");
    let button4 = document.getElementById("part-four");

    // SELECT EACH BUTTON (HTML TAG!) AND ASSIGN THE SAME FUNCTION AFTER A CLICK (EVENTLISTENER)
        document.querySelectorAll("button").forEach((button) =>

            button.addEventListener("click", function(){

                // SET THE INITIAL BUTTON VALUE FROM THE GIVEN NUMBER
                // GET THE MAX VALUE FROM THE DATA-MAX VALUE
                let value = button.innerHTML;
                let max = button.dataset.max;

                // AS LONG AS THE VALUE HASN'T REACHED MAX, ADD ONE
                if (value < max){
                    value++;
                }

                // MAKE A STRING OF THE VALUE
                value = value.toString();

                if (value.length === max.length) {
                    button.innerHTML = value;
                }

                else {
                    button.innerHTML = "0" + value;
                }

                // RE-ASSEMBLE THE STRING THAT WILL BE DISPLAYED, ADDING A 0 IN FRONT
                output.innerHTML = "0" + button1.innerHTML + button2.innerHTML + button3.innerHTML + button4.innerHTML;

            })
        )
    })();
