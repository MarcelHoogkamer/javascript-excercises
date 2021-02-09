
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPersons((error, persons) => {
            if (error !== null) {
                console.error("An error has occurred");
            } else {
                console.table(persons);
            }
        })
    })
})();


