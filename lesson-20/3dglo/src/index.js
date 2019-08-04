'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
elementClosest(window); 

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import onlyNumber from './modules/onlyNumber';
import calc from './modules/calc';
import changePhoto from './modules/changePhoto';
import onlyNumberPhone from './modules/onlyNumberPhone';
import kirillInput from './modules/kirillInput';
import sendForm from './modules/sendForm';

    // Timer
    countTimer('21 july 2019');

    // menu 
    toggleMenu(); 

    // popup 
    togglePopUp();

    // Табы
    tabs();

    // Точки для слайдера
    addDots();
    
    // Слайдер
    slider();

    //Калькулятор только цифры
    onlyNumber();

    //Калькулятор
    calc(100);

    // Изменение фото команды
    changePhoto();

    // только + и числа для полей с номером телефона
    onlyNumberPhone();

    // Только Кириллица и пробелы для полей "Ваше имя" и "Ваше сообщение"
    kirillInput();

    //send-ajax-form
    sendForm();