// TO DO: WHEN A USER CLICKS THE BUTTON, DISPLAY THE GIVEN NUMBERS AND SORT THEM IN ASCENDING ORDER

(function () {

    // LISTEN TO THE BUTTON CLICK
    document.getElementById("run").addEventListener("click", function () {

        //GET THE VALUES FROM THE ID
        let x = document.getElementById("numbers").value;
        // BREAK THE VALUES UP INTO INDIVIDUAL PIECES, ADD THE COMMA
        let y = x.split(',');
        // SORT THE NUMBERS AND PLACE THEM AGAIN IN THE SAME POSITION
        document.getElementById("numbers").value = y.sort( function(a, b){return a-b});

    });

})();