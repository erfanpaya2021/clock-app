// CIRCLE CLOCK SCRIPTS
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

// TEXT CLOCK SCRIPTS
const textHour = document.getElementById("textHour"),
    textMinutes = document.getElementById("textMinutes"),
    textAmPm = document.getElementById("textAmPm"),
    textDay = document.getElementById("textDay"),
    textMonth = document.getElementById("textMonth"),
    textYear = document.getElementById("textYear");

const clockText = () => {
    let date = new Date();
    let hh = date.getHours(),
        mm = date.getMinutes(),
        ampm,
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    // HOUR CONFIGS
    if (hh >= 12) {
        hh = hh - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    if (hh == 0) {
        hh = 12;
    }

    hh = hh < 10 ? `0${hh}` : hh;

    // MINUTES CONFIG
    mm = mm < 10 ? `0${mm}` : mm;

    // SHOW HH,MM,AMPM
    textHour.innerText = `${hh}:`;
    textMinutes.innerText = mm;
    textAmPm.innerText = ampm;

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    textDay.innerText = day;
    textMonth.innerText = months[month];
    console.log(month);
    textYear.innerText = year;
};

setInterval(clockText, 1000);
