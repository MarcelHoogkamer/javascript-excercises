// TO DO: INPUT FROM PASSWORD FIELD HAS TO CONTAIN 8 CHARACTERS OF WHICH 2 ARE NUMBERS.
// IF THESE CONDITIONS ARE MET, MESSAGE CHANGES FROM 'NOT OK' TO 'OK'

(function() {

    // FIRST: DEFINE WHEN YOUR CODE STARTS LISTENING (ONKEYUP = WHEN TYPING STARTS IN SPECIFIED FIELD)

    document.getElementById('pass-one').onkeyup= function() {

        // SPECIFY THE EXACT SPOT WHERE THE MESSAGE HAS TO APPEAR (ID 'VALIDITY')
        // SPECIFY WHERE THE CHECKED TEXT INPUT COMES FROM (ID 'PASS-ONE') AND SET IT TO 'VALUE'

        let replace = document.getElementById("validity");
        let passInput = document.getElementById('pass-one').value;

        // CREATE A FOR LOOP TO CHECK THE OCCURRENCE OF NUMBERS BETWEEN 0 AND 9
        // EACH TIME THIS OCCURS, IT ADDS ONE TO THE VARIABLE 'NUMPASSINPUT'

        let numpassInput = 0;
        for (let i = 0; i < passInput.length; i++) {

            if (passInput.charAt(i) >= '0' && passInput.charAt(i) <= '9') {
                numpassInput++;
            }
        }

        // LASTLY, CHECK TO SEE IF THE CONDITIONS ARE MET AND DISPLAY A MESSAGE
        // USE BOTH CONDITIONS IN ONE STATEMENT, BECAUSE THEY BOTH HAVE TO BE MET

        if (passInput.length >= 8 && numpassInput >= 2) {
            replace.innerText = "PASSWORD ACCEPTED";
        } else {
            replace.innerText = "TYPE 8 CHARACTERS (2 NUMBERS)";
        }
        }

})();
