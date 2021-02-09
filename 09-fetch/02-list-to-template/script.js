// TO DO: IMPORT THE DATA FROM THE JSON FILE INTO THE TEMPLATE SECTION OF THE HTML

(() => {

    document.getElementById("run").addEventListener("click", () =>

        // FETCH THE JSON FILE
        fetch('api.json')
            .then(response => response.json())
            .then(data => {

                    let heroes = data.heroes;

                    heroes.forEach((hero) => {

                        let template = document.getElementById("tpl-hero").content.cloneNode(true);
                        let target = document.getElementById("target");

                        template.querySelector("strong.name").innerText = hero.name;
                        template.querySelector("em.alter-ego").innerText = hero.alterEgo;
                        template.querySelector("p.powers").innerText = hero.abilities;

                        target.appendChild(template);
                    })
                }
            )
            .catch(onerror => console.error("Error, ID value is too high"))
        )
})();

