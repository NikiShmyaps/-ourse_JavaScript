'use strict';

import clubSelect from './modules/clubSelect';
import popupVisitForm from './modules/popupVisitForm';
import callBack from './modules/callBack';

//Кнопка выбрать клуб
clubSelect();

// popup 'Записаться на визит' при нажатии на 'Записаться на бесплатный визит'
popupVisitForm();

// popup 'Перезвоните мне' при нажатии на 'Записаться на бесплатный визит'
callBack();