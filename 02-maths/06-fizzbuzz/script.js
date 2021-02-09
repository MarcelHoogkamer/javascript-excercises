// TO DO: SHOW IN THE CONSOLE IF THE NUMBERS BETWEEN 1 AND 100 ARE MULTIPLES OF 3 (FIZZ), MULTIPLES OF 5 (BUZZ) OR BOTH OF THESE (FIZZBUZZ)
// OR SIMPLY THE NUMBER IF NONE OF THESE APPLY

(function() {

    // WITH THE FOR LOOP, GO OVER ALL 100 NUMBERS AND TEST THEM
    for (let i = 1; i <= 100; i++) {
        let empty = "";
        if (i % 3 === 0) empty += "fizz";
        if (i % 5 === 0) empty += "buzz";

        console.log(i+" "+ empty || i);
    }

})();
