'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // alert('JS');

    // Работа с объектом Date
    let date = new Date();
    console.log(date.getFullYear()); // год
    console.log(date.getMonth());    // месяц, метод getMonth, начинается с нуля - январь нулевой, февраль первый и так далее.
    console.log(date.getDate());     // день

    console.log(date.getHours());    // часы
    console.log(date.getMinutes());  // минуты
    console.log(date.getSeconds());  // секунды


    // Форматирование даты
    console.log(
        addZero(date.getDate()) + '.' +
        addZero((date.getMonth() + 1)) + '.' +
        addZero(date.getFullYear())
    );

    function addZero(num) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        }
        return num;
    }


    // Смена формата даты
    let str = '2025-12-31';
    let res = str.split('-').reverse().join('/');

    console.log(res); // получим строку '31/12/2025'


    // Получения дня недели
    console.log(date.getDay()); // Этот метод возвращает числа от 0 до 6-ти, причем неделя начинается с воскресенья и этот день имеет номер 0. Понедельник - это день номер 1, вторник - номер 2 и так далее.


    // Вывод частей даты словом
    let day = date.getDay();
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    console.log(days[day]);

    let month = date.getMonth();
    let months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    console.log(months[month]);


    // Установка времени в объекте Date
    let select_date = new Date(2025, 10, 5, 12, 59, 59);
    day = select_date.getDay();
    days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    console.log(days[day]);


    // Получение времени в формате timestamp
    console.log(date.getTime());

    select_date = new Date(2025, 10, 5);
    console.log(select_date.getTime());


    // Разность между датами в формате timestamp
    let now = new Date();
    date = new Date(2015, 11, 4, 23, 59, 59);

    let diff = now.getTime() - date.getTime();
    console.log(diff);

    // переведем разницу между датами в минуты:
    console.log(diff / (1000 * 60));

    // в часы:
    console.log(diff / (1000 * 60 * 60));


    // Разница между объектами с датой
    diff = now - date; // вычитаем два объекта с датами друг от друга
    console.log(diff);     // увидим разницу в миллисекундах


    // Автоматическая корректировка дат
    // Дата 35 января
    date = new Date(2018, 0, 35);
    console.log(date); // получится 4 февраля

    date = new Date(2018, 12, 1); // указываем 12-тый месяц
    console.log(date); // получится 1 января 2019 года

    date = new Date(2018, 1, 0); // указываем нулевой день
    console.log(date); // получится 31 января

    date = new Date(2018, 1, -1); // указываем -1 день
    console.log(date); // получится 30 января

    date = new Date(2018, -1, 1); // указываем -1 месяц
    console.log(date); // получится 1 декабря 2017 года

    // Все сказанное выше аналогично работает с часами, минутами и секундами:
    date = new Date(2018, 0, 1, 24, 0, 0); // указываем 24-тый час
    console.log(date); // получится 2 января, 0 часов

    date = new Date(2018, 0, 1, 25, 0, 0); // указываем 25-тый час
    console.log(date); // получится 2 января, 1 час


    // Нахождение последнего дня месяца
    // В JavaScript последний день месяца - это нулевой день следующего месяца.
    date = new Date(2020, 3, 0);
    console.log(date.getDate());


    // Определение високосного года
    date = new Date(2020, 2, 0);

    if (date.getDate() === 29) {
        console.log('високосный');
    } else {
        console.log('обычный');
    }


    // Проверка корректности даты
    let year = 2025;
    month = 0;
    day = 32;

    date = new Date(year, month, day);

    if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
        console.log('корректна');
    } else {
        console.log('некорректна');
    }


    // Получение дня текущего года
    now = new Date(); // получаем текущий момент
    date = new Date(now.getFullYear(), 2, 8); // получаем нашу дату

    console.log(date.getDay());


    // День следующего или предыдущего месяца
    now = new Date();

    // День предыдущего месяца
    date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    console.log(date.getDay());

    // День следующего месяца
    date = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    console.log(date.getDay());


    // День следующего или предыдущего года
    now = new Date();

    // День следующего года
    date = new Date(now.getFullYear() + 1, 0, 21);
    console.log(date.getDay());

    // День предыдущего года
    date = new Date(now.getFullYear() - 1, 0, 21);
    console.log(date.getDay());

    // Разность моментов
    let date1 = new Date();
    let date2 = new Date(2015, 4, 25, 12, 59, 59);

    console.log(date1 - date2); // разность в миллисекундах


    // Момент времени дня
    now = new Date();

    // Полдень сегодняшнего дня:
    date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
    console.log(date);

    // Полдень завтрашнего дня:
    date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12);
    console.log(date);

    // Начало дня
    date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    console.log(date);

    // То же самое:
    date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    console.log(date);


    // Конец дня

    // Конец текущего дня:
    date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    console.log(date);

    // Можно посчитать концом текущего дня полночь следующего (разница в 1 секунду):
    // date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    console.log(date);

    // полночью также будет являться время 24:00:00 текущего дня:
    // date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);
    date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
    console.log(date);


    // Циклическая проверка моментов времени

    // найдем все первые числа месяцев текущего года, которые являются воскресеньем:
    now = new Date();
    year = now.getFullYear();

    for (let month = 0; month <= 11; month++) {
        let date = new Date(year, month, 1);

        if (date.getDay() === 0) {
            console.log(year + '-' + month + '-1');
        }
    }

    // Строковое сравнение дат
    date1 = '2020-12-01';
    date2 = '2019-12-01';

    console.log(date1 > date2); // выведет true

    date1 = '2020.12.01';
    date2 = '2019.12.01';
    console.log(date1 > date2); // выведет true

    date1 = '20201201';
    date2 = '20191201';
    console.log(date1 > date2); // выведет true


    // Сравнение даты без года
    date1 = '12-01';
    date2 = '11-01';

    console.log(date1 > date2);


    // Попадание даты в промежуток
    date = '08-20';

    if (date >= '01-01' && date <= '03-08') {
        console.log('1 промежуток');
    }

    if (date >= '03-09' && date <= '06-17') {
        console.log('2 промежуток');
    }

    if (date >= '06-18' && date <= '12-31') {
        console.log('3 промежуток');
    }


    // Сравнение объектов с датами
    date1 = new Date(2020, 1, 1);
    date2 = new Date(2019, 1, 1);

    console.log(date1 > date2); // выведет true

    date1 = new Date(2020, 1, 1);
    date2 = new Date(2021, 1, 1);

    console.log(date1 > date2); // выведет false

});
