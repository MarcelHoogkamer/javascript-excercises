// TO DO: CHECK IF THE PASSWORDS MATCH; IF NOT, ADD AN ERROR CLASS

(function() {

    document.getElementById("run").addEventListener("click", function () {

        let pass1 = document.getElementById("pass-one").value;
        let pass2 = document.getElementById("pass-two").value;

        if (pass1 !== pass2) {
            document.getElementById('pass-one').className = 'error';
            document.getElementById('pass-two').className = 'error';
        }

        else{
            alert("Password Match: Welcome to BeCode!")
            return true;
        }

    })

})();
