'use strict';

let hello = document.querySelector('#hello'),
    presently = document.querySelector('#presently'),
    timerHours = document.querySelector('#hours'),
    timerMinutes = document.querySelector('#minutes'),
    timerSeconds = document.querySelector('#seconds'),
    ampm = document.querySelector('#ampm'),
    days = document.querySelector('#days'),

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

    hello.textContent = timesDay;
}

function presentlyText(){
    presently.textContent = week[date];
}

function time(){
    if(hours.toString().length < 2){
        timerHours.textContent = '0' + (hours % 12);
    }else{
        timerHours.textContent = hours % 12;
    }
    if(minutes.toString().length < 2){
        timerMinutes.textContent = '0' + minutes;
    }else{
        timerMinutes.textContent = minutes;
    }
    if(seconds.toString().length < 2){
        timerSeconds.textContent = '0' + seconds;
    }else{
        timerSeconds.textContent = seconds;
    }

    if(hours >= 12){
        ampm.textContent = 'AM';
    }else{
        ampm.textContent = 'PM';
    }
}

function newYear(deadline){
    let dateLast = new Date(deadline).getTime(),
        dayOfNY = Math.floor((dateLast - new Date().getTime()) / (24 * 60 * 60 * 1000));
    days.textContent = dayOfNY;
}

function start(){
    
}

setInterval(() => {
    getWelcom();
    presentlyText();
    time();
    newYear('1 Jan 2020');
}, 1000);