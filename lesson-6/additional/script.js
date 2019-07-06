let week = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
let date = new Date(2019, 6, 6);
let dayWeek = date.getDay();
// document.write("Сегодня " + week[dayWeek] + "<br>");
for (let i = 0; i < week.length; i++) {
    if (i == 0) {
        document.write(week[i].italics() + "<br>");
    } else if (i == 6) {
        document.write(week[i].italics() + "<br>");
    } else if (i == dayWeek) {
        document.write(week[i].bold() + "<br>");
    } else {
        document.write(week[i] + "<br>");
    }
}