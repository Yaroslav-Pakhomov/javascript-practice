'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // alert('JS');


    // Цикл for
    // Позволяет повторить некоторый код заданное количество раз

    // for (начальные команды; условие окончания; команды после прохода ) {
    //   тело цикла
    // }

    // Начальные команды - это то, что выполнится перед стартом цикла. Они выполнятся только один раз, например: i = 0.

    // Условие окончания цикла - это условие, при котором цикл будет крутиться, пока оно истинное, например: i <= 10.

    // Команды после прохода цикла - это команды, которые будут выполняться каждый раз при окончании прохода цикла, итерации, например: i++.

    for (let i = 1; i <= 9; i++) {
        console.log(i); // выведет 1, 2... 9
    }

    // Обратный отсчет:
    for (let i = 10; i > 0; i--) {
        console.log(i); // выведет 10, 9, 8...
    }

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }


    // Перебор массива циклом for-of
    // Цикл for-of позволяет последовательно перебирать элементы массивов.
    // for (let переменнаяДляЭлемента of массив) {
    /*
      В переменнуюДляЭлемента по очереди
      будут попадать элементы перебираемого массива.
    */
    // }

    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let elem of arr) {
        console.log(elem);
    }


    // Перебор объекта циклом for-in
    // Для перебора объектов предназначен цикл for-in.
    // for (let переменнаяДляКлюча in объект) {
    /*
      В переменнаяДляКлюча по очереди
      будут попадать элементы перебираемого объекта.
    */
    // }

    let obj = {x: 'Ось x', y: 'Ось y', z: 'Ось z'}
    for (let key in obj) {
        console.log('ключ - "' + key + '", значение - "' + obj[key] + '".');
    }

    // Можно перебирать и массивы циклом for-in, т.к. это тоже является объектом
    for (let key in arr) {
        console.log('ключ - "' + key + '", значение - "' + arr[key] + '".');
    }


    // Цикл while
    // Цикл while будет выполняться до тех пор, пока истинно выражение, переданное ему параметром. Он позволяет выполнять произвольное количество итераций. Вот его синтаксис:

    // while (пока выражение истинно) {
    //   выполняем этот код циклически;
    //   в начале каждого цикла проверяем выражение в круглых
    //     скобках
    // }

    // Цикл закончится, когда выражение перестанет быть истинным. Если оно было ложным изначально - то он не выполнится ни разу.
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }

    // Делим заданное число на 2 столько раз, пока результат не станет меньше 10:
    let num = 500;
    while (num > 10) {
        num = num / 2;
    }
    console.log(num); // результат

    let j = 11;
    while (j <= 33) {
        console.log(j);
        j++;
    }

    // Пока не станет больше 1000 умножать на 3
    num = 3;
    i = 1;
    while (num <= 1000) {
        num *= 3;
        i++;
    }
    console.log('Число - "' + num + '", кол-во итераций - "' + i + '".');


    // Цикл for для массивов
    arr = ['a', 'b', 'c', 'd', 'e'];

    for (let i = 0, count = arr.length; i < count; i++) {
        console.log(arr[i]);
    }

    // В обратном порядке
    for (let count = arr.length, i = count - 1; i >= 0; i--) {
        console.log(arr[i]);
    }


    // Условия в циклах
    arr = [1, 2, 3, 4, 5];
    // значения - четные числа
    for (let key in arr) {
        if (arr[key] % 2 === 0) {
            console.log('ключ - "' + key + '", значение - "' + arr[key] + '".');
        }
    }
    // значения - четные числа
    for (let elem of arr) {
        if (elem % 2 === 0) {
            console.log('элемент - "' + elem + '".');
        }
    }

    // значения - нечетные числа
    obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    for (let key in obj) {
        if (obj[key] % 2 === 1) {
            console.log('ключ - "' + key + '", значение - "' + obj[key] + '".');
        }
    }


    // Накопление чисел в циклах
    let res = 0;
    for (let i = 1; i <= 100; i++) {
        // Для суммы нечётный/чётных (i % 2 === 1) чисел, либо без условия сумма от 1 до 100
        if (i % 2 === 0) {
            continue;
        }
        res += i;
    }
    console.log(res);


    // Накопление элементов массивов в циклах
    arr = [1, 2, 3, 4, 5];
    res = 0;
    for (let elem of arr) {
        res += elem;
    }
    console.log(res); // искомая сумма

    arr = [2, 5, 9, 3, 1, 4];

    // Найдите сумму элементов, являющихся нечетными числами.
    res = 0;
    for (let elem of arr) {
        if (elem % 2 === 1) {
            res += elem;
        }
    }
    console.log(res);

    // Найдите сумму элементов, являющихся четными числами.
    res = 0;
    for (let elem of arr) {
        if (elem % 2 === 0) {
            res += elem;
        }
    }
    console.log(res);

    // Найдите сумму квадратов элементов этого массива.
    res = 0;
    for (let elem of arr) {
        res += elem ** 2;
    }
    console.log(res);

    // Найдите произведение элементов этого массива.
    res = 1;
    for (let elem of arr) {
        res *= elem;
    }
    console.log(res);


    // Формирование строк через циклы
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += 'x';
    }
    console.log(str); // выведет 'xxxxxxxxxx'

    str = '';
    for (let i = 1; i <= 5; i++) {
        str += i;
    }
    console.log(str); // выведет '12345'

    str = '';
    for (let i = 9; i >= 1; i--) {
        if (i === 1) {
            str += '-' + i + '-';
        } else {
            str += '-' + i;
        }
    }
    console.log(str);


    // Цифры числа при переборе циклом
    // Пусть при переборе чисел мы хотим получать от этих чисел какую-нибудь цифру. К примеру, мы хотим сделать так, чтобы число выводилось в консоль, если его первая цифра равна 1 или 2.

    // Сначала необходимо преобразовать число в строку и уже тогда получать определенный символ полученной строки.

    for (let i = 1; i <= 100; i++) {
        let str = String(i); // преобразуем число в строку

        if (str[0] === '1' || str[0] === '2') {
            console.log(i);
        }
    }


    // Инструкция break
    // Инструкция break позволяет досрочно завершать цикл.
    // Пусть перед нами стоит задача определить, есть ли в массиве число 3. Если есть - выведем в консоль слово 'есть' (а если нет - ничего не будем делать).
    // Оптимально сразу после нахождения числа завершить работу нашего цикла. Это можно сделать с помощью специально инструкции break, позволяющей досрочно завершить работу цикла.

    arr = [1, 2, 3, 4, 5];
    for (let elem of arr) {
        if (elem === 3) {
            console.log('есть');
            break; // выйдем из цикла
        }
    }

    // Инструкция break может завершать любые циклы: обычный for, while и так далее.


    // Инструкция continue
    // Существует также инструкция continue, запускающая новую итерацию цикла. Данная инструкция иногда может быть полезна для упрощения кода, хотя практически всегда задачу можно решить и без нее.

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let elem of arr) {
        let result;

        if (elem % 2 === 0) {
            result = elem ** 2;
        } else if (elem % 3 === 0) {
            result = elem ** 3;
        } else {
            continue; // перейдем на новую итерацию цикла
        }

        console.log(result); // выполнится, если делится на 2 или 3
    }


    // Вложенные циклы в JavaScript
    document.write('<h1>Циклы</h1>');
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 3; j++) {
            document.write(i);

            // console.log(i);
        }
    }
    document.write('<br>');
    document.write('<br>');

    // Обратите внимание: первый цикл имеет счетчик i, второй j, а если будет еще и третий цикл - то у него счетчиком будет переменная k. Это стандартные общепринятые названия, следует пользоваться именно ими.

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            document.write(String(i) + String(j) + ' ');
        }
    }


    // Область видимости в циклах
    for (let i = 1; i <= 9; i++) {
        let num = 3;
        console.log(num); // выведет 3
    }

    for (let i = 1; i <= 9; i++) {
        let num = 3;
    }
    console.log(num); // выдаст ошибку

    // При необходимости можно объявить переменную снаружи цикла - тогда она будет доступна как внутри цикла, так и снаружи
    let num1; // объявим переменную снаружи цикла
    for (let i = 1; i <= 9; i++) {
        num1 = 3; // установим ей значение
    }
    console.log(num1); // выведет 3


    // Вложенные циклы и область видимости
    // Если у нас есть цикл в цикле, то переменные, объявленные во внешнем цикле, будут доступны во внутреннем.
    for (let i = 0; i <= 9; i++) {
        let num = 3;
        for (let j = 0; j <= 9; j++) {
            console.log(num); // выведет 3
        }
    }

    // Снаружи внешнего цикла переменная num недоступна
    for (let i = 0; i <= 9; i++) {
        let num2 = 3;
        for (let j = 0; j <= 9; j++) {
            console.log(num2);
        }
    }
    // console.log(num2); // выдаст ошибку

    // Переменные, объявленные во внутреннем цикле, недоступны снаружи
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            let num2 = 3;
        }
        // console.log(num2); // выдаст ошибку
    }
    // console.log(num2); // выдаст ошибку


    // Заполнение массива
    // В цикле можно заполнять массивы данными. Для этого следует использовать метод push.
    arr = [];
    for (let i = 1; i <= 5; i++) {
        arr.push(i);
    }
    console.log(arr); // выведет [1, 2, 3, 4, 5]

    arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push('x');
    }
    console.log(arr);

    arr = [1, -2, 3, -4, 5, -6, 7, -8, 9];
    let arr_new = [];
    // for
    for (let i = 0, count = arr.length; i < count; i++) {
        if (arr[i] > 0) {
            arr_new.push(arr[i]);
        }
    }
    console.log(arr_new);

    arr_new = [];
    // for-of
    for (let elem of arr) {
        if (elem > 0) {
            arr_new.push(elem);
        }
    }
    console.log(arr_new);


    arr_new = [];
    // for-in
    for (let key in arr) {
        if (arr[key] > 0) {
            arr_new.push(arr[key]);
        }
    }
    console.log(arr_new);


    // Изменение массива в цикле
    // Элементы массивов можно изменять в циклах. Для этого нужно перебирать массивы обычным циклом for. Давайте для примера возведём элементы массива в степень 2:
    arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        arr[i] **= 2;
    }
    console.log(arr); // выведет [1, 4, 9, 16, 25]

    // Увеличим каждый элемент массива на единицу
    arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        arr[i]++;
        // уменьшить на единицу
        // arr[i]--;
    }
    console.log(arr); // выведет [2, 3, 4, 5, 6]

    // Увеличим каждый элемент массива на 5
    arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 5;
    }
    console.log(arr); // выведет [6, 7, 8, 9, 10]


    // Заполнение объектов через цикл
    // Объекты также можно заполнять данными в циклах.
    let keys = ['a', 'b', 'c', 'd', 'e'];
    let values = [1, 2, 3, 4, 5];
    obj = {};
    for (let i = 0; i <= 4; i++) {
        // let key = keys[i];
        // let value = values[i];
        obj[keys[i]] = values[i];
    }
    console.log(obj);

    let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let arr2 = [1, 2, 3, 4, 5, 6, 7];
    // ключами которого будут их номера, а значениями - названия дней.
    obj = {};
    for (let i = 0, count = arr1.length; i < count; i++) {
        obj[arr2[i]] = arr1[i];
    }
    console.log(obj);

    // Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
    obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let obj1 = {};
    for (let obj_key in obj) {
        if (obj[obj_key] % 2 === 0) {
            obj1[obj_key] = obj[obj_key];
        }
    }
    console.log(obj1);

    // Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.
    obj1 = {};
    for (let obj_key in obj) {
        obj1[obj[obj_key]] = obj_key;
    }
    console.log(obj1);


    // Изменение объектов через цикл
    obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    for (let obj_key in obj) {
        obj[obj_key] **= 2;
    }
    console.log(obj); // {a: 1, b: 4, c: 9, d: 16, e: 25}

    obj = {x: 1, y: 2, z: 3};
    for (let obj_key in obj) {
        obj[obj_key]++;
    }
    console.log(obj); // {x: 2, y: 3, z: 4}


    // Работа с флагами
    // Дан массив с числами, нужно проверить, есть ли в нем элемент со значением 3 или нет. Если есть - выведем '+++', если нет - выведем '---'.

    arr = [1, 2, 3, 4, 5];
    let flag = false; // считаем, что элемента 3 нет в массиве

    for (let elem of arr) {
        if (elem === 3) {
            flag = true; // элемент есть - переопределим переменную flag
            break; // завершим цикл
        }
    }

    // тут переменная flag равна или true, или false
    if (flag) {
        console.log('+++'); // выведет на элементе 3
    } else {
        console.log('---');
    }


    // Подсчет количества элементов в массиве
    arr = ['a', 'b', 'c', 'a', 'a', 'b'];
    let counter = [];
    let counter_a = 0;
    let counter_b = 0;
    i = 0;
    for (let elem of arr) {
        if (elem === 'a') {
            counter['a'] = ++counter_a;
        }
        if (elem === 'b') {
            counter['b'] = ++counter_b;
        }
    }
    console.log(counter);


    // Объект с количеством элементов в массиве
    arr = ['a', 'b', 'c', 'a', 'a', 'b'];
    let count = {a: 0, b: 0, c: 0};
    for (let elem of arr) {
        count[elem]++;
    }
    console.log(count); // выведет {a: 3, b: 2, c: 1}

    arr = ['a', 'b', 'c', 'a', 'a', 'b'];
    obj = {};
    for (let elem_key in arr) {
        if (obj[arr[elem_key]]) {
            obj[arr[elem_key]]++;
        } else {
            obj[arr[elem_key]] = 1;
        }
    }
    console.log(obj);

    str = '3251432543251435';
    obj = {};

    for (let count = str.length, i = 0; i < count; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    console.log(obj);


    // Получение соседей элементов в массиве
    arr = [1, 2, 3, 4, 5];
    // Выведем не текущие элементы, а предыдущие. Начинаем не с 0-го элемента, а с 1-го, т.к. у 0-го не предыдущего элемента
    for (let i = 1, count = arr.length; i < count; i++) {
        console.log(arr[i - 1]);
    }

    // Найдем сумму предыдущего и текущего элементов массива и выведем их в консоль
    for (let i = 1, count = arr.length; i < count; i++) {
        console.log(arr[i - 1] + arr[i]);
    }

    // В каждой итерации цикла выводилась сумма текущего и следующего элемента массива, arr.length - 1 из-за следующего элемента в текущей итерации
    for (let i = 0, count = arr.length - 1; i < count; i++) {
        console.log(arr[i] + arr[i + 1]);
    }

    // два предыдущих let i = 2, count = arr.length: arr[i - 2] + arr[i - 1] + arr[i]
    // предыдущий, текущий, следующий let i = 1, count = (arr.length - 1): arr[i - 1] + arr[i] + arr[i + 1]


    obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
    let sum = 0;

    for (let key in obj) {
        let elem = String(obj[key]);
        console.log(key);
        console.log(String(obj[key]));
        if (elem[0] === '1' && elem[0] === '2') {
            sum += +elem;
        }
    }

    console.log(sum);


    // Отработка циклов
    // Выведите с помощью цикла столбец четных чисел от 100 до 1.
    for (let i = 100; i > 0; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    // Заполните массив 10-ю иксами с помощью цикла.
    str = '';
    for (let i = 0; i < 10; i++) {
        str += 'x ';
    }
    console.log(str);

    // Заполните массив числами от 1 до 10 с помощью цикла.
    arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);

    // Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
    arr = [1, -2, 3, -40, 51, -6, 17, -8, 9];
    for (let i = 0, count = arr.length; i < count; i++) {
        if (0 < arr[i] && arr[i] < 10) {
            console.log(arr[i]);
        }
    }

    for (let elem of arr) {
        if (0 < elem && elem < 10) {
            console.log(elem);
        }
    }

    for (let key in arr) {
        if (0 < arr[key] && arr[key] < 10) {
            console.log(arr[key]);
        }
    }

    // Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
    arr = [1, -2, 3, -40, 55, -6, 17, -8, 9];
    let is_5 = false;
    for (let elem of arr) {
        if (elem === 5) {
            is_5 = true;
        }
    }

    if (is_5) {
        console.log('Есть 5');
    } else {
        console.log('Нет 5');
    }

    // Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
    arr = [1, -2, 3, -40, 55, -6, 17, -8, 9];
    let summa = 0;
    for (let elem of arr) {
        summa += elem;
    }
    console.log(summa);

    // Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
    arr = [1, -2, 3, -40, 55, -6, 17, -8, 9];
    summa = 0;
    for (let elem of arr) {
        summa += elem ** 2;
    }
    console.log(summa);

    // Дан массив с числами. Найдите среднее арифметическое его элементов.
    arr = [1, -2, 3, -40, 55, -6, 17, -8, 9];
    let aver_summa = 0;
    count = arr.length;
    for (let elem of arr) {
        aver_summa += elem;
    }
    aver_summa /= count;
    console.log(aver_summa);

    // Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
    let number = 10;
    let composition = 1;
    for (let i = 1; i <= number; i++) {
        composition *= i;
    }
    console.log(composition);

    // Дан следующий объект с работниками и их зарплатами, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
    obj = {
        employee1: 100,
        employee2: 200,
        employee3: 300,
        employee4: 400,
        employee5: 500,
        employee6: 600,
        employee7: 700,
    };

    for (let employee in obj) {
        if (obj[employee] <= 400) {
            obj[employee] *= 1.1;
            obj[employee] = +obj[employee].toFixed(2);
        }
    }
    console.log(obj);

    // С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго
    obj = {};
    arr1 = [1, 2, 3, 4, 5];
    arr2 = [6, 7, 8, 9, 10];

    for (let i = 0, count = arr1.length; i < count; i++) {
        obj[arr1[i]] = arr2[i];
    }
    console.log(obj);

    // Найдите сумму ключей этого объекта и поделите ее на сумму значений.
    obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
    let key_summa = 0;
    let value_summa = 0;
    for (let key in obj) {
        key_summa = key;
        value_summa = obj[key];
    }
    let result = value_summa / key_summa;
    console.log(result);

    // Запишите ключи этого объекта в один массив, а значения - в другой.
    obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
    let key_arr = [];
    let value_arr = [];
    for (let key in obj) {
        key_arr.push(key);
        value_arr.push(obj[key]);
    }
    console.log(key_arr);
    console.log(value_arr);

    obj = {
        1: 125,
        2: 225,
        3: 128,
        4: 356,
        5: 145,
        6: 281,
        7: 452,
    };
    let arr_1_2 = [];
    for (let key in obj) {
        obj[key] = String(obj[key]);
        if (Number(obj[key][0]) === 1 || Number(obj[key][0]) === 2) {
            // console.log(obj[key]);
            arr_1_2.push(Number(obj[key]));
        }
    }
    console.log(arr_1_2);

    // Создайте из этого массива следующий объект {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
    arr = ['a', 'b', 'c', 'd', 'e'];

    obj = {};
    i = 1;
    for (let elem of arr) {
        obj[elem] = i;
        i++;
    }
    console.log(obj);


})
