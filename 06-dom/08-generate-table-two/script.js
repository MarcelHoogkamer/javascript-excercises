// TO DO: CREATE A TABLE WITH THE MULTIPLICATIONS OF 10

(() => {

        let table = document.createElement("table");

        document.getElementById("target").appendChild(table);
        //i =row
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement("tr");
            table.appendChild(tr);
            //j= column
            for (let j = 0; j < 10; j++) {
                let td = document.createElement("td");

                td.innerText = ((i + 1) * (j + 1)).toString();
                tr.appendChild(td);
            }
        }

    })();
