// TO DO: WHEN THE USER HOVERS OVER THE IMAGE, CHANGE THE SRC OF THE IMAGE

(function() {

    // SET THE VALUES FOR THE IMAGE SOURCE
    let img1 = document.querySelector('img').getAttribute('src');
    let img2 = document.querySelector('img').getAttribute('data-hover');

    // ADD AN EVENTLISTENER TO SELECT THE IMAGE SOURCE
    document.querySelector('img').addEventListener("mouseover", event => event.target.setAttribute('src', img2));
    document.querySelector('img').addEventListener("mouseout", event => event.target.setAttribute('src', img1));

})();
