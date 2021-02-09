// TO DO: ASK THE USER'S NAME, GENDER AND PLACE OF RESIDENCE. ALERT THE RESULT AND ASK THE USER TO CONFIRM

(function checkbox() {

    // SET VARIABLES FOR THE PROMPT MESSAGES AND FOR THE CONFIRMATION MESSAGE
    let gender = prompt("what is your gender?", "Male");
    let age = prompt("how old are you?");
    let town = prompt("Which town are you from?");
    let isok = confirm("is this all correct?" + " " + "you are a " + gender + " " + "who is" + " " + age + " " + "old" + " " + "who lives in " + town);

    // USE AN IF/ELSE TO EITHER RESTART THE PROCESS OR TO THANK THE VISITOR
    if (isok !== true){
        alert("That's not correct, please start over");
        checkbox();
    }
        else{
            alert("Thank you!")
    }

})();

