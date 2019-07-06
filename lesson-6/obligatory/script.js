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
        getExpensesMonth: function () {
            for (let key in appData.expenses) {
                appData.expensesMonth = appData.expenses[key] + appData.expenses[key];
            }
        },
        getBudget: function (budget, sum) {
            appData.budgetMonth = budget - sum;
            appData.budgetDay = appData.budgetMonth / 30;
        },
        getTargetMonth: function (mission, budgetMonth) {
            let finish = Math.floor(mission / budgetMonth);
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
        },
        own: function () {
            for (let key in appData) {
                console.log("Наша программа включает в себя данные: " + key);
            }
        }
    },

    income = prompt('Есть ли у вас дополнительный доход');

appData.asking();

appData.getExpensesMonth();
console.log('expensesMonth: ', appData.expensesMonth);

appData.getBudget(appData.budget, appData.expensesMonth);

console.log('getTargetMonth: ', appData.getTargetMonth(appData.mission, appData.budgetMonth));

console.log('getStatusIncome(): ', appData.getStatusIncome());

appData.own();