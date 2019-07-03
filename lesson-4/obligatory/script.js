'use strict';

let money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    income = prompt('Есть ли у вас дополнительный доход'),
    expensesOne = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    sumOne = +prompt('Во сколько это обойдется?'),
    expensesTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    sumTwo = +prompt('Во сколько это обойдется?'),
    budgetMonth = money - (sumOne + sumTwo),
    mission = +prompt('Ваша цель?'),
    budgetDay = budgetMonth / 30,

    getExpensesMonth = function (sumOne, sumTwo) {
        return sumOne + sumTwo;
    },

    getAccumulatedMonth = function (money, getExpensesMonth) {
        let accumulatedMonth = money - getExpensesMonth(sumOne, sumTwo);
        return accumulatedMonth;

    },

    getTargetMonth = function (mission, getAccumulatedMonth) {
        return Math.floor(mission / getAccumulatedMonth(money, getExpensesMonth));
    },



    showTypeof = function (item) {
        console.log(item, typeof item);
    };

showTypeof(money);
showTypeof(deposit);
showTypeof(income);

console.log('getAccumulatedMonth(): ', getAccumulatedMonth(money, getExpensesMonth));
console.log('getTargetMonth(): ', getTargetMonth(mission, getAccumulatedMonth));

function getStatusIncome() {
    if (budgetDay >= 800) {
        return ("Высокий уровень дохода");
    } else if (300 <= budgetDay && budgetDay < 800) {
        return ("Средний уровень дохода");
    } else if (0 <= budgetDay && budgetDay < 300) {
        return ("Низкий уровень дохода");
    } else if (budgetDay < 0) {
        return ("Что то пошло не так");
    }
}
console.log('getStatusIncome(): ', getStatusIncome());