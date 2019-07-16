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
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),

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
        percentDeposit: 0,
        moneyDeposit: 0,
        start: function () {
            this.budget = +salaryAmount.value;

            this.getDis();
            this.getIncome();
            
            this.getInfoDeposit();
            this.getBudget();
            this.getAddExpenses();
            this.getAddIncome();
            this.getExpenses();
            this.getIncomeMonth();
            this.getExpensesMonth();
            this.calcPeriod();
            this.showResult();
        },
        prohibition: function () {
            if (salaryAmount.value.length > 0) {
                start.disabled = false;
            }
        },
        showResult: function () {
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = Math.ceil(this.budgetDay);
            expensesMonthValue.value = this.expensesMonth;
            additionalExpensesValue.value = this.addExpenses.join(', ');
            additionalIncomeValue.value = this.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(this.getTargetMonth());
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
            expensesItems.forEach((item) => {
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    this.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        getIncome: function () {
            incomeItems.forEach((item) => {
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if (itemIncome !== '' && cashIncome !== '') {
                    this.income[itemIncome] = cashIncome;
                }
            });
        },
        getAddExpenses: function () {
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach((item) => {
                item = item.trim();
                if (item !== '') {
                    this.addExpenses.push(item);
                }
            });
        },
        getAddIncome: function () {
            additionalIncomeItem.forEach((item) => {
                let itemValue = item.value.trim();
                if (itemValue !== '') {
                    this.addIncome.push(itemValue);
                }
            });
        },
        getExpensesMonth: function () {
            for (let key in this.expenses) {
                this.expensesMonth += +this.expenses[key];
            }
        },
        getIncomeMonth: function () {
            for (let key in this.income) {
                this.incomeMonth += +this.income[key];
            }
        },
        getBudget: function () {
            this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
            this.budgetDay = this.budgetMonth / 30;
        },
        getInfoDeposit: function(){
            if(this.deposit){
                this.percentDeposit = +depositPercent.value;
                this.moneyDeposit = +depositAmount.value;
    
            }
        },
        getTargetMonth: function () {
            return targetAmount.value / this.budgetMonth;
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
            let inputLock = document.querySelectorAll('.data input[type=text]');
            inputLock.forEach((item) => {
                item.disabled = true;
            });
            start.style.display = 'none';
            cancel.style.display = 'block';
            incomePlus.style.display = 'none';
            expensesPlus.style.display = 'none';
            depositBank.disabled = true;
            depositCheck.disabled = true;
        },
        getReset: function () {
            // depositBank.options[depositBank.options.selectedIndex[0]].setAttribute('checked', 'checked');
            depositBank.options[0].checked = true;
            console.log(depositBank.options[0]);
            let incomeItems = document.querySelectorAll('.income-items'),
                expensesItems = document.querySelectorAll('.expenses-items');
            if (incomeItems.length === 2) {
                incomeItems[0].parentNode.removeChild(incomeItems[1]);
            } else if (incomeItems.length === 3) {
                incomeItems[0].parentNode.removeChild(incomeItems[1]);
                incomeItems[0].parentNode.removeChild(incomeItems[2]);
            }

            if (expensesItems.length === 2) {
                expensesItems[0].parentNode.removeChild(expensesItems[1]);
            } else if (expensesItems.length === 3) {
                expensesItems[0].parentNode.removeChild(expensesItems[1]);
                expensesItems[0].parentNode.removeChild(expensesItems[2]);
            }

            let allLeft = document.querySelectorAll('.data input[type=text]'),
                allRight = document.querySelectorAll('.result input[type=text]');
            allLeft.forEach((key) => {
                key.disabled = false;
                key.value = '';
            });
            allRight.forEach((key) => {
                key.disabled = false;
                key.value = '';
            });
            start.style.display = 'block';
            start.disabled = true;
            cancel.style.display = 'none';
            this.budget = 0;
            this.income = {};
            this.incomeMonth = 0;
            this.addIncome = [];
            this.expenses = {};
            this.addExpenses = [];
            this.deposit = false;
            this.budgetDay = 0;
            this.budgetMonth = 0;
            this.expensesMonth = 0;
            incomePlus.style.display = 'block';
            expensesPlus.style.display = 'block';
            depositBank.disabled = false;
            depositCheck.disabled = false;
            depositCheck.checked = false;
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            

        },
        eventsListeners: function(){

        }
    };


start.disabled = true;
salaryAmount.addEventListener('keyup', appData.prohibition);


cancel.addEventListener('click', appData.getReset.bind(appData));

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.setAttribute('oninput', "appData.getPeriod()");
periodSelect.addEventListener('click', appData.calcPeriod);


depositCheck.addEventListener('change', function(){
    if(depositCheck.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other'){
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
                depositPercent.disabled = false;
            }else {
                depositPercent.style.dispaly = 'none';
                depositPercent.value = selectIndex;
            }
        });

    }else{
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        appData.deposit = 'false';
    }
});

start.addEventListener('click', appData.start.bind(appData));