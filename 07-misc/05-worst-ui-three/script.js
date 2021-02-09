(function() {

    // USE THE DATA-MIN AND DATA-MAX VALUES TO RANDOMIZE
    function random (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max -min + 1) + min);
    }

    document.querySelectorAll("button").forEach(button => button.addEventListener("click", event => {

    // FOR EACH BUTTON, REMOVE THE PREFIX "FIX-" FROM THE ID NAME
        let newButtonID = event.target.getAttribute("id").replace("fix-", "");

    // RETRIEVE THE VALUES FROM THE ATTRIBUTES
        let minValue = document.getElementById(newButtonID).getAttribute("data-min");
        let maxValue = document.getElementById(newButtonID).getAttribute("data-max");

    // NOW DISPLAY THESE VALUES IN THE INPUT FIELD AND ADD A '0' BEFORE IT
        document.getElementById(newButtonID).value = random(minValue, maxValue).toString().padStart(2, '0');

    // ALSO DISPLAY THE RANDOM NUMBERS AS A PHONE NUMBER, IN THE RIGHT PLACE
        document.getElementById("target").innerText = "+";
        document.querySelectorAll("input").forEach(input =>
            document.getElementById("target").innerText =
                document.getElementById("target").innerText + input.value.toString());

    }))
})();



// (function () {
//
//     // array van inputs waarvan input steeds met juiste button overeen komt dankzij zelfde index
//     let inputs = document.querySelectorAll("input");
//
//     // loop over elke button waarbij zowel input als button gemanipuleerd worden
//     document.querySelectorAll("button").forEach((button, index) => {
//         let input = inputs[index];
//         let number = input.dataset.min;
//
//         let slotMachine = setInterval(function(){
//             number = numberSpinner(input, number);
//         }, 50);
//
//         button.addEventListener("click", function () {
//             clearInterval(slotMachine);
//         })
//     })
//
//     // intervalfunctie om display mee te laten loopen met de inputfields
//     setInterval(function () {
//         let output = '0';
//         inputs.forEach(element => {
//             output += element.value.toString().padStart(element.dataset.min.length, '0');
//         });
//         document.getElementById("target").innerHTML = output;
//     }, 50);
//
//     // intervalfunctie die hierboven in de slotMachine wordt opgeroepen voor elke input
//     function numberSpinner(input, number){
//         input.value = number.toString();
//         number++;
//         if (number >= input.dataset.max){
//             number = input.dataset.min;
//         }
//         return number;
//     }