// TO DO: WHEN CLICKING THE BUTTON, INCREASE THE COUNTER BY 1
// USE LOCALSTORAGE TO REMEMBER AND DISPLAY THE LAST VALUE UPON RELOADING

(function() {

    // SET THE COUNTER TO ZERO
    let counter = 0;

    // SET THE CONDITIONS FOR THE COUNTER UPON A NEW LOAD
    if (localStorage.getItem("counter")) {
        counter = localStorage.getItem("counter");
        document.getElementById("target").innerHTML = counter;
    }

    // LISTEN TO THE BUTTON CLICK, INCREMENT THE VALUE, TURN VALUE TO STRING, SET THIS VALUE TO LOCALSTORAGE
    document.getElementById("increment").addEventListener("click", function () {
        counter++;
        document.getElementById("target").innerHTML = counter.toString();
        localStorage.setItem('counter', counter.toString());

    })

})();
