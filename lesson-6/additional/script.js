let arr = ['11', '22', '33', '44', '55', '66', '77'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 2 || arr[i].charAt(0) == 4) {
        console.log(arr[i]);
    }
}


let arrTwo = [];
metka: for (let i = 0; i <= 100; i++) {
    arrTwo[i] = i;
    if (i > 1) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue metka;
            }
        }
        console.log(arrTwo[i] + " Делители этого числа: 1 и " + i);
    }
}