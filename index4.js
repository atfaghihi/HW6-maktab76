function currentClock(date) {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeLong = "";

    if (hours < 12) {
        timeLong = "AM";
    } else {
        timeLong = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    } else {
        hours = hours;
    }
    if (hours == 0) {
        hours = 12;
    } else {
        hours = hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {
        minutes = minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    } else {
        seconds = seconds;
    }

    let timeShowe = hours + ":" + minutes + ":" + seconds + " " + timeLong;
    console.log(timeShowe);
}
let date = new Date();
currentClock(new Date());