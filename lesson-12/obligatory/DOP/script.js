'use strict';

let hello = document.querySelector('#hello'),
    presently = document.querySelector('#presently'),
    timerHours = document.querySelector('#hours'),
    timerMinutes = document.querySelector('#minutes'),
    timerSeconds = document.querySelector('#seconds'),
    ampm = document.querySelector('#ampm'),
    days = document.querySelector('#days'),
    timer = document.querySelector('#timer'),
    
    newItem = document.createElement('span'),

    year = new Date().getFullYear(),
    month = new Date().getMonth(),
    date = new Date().getDay(),
    hours = new Date().getHours(),
    minutes = new Date().getMinutes(),
    seconds = new Date().getSeconds(),
    week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    timesDay = '';


function getWelcom(){
    if(hours < 12){
        timesDay = 'Доброе утро';
    }else if(hours < 6 || hours > 20){
        timesDay = 'Доброй ночи';
    }else{
        timesDay = 'Добрый день';
    }

    newItem.innerHTML = timesDay;
    timer.appendChild(newItem);
}

function presentlyText(){
    newItem.innerHTML = week[date];
    timer.appendChild(newItem);
}

function time(){
    if(hours.toString().length < 2){
        newItem.innerHTML = '0' + (hours % 12);
        timer.appendChild(newItem);
    }else{
        newItem.innerHTML = hours % 12;
        timer.appendChild(newItem);
    }
    if(minutes.toString().length < 2){
        newItem.innerHTML = '0' + minutes;
        timer.appendChild(newItem);
    }else{
        newItem.innerHTML = minutes;
        timer.appendChild(newItem);
    }
    if(seconds.toString().length < 2){
        newItem.innerHTML = '0' + seconds;
        timer.appendChild(newItem);
    }else{
        newItem.innerHTML = seconds;
        timer.appendChild(newItem);
    }

    if(hours >= 12){
        newItem.innerHTML = 'AM';
        timer.appendChild(newItem);
    }else{
        newItem.innerHTML = 'PM';
        timer.appendChild(newItem);
    }
}

function newYear(deadline){
    let dateLast = new Date(deadline).getTime(),
        dayOfNY = Math.floor((dateLast - new Date().getTime()) / (24 * 60 * 60 * 1000));
    newItem.innerHTML = dayOfNY;
    timer.appendChild(newItem);
}


setInterval(() => {
    getWelcom();
    presentlyText();
    time();
    newYear('1 Jan 2020');
}, 1000);