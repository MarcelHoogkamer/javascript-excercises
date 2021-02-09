
// FIND THE E-MAIL ADDRESS OF JEAN AND DISPLAY IT IN THE CONSOLE

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let people = [
            {
                firstname: "Bradford",
                lastname: "Coldbath",
                email: "bcoldbath0@wired.com",
            },
            {
                firstname: "Nadiya",
                lastname: "Stendell",
                email: "nstendell1@nsw.gov.au",
            },
            {
                firstname: "Auroora",
                lastname: "Stapford",
                email: "astapford2@wsj.com",
            },
            {
                firstname: "Berkley",
                lastname: "McKall",
                email: "bmckall3@about.me",
            },
            {
                firstname: "Wolf",
                lastname: "McCurley",
                email: "wmccurley4@yale.edu",
            },
            {
                firstname: "Jorrie",
                lastname: "Canedo",
                email: "jcanedo5@engadget.com",
            },
            {
                firstname: "Bethanne",
                lastname: "Ackred",
                email: "backred6@imgur.com",
            },
            {
                firstname: "Zorah",
                lastname: "Whild",
                email: "zwhild7@sogou.com",
            },
            {
                firstname: "Jean",
                lastname: "Dupont",
                email: "jdupont@elpais.com",
            },
            {
                firstname: "Zulema",
                lastname: "Ericsson",
                email: "zericsson9@ed.gov",
            },
            {
                firstname: "Brady",
                lastname: "Scrannage",
                email: "bscrannagea@google.fr",
            },
            {
                firstname: "Isidore",
                lastname: "Korf",
                email: "ikorfb@google.com",
            },
            {
                firstname: "Bartholomew",
                lastname: "Stockbridge",
                email: "bstockbridgec@is.gd",
            },
            {
                firstname: "Laney",
                lastname: "O' Mara",
                email: "lomarad@forbes.com",
            },
            {
                firstname: "Gabe",
                lastname: "Keatch",
                email: "gkeatche@google.fr",
            },
        ];

        console.log(people.find(person=> person.firstname === "Jean" && person.lastname === "Dupont").email);
        console.log(people.findIndex(person=> person.firstname === "Jean" && person.lastname === "Dupont"));

        // function target(index) {
        //     if (index.firstname === "Jean" && index.lastname === "Dupont")
        //         return index;
        // }
        //
        // // DISPLAY THE E-MAIL ADDRESS
        // console.log("The e-mail address is: "+ people.find(target).email);
        // // DISPLAY THE INDEX NUMBER
        // console.log("Index number is: " + people.indexOf(people.find(target)));

    })

})();