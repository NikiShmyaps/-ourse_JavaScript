let money = 60000;
let income = "Фриланс";
let addExpenses = "Какие-то, допольнительные, расходы";
let deposit = true;
let mission = 2000000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log("Период " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(", "));

let budgetDay = money / 30;
console.log(budgetDay);
console.log(budgetDay % 30);