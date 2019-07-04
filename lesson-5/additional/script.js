let additional = function (arg) {
        let string = arg.trim(),
            stringTwo = string.slice(0, 30),
            stringThree = stringTwo.concat("...");
        if (string.length > 30) {
            alert(stringThree + " строка без пробелов и на 30 символов");
        } else {
            alert(string + " строка без пробелов");
        }
    },
    checkPrompt = function (callback) {
        let data = prompt('Введите значение');
        if (Number.isNaN(Number(data))) {
            callback(data);
        } else {
            alert(data + " не является строкой");
            checkPrompt(additional);
        }
    };
checkPrompt(additional);