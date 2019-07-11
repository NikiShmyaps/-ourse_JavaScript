'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    inputLock = document.querySelectorAll('.data input[type=text]'),

    appData = {
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        start: function () {
            appData.budget = +salaryAmount.value;

            appData.getDis();
            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getIncomeMonth();

            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();
            appData.calcPeriod();

            appData.showResult();
        },
        prohibition: function () {
            if (salaryAmount.value.length > 0) {
                start.disabled = false;
            }
        },
        showResult: function () {
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = Math.ceil(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;
            accumulatedMonthValue.value = appData.incomeMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        },
        addExpensesBlock: function () {
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3) {
                expensesPlus.style.display = 'none';
            }
        },
        addIncomeBlock: function () {
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
            if (incomeItems.length === 3) {
                incomePlus.style.display = 'none';
            }
        },
        getExpenses: function () {
            expensesItems.forEach(function (item) {
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    appData.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        getIncome: function () {
            incomeItems.forEach(function (item) {
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if (itemIncome !== '' && cashIncome !== '') {
                    appData.income[itemIncome] = cashIncome;
                }
            });
        },
        getAddExpenses: function () {
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function (item) {
                item = item.trim();
                if (item !== '') {
                    appData.addExpenses.push(item);
                }
            });
        },
        getAddIncome: function () {
            additionalIncomeItem.forEach(function (item) {
                let itemValue = item.value.trim();
                if (itemValue !== '') {
                    appData.addIncome.push(itemValue);
                }
            });
        },
        getExpensesMonth: function () {
            for (let key in appData.expenses) {
                appData.expensesMonth += +appData.expenses[key];
            }
        },
        getIncomeMonth: function () {
            for (let key in appData.income) {
                appData.incomeMonth += +appData.income[key];
            }
        },
        getBudget: function () {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = appData.budgetMonth / 30;
        },
        getTargetMonth: function () {
            return targetAmount.value / appData.budgetMonth;
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
        getPeriod: function () {

            periodAmount.textContent = periodSelect.value;
        },
        calcPeriod: function () {
            incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
            return incomePeriodValue.value;
        },
        getDis: function () {
            inputLock.forEach(function (item) {
                item.disabled = true;
            });
            start.style.display = 'none';
            cancel.style.display = 'block';
        }
    };


start.disabled = true;
salaryAmount.addEventListener('keyup', appData.prohibition);

start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.setAttribute('oninput', "appData.getPeriod()");
periodSelect.addEventListener('click', appData.calcPeriod);

// console.log('Через: ', appData.getTargetMonth(appData.mission, appData.budgetMonth) + ' месяца');


// appData.own();
// console.log('appData.expenses: ', appData.expenses);