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
    procentDeposit: 0,
    moneyDeposit: 0,
    mission: 65000,
    period: 3,
    asking: function () {
        if (confirm("Есть ли у вас дополнительный зароботок?")) {
            let itemIncome, cashIncome;
            do {
                itemIncome = prompt("Какой у вас есть доп. заработок", "таксую");
            }
            while (Number(itemIncome) || itemIncome === '' || itemIncome === null);
            do {
                cashIncome = prompt("Сколько в месяц зарабатываете на этом", 10000);
            }
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
            appData.addIncome = itemIncome;
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
        appData.addExpenses = addExpenses.split(',');
        appData.addExpenses = appData.addExpenses.map(str => str.trim());
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let itemExpenses, cashExpenses;
            do {
                itemExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Какой то расход');
            }
            while (Number(itemExpenses) || itemExpenses === '' || itemExpenses === null);

            do {
                cashExpenses = +prompt('Во сколько это обойдется', 5000);
            }
            while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);

            appData.expenses[itemExpenses] = cashExpenses;
        }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
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
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt("Какой годовой процент?", "10");
            }
            while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
            do {
                appData.moneyDeposit = +prompt("Какая сумма заложена", 10000);
            }
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);

        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    },
    getBonding: function () {
        let arr = [],
            subResult;
        for (let key in appData.expenses) {
            subResult = " " + key.charAt(0).toUpperCase() + key.slice(1);
            arr.push(subResult);
        }
        for (let key in appData.income) {
            subResult = " " + key.charAt(0).toUpperCase() + key.slice(1);
            arr.push(subResult);
        }
        for (let key in appData.addExpenses) {
            subResult = " " + appData.addExpenses[key].charAt(0).toUpperCase() + appData.addExpenses[key].slice(1);
            arr.push(subResult);
        }
        return arr;
    }
};


appData.asking();
appData.getInfoDeposit();
appData.getExpensesMonth();
console.log('expensesMonth: ', appData.expensesMonth);

appData.getBudget(appData.budget, appData.expensesMonth);

console.log('Через: ', appData.getTargetMonth(appData.mission, appData.budgetMonth) + ' месяца');

console.log('getStatusIncome(): ', appData.getStatusIncome());

appData.own();


console.log('Возможные расходы и доходы: ' + appData.getBonding());