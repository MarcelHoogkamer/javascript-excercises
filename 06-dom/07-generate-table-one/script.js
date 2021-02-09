
//TO DO: CREATE A TABLE WITH 10 ROWS AND 1 COLUMN AND PLACE IT IN THE DIV 'TARGET'

(function () {

    // CREATE A NEW TABLE
    let table = document.createElement("table");

    // APPEND THE TABLE TO THE DIV ELEMENT 'TARGET'
    document.getElementById("target").appendChild(table);
    // SET THE 'I' (ROWS)
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        // SET THE 'J' (COLUMN)
        for (let j = 0; j < 1; j++) {
            let td = document.createElement("td");

            //JOIN TABLE ROWS WITH TABLE COLUMN
            tr.appendChild(td);
        }
    }

})();
