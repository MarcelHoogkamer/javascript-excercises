// TO DO: IF IT'S BEFORE 17:30, CHANGE THE CONTENT TO HELLO. OTHERWISE GOOD EVENING.

(function() {

    // ADD A ZERO TO ALL SINGLE DIGITS
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // GET THE DATE AND TIME, COMBINE THEM INTO A STRING
    let d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let timer = h + m;

    // SET TWO CONDITIONS FOR THE DISPLAYED TEXT
    if (timer >= 1730) {
        document.getElementById("target").innerHTML = "Good evening";
    }
    else {
        document.getElementById("target").innerHTML = "Hello";
    }

})();
