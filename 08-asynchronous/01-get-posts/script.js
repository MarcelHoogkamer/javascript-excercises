
// TO DO: WHEN THE USER CLICKS THE BUTTON, CONSOLE LOG THE ARTICLES RETRIEVED FROM WINDOW.LIB

(() => {
    document.getElementById('run').addEventListener("click", () => {

        window.lib.getPosts((error, articles) => {
            if (error !== null) {
                alert('something is wrong');
            } else {
                console.table(articles);
            }

        });
    })
})();
