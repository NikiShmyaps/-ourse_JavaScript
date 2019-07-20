'use strict';

let expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items');

const start = document.getElementById('start'),
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
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    inputLock = document.querySelectorAll('.data input[type=text]'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');

class AppData {
    constructor()
    {
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
    }
    start () {
        this.budget = +salaryAmount.value;
        this.getDis();
        this.getItem(expensesItems, 'expenses', this.expenses);
        this.getItem(incomeItems, 'income', this.income);
            
        this.getInfoDeposit();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();
        this.getIncomeMonth();
        this.getExpensesMonth();
        this.calcPeriod();
        this.showResult();
    }
    prohibition () {
        if (salaryAmount.value.length > 0) {
            start.disabled = false;
        }
    }
    showResult () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
    }
    addItemBlock (item, elem, btn){
        let clonItem = item[0].cloneNode(true);
        item[0].parentNode.insertBefore(clonItem, btn);
        item = document.querySelectorAll(`.${elem}-items`);
        if(item.length === 3){
            btn.style.display = 'none';
        }
    }
    getItem(myItem, myElem, myObj) {
        myItem = document.querySelectorAll(`.${myElem}-items`);
        myItem.forEach((item) => {
            const itemTitle = item.querySelector(`.${myElem}-title`).value,
                itemAmount = item.querySelector(`.${myElem}-amount`).value;
            if(itemTitle !== '' && itemAmount !== ''){
                myObj[itemTitle.charAt(0).toUpperCase() + itemTitle.substring(1).toLowerCase()] = itemAmount;
            }
        });
    }
    getAddExpenses () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        });
    }
    getAddIncome () {
        additionalIncomeItem.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    }
    getExpensesMonth () {
        for (let key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    }
    getIncomeMonth () {
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    }
    getBudget () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
        this.budgetDay = this.budgetMonth / 30;
    }
    getInfoDeposit (){
        if(this.deposit){
            this.percentDeposit = +depositPercent.value;
            this.moneyDeposit = +depositAmount.value;
        }
    }
    getTargetMonth () {
        return targetAmount.value / this.budgetMonth;
    }
    getPeriod () {
        periodAmount.textContent = periodSelect.value;
    }
    calcPeriod () {
        incomePeriodValue.value = this.budgetMonth * periodSelect.value;
        return incomePeriodValue.value;
    }
    getDis () {
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
    }
    getReset () {
        // depositBank.options[0].checked = true;
        depositBank.selectedIndex = 0;
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
    }
    depositCheck (){
        if(depositCheck.checked){
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = 'true';
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
            this.deposit = 'false';
        }
    }   
    eventsListeners (){
        start.disabled = true;
        start.addEventListener('click', this.start.bind(this));
        salaryAmount.addEventListener('keyup', this.prohibition);
        cancel.addEventListener('click', this.getReset.bind(this));
        expensesPlus.addEventListener('click', () => {
            this.addItemBlock(expensesItems, 'expenses', expensesPlus);
        });
        incomePlus.addEventListener('click', () =>{
            this.addItemBlock(incomeItems, 'income', incomePlus);
        });
        periodSelect.setAttribute('oninput', "this.getPeriod()");
        periodSelect.addEventListener('click', this.calcPeriod);
        depositCheck.addEventListener('change', this.depositCheck);
    }
}


let appData = new AppData();
appData.eventsListeners();











