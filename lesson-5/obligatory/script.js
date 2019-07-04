'use strict';

let money,
    start = function () {
        do {
            money = +prompt('Ваш месячный доход?');
            console.log('money: ', money);
        }
        while (isNaN(money) || money == '' || money == null);
    };
start();
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    income = prompt('Есть ли у вас дополнительный доход'),
    expensesOne = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Какието расходы'),
    expensesTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Какието расходы'),
    sum = 0,
    getExpensesMonth = function () {
        do {
            for (let i = 0; i < 2; i++) {
                sum += +prompt('Во сколько это обойдется', 5000);
            }
            return sum;
        }
        while (isNaN(money) || money == '' || money == null);
    };
getExpensesMonth();
// budgetMonth = money - (sumOne + sumTwo),
let mission = 65000,
    // budgetDay = budgetMonth / 30,

    getAccumulatedMonth = function (money, sum) {
        let accumulatedMonth = money - sum;
        return accumulatedMonth;
    },
    getTargetMonth = function (mission, getAccumulatedMonth) {
        let finish = Math.floor(mission / getAccumulatedMonth(money, sum));
        if (finish < 0) {
            console.log("цель не будет достигнута");
        } else {
            console.log("цель будет достигнута");
            return finish;
        }
    },



    showTypeof = function (item) {
        console.log(item, typeof item);
    };

showTypeof(money);
showTypeof(deposit);
showTypeof(income);

console.log('getAccumulatedMonth(): ', getAccumulatedMonth(money, sum));
console.log('getTargetMonth(): ', getTargetMonth(mission, getAccumulatedMonth));

// function getStatusIncome() {
//     if (budgetDay >= 800) {
//         return ("Высокий уровень дохода");
//     } else if (300 <= budgetDay && budgetDay < 800) {
//         return ("Средний уровень дохода");
//     } else if (0 <= budgetDay && budgetDay < 300) {
//         return ("Низкий уровень дохода");
//     } else if (budgetDay < 0) {
//         return ("Что то пошло не так");
//     }
// }
// console.log('getStatusIncome(): ', getStatusIncome());