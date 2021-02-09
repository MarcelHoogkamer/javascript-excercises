// TO DO: When you click the button, display in the console, one after the other (use a loop), each value of the array

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let fruits = ["apple", "pear", "raspberry", "tomatos", "kiwi", "banana", "orange", "mandarin", "durian", "peach", "grape", "cherry"];

        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }
    })

})();

// ANOTHER SOLUTION:

// let index = 0;
// while (index < fruits.length){
//     console.log(fruits[index]);
//     index += 1;
// }