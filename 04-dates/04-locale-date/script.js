// TO DO: DISPLAY THE CURRENT DAY AND TIME ACCORDING TO THE EXAMPLE

(function () {
    let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    document.getElementById("target").innerHTML = (new Date().toLocaleTimeString("en-GB", options));

})();


// (function() {
//
//     let month = new Array();month[0] = "January";month[1] = "February";month[2] = "March";month[3] = "April";month[4] = "May";month[5] = "June";month[6] = "July";month[7] = "August";month[8] = "September";month[9] = "October";month[10] = "November";month[11] = "December";
//
//     let z = new Date();
//     let n = month[z.getMonth()];
//
//     let today = new Array();today[0] = "Sunday";today[1] = "Monday";today[2] = "Tuesday";today[3] = "Wednesday";today[4] = "Thursday";today[5] = "Friday";today[6] = "Saturday";
//
//     let u = new Date();
//     let m = today[u.getDay()];
//
//     let d = new Date();
//     let days = d.getDate();
//     let hour = d.getHours();
//     let minutes = d.getMinutes();
//
//     if(minutes < 10){
//         minutes = "0"+d.getMinutes();
//     }
//
//     let findate = m + " " + days + " " + n + " " + d.getFullYear() + " - " + hour + "h" + minutes;
//     document.getElementById('target').innerHTML = findate;
//
// })();

