
// TO DO: DISPLAY EACH VALUE OF THE ARRAY, ONE AFER THE OTHER

(function() {

    document.getElementById("run").addEventListener("click", function() {

    let fruits = ["apple", "pear", "raspberry", "tomatos", "kiwi", "banana", "orange", "mandarin", "durian", "peach", "grape", "cherry"];

    fruits.forEach(fruits => console.log(fruits));
})

})();