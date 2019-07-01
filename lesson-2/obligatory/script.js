'use strict';

let money = +prompt('Ваш месячный доход?'),
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  income = confirm('Есть ли у вас дополнительный доход'),
  expensesOne = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  sumOne = +prompt('Во сколько это обойдется?'),
  expensesTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
  sumTwo = +prompt('Во сколько это обойдется?'),
  budgetMonth = money - sumOne + sumTwo,
  mission = +prompt('Ваша цель?'),
  budgetDay = budgetMonth / 30;

console.log(typeof money);
console.log(addExpenses.split(", "));
console.log(typeof deposit);
console.log(typeof income);
console.log('budgetMonth: ', budgetMonth);
console.log(Math.ceil((mission / budgetMonth)));
console.log(Math.floor(budgetDay));

if (budgetDay >= 800) {
  console.log("Высокий уровень дохода");
} else if (300 <= budgetDay < 800) {
  console.log("Средний уровень дохода");
} else if (0 <= budgetDay < 300) {
  console.log("Низкий уровень дохода");
} else if (budgetDay < 0) {
  console.log("Что то пошло не так");
}