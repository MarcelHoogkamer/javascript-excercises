// TO DO: DISPLAY EACH MONTH THAT HAS A FRIDAY THE 13TH OF THE SPECIFIED YEAR

(function() {

    // LISTEN TO THE BUTTON CLICK
    document.getElementById("run").addEventListener("click", function () {

        // GET THE SELECTED YEAR
        let year = document.getElementById("year").value;

        // GET THE CURRENT YEAR
        let d = new Date(year);

        for (let i = 1; i <= 366; i++) {
            if (d.getFullYear().toString() === year) {
                if (d.toDateString().substr(0, 3) === "Fri" && parseInt(d.toDateString().substr(8, 2)) === 13) {
                    alert(d.toLocaleString('default', { month: 'long' }));
                }
            } else {
                break;
            }
            d.setDate(d.getDate() + 1);
        }
    })



})();
