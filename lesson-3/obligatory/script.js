'use strict';

let money = prompt('Ваш месячный доход?');
console.log(typeof money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
addExpenses.split(", ");
console.log(typeof addExpenses);
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);
let expensesOne = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    sumOne = prompt('Во сколько это обойдется?'),
    expensesTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    sumTwo = prompt('Во сколько это обойдется?');

let budgetMonth = Number(money) - (Number(sumOne) + Number(sumTwo));
console.log('budgetMonth: ', budgetMonth);
let mission = prompt('Ваша цель?');
console.log(Math.ceil((Number(mission) / budgetMonth)));
let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

if (budgetDay >= 800) {
    console.log("Высокий уровень дохода");
}
else if (300 <= budgetDay < 800) {
    console.log("Средний уровень дохода");
}
else if (0 <= budgetDay < 300) {
    console.log("Низкий уровень дохода");
}
else if (budgetDay < 0) {
    console.log("Что то пошло не так");
}