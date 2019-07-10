let dataTime = new Date(),
    hours = dataTime.getHours(),
    minutes = dataTime.getMinutes(),
    seconds = dataTime.getSeconds(),
    d = dataTime.getDay(),
    date = dataTime.getDate(),
    year = dataTime.getFullYear(),
    month = (dataTime.getMonth() + 1),
    element = document.querySelector('.element'),
    newElem = document.createElement('p');


function showData(dataTime) {
    hours = dataTime.getHours().toString();
    minutes = dataTime.getMinutes().toString();
    seconds = dataTime.getSeconds().toString();
    date = dataTime.getDate().toString();
    month = (dataTime.getMonth() + 1).toString();
    year = dataTime.getFullYear();

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }
    if (date.length < 2) {
        date = "0" + date;
    }
    if (month.length < 2) {
        month = "0" + month;
    }
    // console.log(hours + ":" + minutes + ":" + seconds + " " + date + "." + month + "." + year);
    newElem.innerHTML = hours + ":" + minutes + ":" + seconds + " " + date + "." + month + "." + year;
    element.appendChild(newElem);
}
showData(dataTime);