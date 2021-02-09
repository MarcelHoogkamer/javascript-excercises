// TO DO: IF IT'S BEFORE 18H, SAY 'HELLO', OTHERWISE 'GOOD EVENING'

(function() {

    // GET THE CURRENT HOUR
    var hour = new Date().getHours();

    SET A CONDITION WITH TWO OUTCOMES
    if(hour <= 18) {
        document.getElementById("target").innerHTML = "Hello";
    } else {
        document.getElementById("target").innerHTML = "Good evening";
    }


})();

