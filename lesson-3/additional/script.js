'use strict';

let lang = prompt("Укажите значение 'ru' или 'en'");
console.log('lang: ', lang);
if (lang == "ru") {
    console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
}
else if (lang == "en") {
    console.log("Monday, tuesday, wednesday, thursday, friday, saturday, sunday");
}

switch (lang){
    case "ru":
        console.log("Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break;
    case "en":
        console.log("Monday, tuesday, wednesday, thursday, friday, saturday, sunday");
        break;
}

let result = lang == "ru" ? "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье" : "Monday, tuesday, wednesday, thursday, friday, saturday, sunday";
console.log(result);

//артем директор 
//максим преподователь
//другое студент

let namePerson = prompt("Укажите 'Артем', 'Максим' или другое имя");
let nameResult = namePerson == "Артем" ? "Директор" : namePerson == "Максим" ? "Преподователь" : "Студент";
console.log(nameResult);

