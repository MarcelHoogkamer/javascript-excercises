// TO DO: WHEN THE USER CLICKS THE BUTTON, GET THEIR BIRTHDATE AND DISPLAY THEIR AGE

(function() {

    // LISTEN TO THE CLICK OF THE BUTTON
    document.getElementById("run").addEventListener("click", function () {

        // GET THE INPUT VALUES FROM THE USER'S INPUT
        let birthyear = document.getElementById("dob-year").value;
        let birthmonth = document.getElementById("dob-month").value;
        let birthday = document.getElementById("dob-day").value;

        // GET THE PRESENT DATE
        let presentyear = new Date().getFullYear();
        let presentmonth = new Date().getMonth();
        let presentday = new Date().getDay();

        // SUBTRACT THE BIRTHYEAR FROM THE PRESENT YEAR
        let age = presentyear - birthyear;

        // ACCOUNT FOR THE CURRENT MONTH AND DAY
        if ( presentmonth +1 < birthmonth || (presentmonth +1 === birthmonth && presentday < birthday))
            age--;

        alert("You are currently " + age + " years old.");

    })

})();