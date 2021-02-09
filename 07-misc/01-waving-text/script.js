
// TO DO: EDIT THE TEXT IN THE PARAGRAPH SO THAT IT SHOWS AS A WAVE WITH AT LEAST 5 DIFFERENT FONT SIZES

(function () {

    // SPECIFY THE TARGET TEXT

    let targetText = document.getElementById("target").innerText;

    // USE SPLIT TO SEPERATE TEXT INPUT INTO SINGLE CHARACTERS

    let splitText = targetText.split("");
    document.getElementById("target").innerText = "";

    // USE A FOR-LOOP TO COUNT THE CHARACTERS AND PUT EACH OF THEM IN A SPAN ELEMENT

    for (let i = 0; i < splitText.length; i++) {

        let span = document.createElement("span");
        span.id = "span" + i;

        let content = document.createTextNode(splitText[i]);

        span.appendChild(content);
        document.getElementById("target").appendChild(span);

    // WITH THE SWITCH METHOD, SET THE FONT SIZE AND WHEN TO APPLY IT

        switch (i%10) {
            case 0:
            case 9:
                document.getElementById("span" + i).style.fontSize = '20px';
                break;
            case 1:
            case 8:
                document.getElementById("span" + i).style.fontSize = '25px';
                break;
            case 2:
            case 7:
                document.getElementById("span" + i).style.fontSize = '30px';
                break;
            case 3:
            case 6:
                document.getElementById("span" + i).style.fontSize = '35px';
                break;
            case 4:
            case 5:
                document.getElementById("span" + i).style.fontSize = '40px';
                break;
        }
    }
})();
