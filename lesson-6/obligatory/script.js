'use strict';

let money,
    start = function () {
        do {
            money = +prompt('Ваш месячный доход?');
            return money;
        }
        while (isNaN(money) || money == '' || money == null);
    };
start();

let appData = {
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        mission: 65000,
        period: 3,
        asking: function () {
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:'),
                sum = 0,
                any, expensesTwo;
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            do {
                for (let i = 0; i < 2; i++) {
                    any = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Какие то расходы');
                    expensesTwo = +prompt('Во сколько это обойдется', 5000);
                    sum += expensesTwo;
                    appData.expenses[any] = expensesTwo;
                }
            }
            while (isNaN(appData.budget) || appData.budget == '' || appData.budget == null);
        },
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        //         Метод getExpensesMonth будет считать сумму всех обязательных расходов и сохранять результат в свойство expensesMonth 
        // для того, чтобы посчитать сумму используйте цикл for in
        getExpensesMonth: function () {

        },
        getAccumulatedMonth: function (budget, sum) {
            let accumulatedMonth = budget - sum;
            return accumulatedMonth;
        },
        getTargetMonth: function (mission, getAccumulatedMonth) {
            let finish = Math.floor(mission / getAccumulatedMonth);
            if (finish < 0) {
                console.log("цель не будет достигнута");
            } else {
                console.log("цель будет достигнута");
                return finish;
            }
        },
        getStatusIncome: function () {
            if (appData.budgetDay >= 800) {
                return ("Высокий уровень дохода");
            } else if (300 <= appData.budgetDay && appData.budgetDay < 800) {
                return ("Средний уровень дохода");
            } else if (0 <= appData.budgetDay && appData.budgetDay < 300) {
                return ("Низкий уровень дохода");
            } else if (appData.budgetDay < 0) {
                return ("Что то пошло не так");
            }
        }
    },

    income = prompt('Есть ли у вас дополнительный доход');
appData.asking();

let expensesAmount = appData.getExpensesMonth();
console.log('expensesAmount: ', expensesAmount);

console.log('getAccumulatedMonth: ', appData.getAccumulatedMonth(appData.budget, expensesAmount));

let accumulatedMonth = appData.getAccumulatedMonth(appData.budget, expensesAmount);
console.log('getTargetMonth: ', appData.getTargetMonth(appData.mission, accumulatedMonth));


console.log('appData.getStatusIncome(): ', appData.getStatusIncome());
console.log('expenses: ', appData.expenses);
//     expensesOne,
//     expensesTwo,

//     let expensesAmount = getExpensesMonth();
// let budgetMonth = money - expensesAmount,
//     budgetDay = budgetMonth / 30,



//     showTypeof = function (item) {
//         console.log(item, typeof item);
//     };
// showTypeof(money);
// showTypeof(appData.deposit);
// showTypeof(appData.income);

//     console.log('getAccumulatedMonth(): ', getAccumulatedMonth(money, expensesAmount));
// console.log('getTargetMonth(): ', getTargetMonth(appData.mission, getAccumulatedMonth));


// console.log('getStatusIncome(): ', getStatusIncome());