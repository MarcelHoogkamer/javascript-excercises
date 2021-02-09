// TO DO: WHEN YOU CLICK THE BUTTON, ALERT THE SQUARENUMBERS BETWEEN 1 AND 21

(function(){

        // LISTEN TO THE CLICK ON THE BUTTON
        document.getElementById("run").addEventListener("click", function() {

        let msg="";
        let res= "0";

        // LOOP OVER THE CALCULATIONS FROM 1 TO 21
        for(let x= 1; x<=21; x++)
        {
            res = x * x;
            msg = x + "*"+ x + " = " + res + "\n";
        }

        // ALERT THE MESSAGE
        alert(msg);

    });

})();