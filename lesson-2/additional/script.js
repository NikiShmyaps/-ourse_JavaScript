let num = 266219;
let sum = 0;
num = num.toString();
num = num.split("")/*.join(" ")*/;
for(let i = 0; i < num.length; i++) {
    if(i==0) {
        sum = num[0];
    }
    else {
        sum*=num[i];
    }
    
}
console.log("Произведение цифр числа");
console.log(sum);

console.log("В 3 степени");
console.log(sum = sum ** 3);

console.log("Первый две цифры числа");
sum = sum.toString();
console.log(sum[0] + sum[1]);