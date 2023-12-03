'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // alert('JS');

    // Деструктуризация массивов
    let arr = [2025, 12, 31];
    let [year, month, day] = arr;

    console.log(year);  // выведет 2025
    console.log(month); // выведет 12
    console.log(day);   // выведет 31

    arr = ['John', 'Smith', 'development', 'programmer', 2000];
    let [name, surname, department, position, salary] = arr;

    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
    console.log(salary);


    // Деструктуризация массива из функции
    function func() {
        return [2023, 11, 16];
    }

    [year, month, day] = func();

    console.log(year);  // выведет 2023
    console.log(month); // выведет 11
    console.log(day);   // выведет 16


    // Пропуск элементов массива при деструктуризации
    arr = [2025, 10, 11];
    [, month, day] = arr;

    console.log(month); // выведет 10
    console.log(day);   // выведет 11

    arr = [2025, 12, 1];
    [, , day] = arr;

    console.log(day);   // выведет 1


    // Лишние значения при деструктуризации
    arr = [2025, 12];
    [year, month, day] = arr;

    console.log(year);  // выведет 2025
    console.log(month); // выведет 12
    console.log(day);   // выведет undefined

    arr = [2025, 12, 31, 23, 59, 59];
    [year, month, day] = arr;

    console.log(year);  // выведет 2025
    console.log(month); // выведет 12
    console.log(day);   // выведет 31


    // Остаток массива при деструктуризации
    arr = [2025, 12, 31, 23, 59, 59];
    // Объявление переменных при деструктуризации
    let time;
    [year, month, day, ...time] = arr;

    console.log(year);  // выведет 2025
    console.log(month); // выведет 12
    console.log(day);   // выведет 31

    console.log(time);  // выведет [23, 59, 59]

    arr = ['John', 'Smith', 'development', 'programmer', 2000];
    // Объявление переменных при деструктуризации
    let data;
    [name, surname, ...data] = arr;

    console.log(name); // выведет John
    console.log(surname);   // выведет Smith

    console.log(data);  // выведет ['development', 'programmer', 2000]

    // Значения по умолчанию при деструктуризации
    arr = [2025, 12];
    [year, month, day = 1] = arr;
    console.log(year);  // выведет 2025
    console.log(month); // выведет 12
    console.log(day);   // выведет 1

    arr = [2025, 12, 31];
    [year, month, day = 1] = arr;
    console.log(year);  // выведет 2025
    console.log(month); // выведет 12
    console.log(day);   // выведет 31


    // Функции по умолчанию при деструктуризации
    function func1() {
        return (new Date).getDate();
    }

    arr = [2025, 12];
    [year, month, day = func1()] = arr;

    console.log(year);  // выведет 2025
    console.log(month); // выведет 12
    console.log(day);   // выведет текущее число


    // Деструктуризация объектов

    let obj = {
        obj_year: 2025,
        obj_month: 12,
        obj_day: 31,
    };

    let {obj_year, obj_month, obj_day} = obj;

    console.log(obj_year);  // выведет 2025
    console.log(obj_month); // выведет 12
    console.log(obj_day);   // выведет 31


    // Имена переменных при деструктуризации объектов
    obj = {
        year: 2025,
        month: 12,
        day: 31,
    };

    let {year: y, month: m, day: d} = obj;

    console.log(y); // выведет 2025
    console.log(m); // выведет 12
    console.log(d); // выведет 31

    let options = {
        color: 'red',
        width: 400,
        height: 500,
    };

    let {color: c, width: w, height: h} = options;

    console.log(c);
    console.log(w);
    console.log(h);

    // Значения по умолчанию при деструктуризации объектов
    obj = {
        obj_month1: 1,
        obj_day1: 31,
    };

    let {obj_year1 = 2025, obj_month1, obj_day1} = obj;

    console.log(obj_year1);  // выведет 2025
    console.log(obj_month1); // выведет 1
    console.log(obj_day1);   // выведет 31

    // Переменные и значения по умолчанию
    obj = {
        obj_month2: 12,
        obj_day2: 31,
    };

    let {obj_year2: y2 = 2025, obj_month2: m2 = 1, obj_day2: d2 = 1} = obj;

    console.log(y2);     // выведет 2025
    console.log(m2);     // выведет 1
    console.log(d2);     // выведет 31

    // Объявление переменных при деструктуризации
    obj = {
        obj_year3: 2025,
        obj_month3: 12,
        obj_day3: 31,
    };

    let obj_year3, obj_month3, obj_day3; // объявим переменные заранее

    // {obj_year3, obj_month3, obj_day3} = obj; - не будет работать

    // команду на деструктуризацию объекта нужно брать в круглые скобки:
    ({obj_year3, obj_month3, obj_day3} = obj);

    console.log(obj_year3);
    console.log(obj_month3);
    console.log(obj_day3);


    // Деструктуризация параметров функций
    // Если функция принимает в качестве параметра массив, мы можем задать прямо в объявлении функции то, как деструктуризировать этот массив.
    // В параметре функции укажем, на какие переменные следует разбивать этот массив, конструкцию следует рассматривать как один параметр функции:
    function func2(param1, [year, month, day], param2) {
        console.log(param1); // выведет 'str1'

        console.log(year);   // выведет 2025
        console.log(month);  // выведет 12
        console.log(day);    // выведет 31

        console.log(param2); // выведет 'str2'
    }

    // Первым и вторым параметром функции передаются массивы и мы деструктуризируем оба из них:
    function func3([year1, month1, day1], [year2, month2, day2]) {
        console.log(year1);  // выведет 2025
        console.log(month1); // выведет 12
        console.log(day1);   // выведет 31

        console.log(year2);  // выведет 2026
        console.log(month2); // выведет 11
        console.log(day2);   // выведет 30
    }

    func3([2025, 12, 31], [2026, 11, 30]);

    func2('str1', [2025, 12, 31], 'str2');

    function func4([name = 'name', surname = 'surname', ...info]) {
        console.log(name);
        console.log(surname);
        console.log(info);
    }

    func4(['John', 'Smith', 'development', 'programmer', 2000]);
    func4([]);


    // Деструктуризация объектов параметров функций
    function func5({year, month, day}) {
        console.log(year);  // выведет 2025
        console.log(month); // выведет 12
        console.log(day);   // выведет 31
    }

    func5({year: 2025, month: 12, day: 31,});

});
