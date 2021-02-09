// TO DO: CHECK IF THE ARRAY INCLUDES THE VALUE APPLE, AND GIVE A YES OR NO ANSWER

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var fruits = ["apple", "perry", "strawberry", "tomato", "kiwi", "banana", "orange", "mandarin", "durian", "peach", "grapes", "cherry",];

        if (fruits.includes("apple")) {
            console.log("yes")
        } else {
            console.log("no")
        }

    })
})();
