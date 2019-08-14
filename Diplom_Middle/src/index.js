'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import clubSelect from './modules/clubSelect';
import popupVisitForm from './modules/popupVisitForm';
import callBack from './modules/callBack';
import onlyNumberPhone from './modules/onlyNumberPhone';
import kirillInput from './modules/kirillInput';
import sendForm from './modules/sendForm';
import gift from './modules/gift';
import popupThanks from './modules/popupThanks';
import mainSlider from './modules/mainSlider';
import calculator from './modules/calculator';
import gallerySlider from './modules/gallerySlider';
import serviceSlider from './modules/serviceSlider';

//Кнопка выбрать клуб
clubSelect();

// popup 'Записаться на визит' при нажатии на 'Записаться на бесплатный визит'
popupVisitForm();

// popup 'Перезвоните мне' при нажатии на 'Записаться на бесплатный визит'
callBack();

// Валоидация input[name="phone"]
onlyNumberPhone();

// Валидация input[name="name"]
kirillInput();

// Отправка формы
sendForm();

// popup подарок
gift();

// popup блогодарности
popupThanks();

// Главный слайдер
mainSlider();

// Калькулятор
calculator();

// Слайдер фотогалереи
gallerySlider();

// Слайдер сервиса
serviceSlider();