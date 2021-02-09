// TO DO:

(() => {
    document.getElementById("run").addEventListener("click", function() {

        fetch('api.json')
         .then(response => response.json())
            .then(data =>{
            let heroes = data.heroes;

            let hero ={
                id: (data.heroes).length + 1,
                name: document.getElementById("hero-name").value,
                alterEgo: document.getElementById("hero-alter-ego").value,
                abilities: document.getElementById("hero-powers").value.split(" ")

            }
            heroes.push(hero);
            console.table(heroes);
        })
            .catch(onerror => console.error("Error, ID value is too high"))

    });
})();
