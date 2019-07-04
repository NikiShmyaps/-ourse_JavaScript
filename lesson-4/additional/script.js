// let data = prompt('Введите значение'),
//     additional = function (arg) {
//         alert(arg + 'Введенное значение не является строкой');
//         // while (typeof argument !== 'string') {
//         //     if (Number.isNaN(Number(arg))) {
//         //         alert('Введенное значение является строкой');
//         //     } else {
//         //         alert('Введенное значение не является строкой');
//         //     }
//         // }


//     },
//     checkPrompt = function (callback){
//         let data
//     };
// additional(data);

let additional = function (arg) {
        let string = arg.trim(),
            stringTwo = string.slice(0, 30),
            stringThree = stringTwo.concat("...");
        alert(string + " строка без пробелов" + "\n" + stringThree + " строка на 30 символов");

    },
    checkPrompt = function (callback) {
        let data = prompt('Введите значение');
        if (Number.isNaN(Number(data))) {
            callback(data);
        } else {
            checkPrompt(additional);
        }
    };
checkPrompt(additional);