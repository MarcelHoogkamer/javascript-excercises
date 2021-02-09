// TO DO: REMOVE DUPLICATES FROM THE ARRAY

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var fruits = ["cerise", "durian", "pomme", "poire", "fraise", "tomate", "orange", "mandarine", "fraise", "durian", "pêche", "cerise", "raisin", "cerise",];

        var uniq = fruits.reduce(function(a,b){
            if (a.indexOf(b) < 0 ) a.push(b);
            return a;
        },[]);

        console.log(uniq);
    })

})();
