// TO DO: ONCE A USER STARTS TYPING, LISTEN IN AND LET THE BOX VISUALLY COUNT THE CHARACTERS
// ONCE IT REACHES 10, MAKE SURE THE USER CANNOT ADD MORE CHARACTERS

(function() {

    // FIRST, LISTEN TO THE TYPING FIELD ONCE A USER STARTS TYPING USING ONKEYUP

    document.getElementById('pass-one').onkeyup= function(){

        // SET A VARIABLE FOR THE LENGTH AND ADD A MAXLENGTH TO THE HTML

        let passLength = this.value.length;
        this.setAttribute("maxlength", "10");

        // REPLACE THE TEXT IN THE ID 'COUNTER' WITH THE CURRENT LENGTH (REFERS TO ABOVE) AND A PRESET TEXT

        document.getElementById("counter").innerText = passLength + "/10";
    }
