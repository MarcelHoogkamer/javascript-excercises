// You will have time to focus on it later.

(function() {

        document.getElementById("run").addEventListener("click", function () {

            function randomGenerator(min,max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            let numberlist= [];
            for(let i=1; i<=10; i++){
                numberlist.push(randomGenerator(1,100));

                document.getElementById("n-"+ i).innerText = numberlist[i-1];
            }

        document.getElementById("min").innerHTML = numberlist.sort((a,b)=> a-b)[0];
        document.getElementById("max").innerHTML = Math.max(...numberlist);
        document.getElementById("sum").innerHTML = numberlist.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = numberlist.reduce(function(sum, a) { return sum + a },0)/(numberlist.length||1);

    })
})();

