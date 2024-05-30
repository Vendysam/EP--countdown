var countDownDate = new Date("June 07, 2024 00:00:00").getTime();
var countDown = setInterval(function() {
    var now = new Date().getTime();
    var interval = countDownDate - now;

    var d = Math.floor(interval / (1000 * 60 * 60 * 24));
    var h = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((interval % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}, 1000);