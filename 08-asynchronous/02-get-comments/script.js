
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPosts((error, articles) => {
            articles.forEach(article =>
                window.lib.getComments(article.id, (error, comments) => {
                    article.comments = [];
                    comments.forEach(comment => article.comments.push(comment))
                    console.table(article.comments);
                })
            );

        })
    });
})();