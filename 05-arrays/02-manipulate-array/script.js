// TO DO: FROM THE ARRAY, REMOVE THE FIRST AND LAST ELEMENT, ADD "BANANA" TO THE START AND "KIWI" TO THE END

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // SHIFT = REMOVE FIRST ELEMENT, POP = REMOVE LAST ELEMENT, UNSHIFT = ADD FIRST ELEMENT, PUSH = ADD LAST ELEMENT
        var fruits = ["apple", "pear", "raspberry", "tomatos", "kiwi", "banana", "orange", "mandarin", "durian", "peach", "grape", "cherry"];
        fruits.shift();
        fruits.pop();
        fruits.unshift("banana");
        fruits.push("kiwi");

        console.table(fruits);
    })

})();
