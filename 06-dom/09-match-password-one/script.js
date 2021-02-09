// TO DO: CHECK IF THE TWO ENTERED PASSWORDS ARE THE SAME. IF NOT, COLOR THE BORDER RED

(function() {

    // document.getElementById("pass-one").setAttribute("required", true);
    // document.getElementById("pass-two").setAttribute("required", true);

    document.getElementById("run").addEventListener("click", function () {

        // GET THE VALUE FROM THE USER INPUT
        let pass1 = document.getElementById("pass-one").value;
        let pass2 = document.getElementById("pass-two").value;

        // SET CONDITIONS FOR MATCHING AND NOT MATCHING
        if (pass1 !== pass2) {

            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
            alert("\nPassword did not match: Please try again...")
            return false;
        } else {
            alert("Password Match: Welcome to BeCode!")
            return true;
        }
    })

    })();
