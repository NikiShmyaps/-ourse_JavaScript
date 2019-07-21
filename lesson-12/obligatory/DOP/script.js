'use strict';

const block = document.createElement('p');
let blockTime = block.cloneNode(true),
    blockWeek = block.cloneNode(true),
    blockYear = block.cloneNode(true),
    week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getWelcome(){
    let hours = new Date().getHours(),
        timesDay;
    if(hours < 6 || hours > 20){
        timesDay = 'Доброе ночи';
    }else if(hours < 12){
        timesDay = 'Доброй утро';
    }else{
        timesDay = 'Добрый день';
    }
    block.innerHTML = timesDay;
    document.body.appendChild(block);
}

function presentlyText(){
    let date = new Date().getDay();
    blockWeek.innerHTML = `Сегодня: ${week[date]}`;
    document.body.appendChild(blockWeek);
}

function updateTime(){
    let myDate = new Date(),
        myTime = myDate.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        }),
        strDate = `Текущее время: ${myTime}`;
    blockTime.innerHTML = strDate;
    document.body.appendChild(blockTime);
}

function newYear(){
    let dateLast = new Date('1 jan 2020').getTime(),
        dayOfNY = Math.floor((dateLast - new Date().getTime()) / (24 * 60 * 60 * 1000));
    blockYear.innerHTML = `До нового года осталось ${dayOfNY} дней`;
    document.body.appendChild(blockYear);
}

setInterval(() =>{
    getWelcome();
    presentlyText();
    updateTime();
    newYear();
},1000);


