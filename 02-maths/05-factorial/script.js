// WHEN THE USER CLICKS THE BUTTON, GET THE VALUE AND RETURN ITS FACTORIAL

(function() {

    // LISTEN TO THE BUTTON CLICK
    document.getElementById("run").addEventListener("click", function() {

        // USE A FOR LOOP TO GO OVER THE INPUT VALUE AND DO THE CALCULATION
        let x = 1;
        for (let i=2; i <= document.getElementById("number").value; i++)
            x = x * i;
        alert(x);

    });

})();