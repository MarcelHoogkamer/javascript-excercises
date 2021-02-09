// TO DO:

(() => {

    document.getElementById("run").addEventListener("click", function () {

        let input = document.querySelector("input").value;

        fetch('api.json')
            .then(response => response.json())
            .then(data => {

                    let heroes = data.heroes;

                    let findId = parseInt(document.getElementById("hero-id").value);
                    let result = heroes.find(hero => hero.id === findId);

                        let template = document.getElementById("tpl-hero").content.cloneNode(true);
                        let target = document.getElementById("target");

                        template.querySelector("strong.name").innerText = result.name;
                        template.querySelector("em.alter-ego").innerText = result.alterEgo;
                        template.querySelector("p.powers").innerText = result.abilities;

                        target.appendChild(template);
                    })
            .catch(onerror => console.error("Error, ID value is too high"))
                })

})();

