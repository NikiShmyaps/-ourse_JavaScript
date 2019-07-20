'use strict';

let year = new Date().getFullYear(),
    month = new Date().getMonth(),
    date = new Date().getDay(),
    hours = new Date().getHours(),
    minutes = new Date().getMinutes(),
    seconds = new Date().getSeconds(),
    week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    timesDay = '';

if(hours < 12){
    timesDay = 'Доброе утро';
}else if(hours < 6 || hours > 20){
    timesDay = 'Доброй ночи';
}else{
    timesDay = 'Добрый день';
}

function presently (){
    let text = 'Сегодня: ',
        presently = week[date],
        newText = text + presently;
        creatBlock(newText);
}

if(hours.toString().length < 2){
    hours = '0' + hours;
}
if(minutes.toString().length < 2){
    minutes = '0' + minutes;
}
if(seconds.toString().length < 2){
    seconds = '0' + seconds;
}
function time(){
    let am = 'AM',
        pm = 'PM',
        time = '',
        text = 'Текущее время: ',
        newText = '';
    if(hours >= 12){
        time = (hours % 12) + ':' + minutes + ':' + seconds + " " + am;
    }else{
        time = (hours % 12) + ':' + minutes + ':' + seconds + " " + pm;
    }
    newText = text + time;
    creatBlock(newText);
}

function newYear(){
    let deadline = new Date('1 Jan 2020'),
        days = Math.floor((deadline.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)),
        text = 'До нового года осталось: ',
        newText = text + days + ' дня';
    creatBlock(newText);
}

creatBlock(timesDay);
presently();
time();
newYear();

function creatBlock(item){
    var block;
    block = document.createElement('div');
    block.innerHTML = item;
    document.body.appendChild(block);
}


