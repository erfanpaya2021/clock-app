const hour = document.getElementById("clockHour"),
    minutes = document.getElementById("clockMinutes"),
    seconds = document.getElementById("clockSeconds");

const clock = () => {
    let date = new Date();
    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;

    // ADD ROTATION TO ELEMENTS
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000);
