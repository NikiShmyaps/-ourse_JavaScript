let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    date = new Date(2019, 6, 8),
    dayWeek = date.getDay();
// document.write("Сегодня " + week[dayWeek] + "<br>");
for (let i = 0; i < week.length; i++) {
    if (i < 5) {
        document.write(week[i] + "<br>");
    } else if (i == dayWeek) {
        document.write(week[i].bold() + "<br>");
    } else if (i >= 5) {
        document.write(week[i].italics() + "<br>");
    }
}

// let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
//     date = new Date(2019, 6, 6),
//     dayWeek = date.getDay();