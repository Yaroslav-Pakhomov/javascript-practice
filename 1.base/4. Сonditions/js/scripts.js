'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');


    // Операторы больше и меньше
    let test = 0;
    // if (test >= 0) {
    if (test <= 0) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Проверка на равенство
    test = 0;
    if (test == 0) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Проверка на неравенство
    test = 1;
    if (test != 0) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }

    // Сравнение переменных
    let test1 = 1;
    let test2 = 2;
    if (test2 > test1) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Равенство строк
    test = 'abc';
    if (test == 'abc') {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Равенство строк и чисел
    if ('3' == 3) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Равенство по значению и типу (эквивалентность)
    if ('3' === 3) {
        console.log('+++');
    } else {
        console.log('---'); // сработает это
    }

    if ('3' === '3') {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }

    if (3 === 3) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Неравенство по значению и типу
    if (3 != 3) {
        console.log('+++');
    } else {
        console.log('---'); // сработает это
    }

    if ('3' != 3) {
        console.log('+++');
    } else {
        console.log('---'); // сработает это
    }

    if (3 !== 3) {
        console.log('+++');
    } else {
        console.log('---'); // сработает это
    }

    if ('3' !== 3) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Логическое И - оператор &&
    let num = 3;
    if (num > 0 && num < 10) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }

    let num1 = 2;
    let num2 = 3;
    if (num1 === 2 && num2 === 3) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Логическое ИЛИ - оператор ||
    num1 = 10;
    num2 = -5;
    if (num1 > 0 || num2 > 0) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Приоритет логических операторов
    // Операция && имеет приоритет над ||.
    // будет истинно, если переменная num от 0 до 5 ИЛИ от 10 до 20:
    num = 3;
    if (num > 0 && num < 5 || num > 10 && num < 20) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Группировка условий
    // Хотя операция && и имеет приоритет над ||, часто удобнее использовать группирующие круглые скобки, чтобы явно показать приоритет операций:
    num = 3;
    if ((num > 0 && num < 5) || (num > 10 && num < 20)) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }

    num1 = 3;
    num2 = 5;
    if (num1 > 0 && (num2 == 3 || num2 == 5)) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Инвертирование логических выражений
    // условие num должно быть от 0 до 5
    if (num > 0 && num < 5) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // инвертируем это условие, противоположное условие получится num должно быть меньше или равно 0 ИЛИ больше или равно 5
    // if (num <= 0 || num >= 5) {
    // либо второй вариант
    // if ( !(num > 0 && num < 5) ) {
    // и оно инвертируется само


    // Условия с булевыми значениями
    test = true;
    if (test === true) {
        console.log('+++');
    } else {
        console.log('---');
    }


    // Сравнение значений с булевым типом
    // Boolean(test)
    test = 1;
    if (test == true) { // Boolean(test)
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }

    test = 0;
    if (test == true) {
        console.log('+++');
    } else {
        console.log('---'); // сработает это
    }

    test = 3 * 'a';
    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }


    // Сокращенная форма проверки на истину
    test = true;
    if (test) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Сокращенная форма проверки на ложь
    test = true;
    if (!test) {
        console.log('+++');
    } else {
        console.log('---');
    }


    // Общая сокращенная форма проверки
    test = 3;
    if (test) { // эквивалентно Boolean(test) === true
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Сложные условия в сокращенной форме
    test1 = true;
    test2 = true;
    if (test1 && test2) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }

    if (test1 || test2) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    // Необязательность конструкции else
    test = 1;
    if (test === 1) {
        console.log('+++');
    }


    // Необязательность фигурных скобок
    // В случае, если в фигурных скобках if или else будет только одно выражение, можно эти фигурные скобки не писать.
    if (test === 0) console.log('+++'); else console.log('---');
    // Или так:
    if (test === 0) {
        console.log('+++');
    } else console.log('---');
    // Или так:
    if (test === 0)
        console.log('+++');
    else
        console.log('--');

    // Не смотря на то, что JavaScript допускает показанные выше сокращения с фигурными скобками, я в общем-то не рекомендую так делать, так как это рассадник трудноуловимых ошибок.


    // Конструкция else if
    num = 1;
    // Преимуществом использования else if вместо нескольких ифов является возможность отловить ситуацию, когда значение переменной num не подходит ни под одно из условий:
    if (num === 1) {
        console.log('value1');
    } else if (num === 2) {
        console.log('value2');
    } else if (num === 3) {
        console.log('value3');
    } else {
        console.log('неверное значение переменной num');
    }


    // Вложенные конструкции if-else
    num = 3;
    if (num >= 0) {
        if (num <= 5) {
            console.log('меньше или равно 5'); // сработает это
        } else {
            console.log('больше 5');
        }
    } else {
        console.log('меньше нуля');
    }


    // Конструкция switch-case
    // С помощью конструкции switch-case можно выполнять различный код, в зависимости от значения переменной. Синтаксис этой конструкции:

    // switch (переменная) {
    //   case 'значение1':
    //     /*
    //       здесь код, который выполнится в случае,
    //       если переменная имеет значение1
    //     */
    //   break;
    //   case 'значение2':
    //     /*
    //       здесь код, который выполнится в случае,
    //       если переменная имеет значение2
    //     */
    //   break;
    //   case 'значение3':
    //     /*
    //       здесь код, который выполнится в случае,
    //       если переменная имеет значение3
    //     */
    //   break;
    //   default:
    //     /*
    //       здесь код, который выполнится в случае,
    //       если не совпала ни с одним значением
    //     */
    //   break;
    // }

    num = 1;
    switch (num) {
        case 1:
            console.log('value1'); // сработает это
            break;
        case 2:
            console.log('value2');
            break;
        case 3:
            console.log('value3');
            break;
        default:
            console.log('incorrect value');
            break;
    }

    let lang = 'ru';
    switch (lang) {
        case 'ru':
            console.log('рус'); // сработает это
            break;
        case 'en':
            console.log('анг');
            break;
        case 'de':
            console.log('нем');
            break;
        default:
            console.log('язык не поддерживается');
            break;
    }


    // Необязательность break в конструкции switch-case
    // Команда break в конструкции switch-case не является обязательной. При отсутствии break после выполнения задуманного case, выполнятся и все case ниже него.
    num = 1; // пусть здесь число 1
    switch (num) {
        case 1:
            console.log(1); // сработает это
        case 2:
            console.log(2); // сработает и это
        case 3:
            console.log(3); // сработает и это
    }

    num = 2; // пусть здесь число 2
    switch (num) {
        case 1:
            console.log(1);
        case 2:
            console.log(2); // сработает это
        case 3:
            console.log(3); // сработает и это
    }

    num = 3; // пусть здесь число 3
    switch (num) {
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3); // сработает это
    }

    // Иногда такую особенность используют, при решении задач. Пример:
    num = 1;
    let res;

    switch (num) {
        case 1:
        case 2:
            res = 'a';
            break;
        case 3:
            res = 'b';
            break;
    }

    // Очевиднее, однако, решить такую задачу через if:
    num = 1;
    res;
    if (num === 1 || num === 2) {
        res = 'a';
    }

    if (num === 3) {
        res = 'b';
    }

    console.log(res);


    // Тернарный оператор
    // В данном уроке мы рассмотрим специальный тернарный оператор, представляющий собой сокращенный вариант конструкции if-else.
    // let переменная = условие ? значение1 : значение2;
    let age = 17;
    let adult = age >= 18 ? true : false;
    console.log(adult);


    // Логические операции
    let a = 1;
    let b = 2;
    let result = a == b;
    console.log(result);


    // Функция confirm
    // Функция confirm вызывает окошко с вопросом, на который нужно ответить пользователю, и двумя кнопками для ответа: с кнопкой 'ОК' и с кнопкой 'Отмена'. Если пользователь нажмет 'ОК' - то функция вернет true, а если 'Отмена' - то вернет false.
    let ok = confirm('Текст вопроса');
    if (ok) {
        console.log('вы ответили да');
    } else {
        console.log('вы ответили нет');
    }


    // Область видимости переменных в if-else

    // Переменные, объявленные внутри фигурных скобок, видны только внутри этих скобок, и не видны снаружи. По-научному здесь идет речь об области видимости переменных.

    // Можно говорить о том, что областью видимости переменных, объявленных внутри фигурных скобок, являются только эти фигурные скобки. Однако, если переменная объявлена снаружи фигурных скобок, то видна и внутри них, и снаружи

    // if (true) {
    //   let res = '!';
    // }
    // console.log(res); // выведется ошибка


    // let res; // переменная объявлена снаружи
    // if (true) {
    //   res = '!';
    // }
    // console.log(res); // выведет '!'


    // Нюансы области видимости переменных в конструкциях if-else
    res = 1;
    if (true) {
        res = 2;
    }
    console.log(res); // выведет 2

    // переменная res поменялась внутри условия. Все, однако, поменяется, если внутри условия также объявить переменную res через let

    res = 1;
    if (true) {
        let res = 2; // объявим переменную через let
        console.log(res); // выведет 2
    }
    console.log(res); // выведет 1, а не 2!


    // Проверка частей часа через if-else
    let min = 10;
    if (min >= 0 && min <= 14) {
        console.log('1 четверть');
    }

    if (min >= 15 && min <= 29) {
        console.log('2 четверть');
    }

    if (min >= 30 && min <= 44) {
        console.log('3 четверть');
    }

    if (min >= 45 && min <= 59) {
        console.log('4 четверть');
    }


    // Проверка длины строк и массивов
    let str = '12345';
    if (str.length >= 3) {
        console.log('Длинна строки больше или равна 3.');
    }

    let arr = [1, 2, 3, 4];
    if (arr.length >= 4) {
        console.log('Длинна массива больше или равна 4.');
    }


    // Проверка символов строки
    str = '12345';
    // Первый символ этой строки числу 1
    if (str[0] == 1) {
        console.log('!'); // сработает это
    } else {
        console.log('?');
    }

    let last = str[str.length - 1];
    // последний символ на равенство числу 5
    if (last == 5) {
        console.log('!'); // сработает это
    } else {
        console.log('?');
    }


    // Проверка цифр числа
    num = 12345;
    console.log(num[0]); // выведет undefined
    if (num[0] == 1) {
        console.log('+++');
    } else {
        console.log('---'); // сработает это
    }

    str = String(num);
    last = str[str.length - 1];
    if (str[0] == 1) {
        console.log('+++'); // сработает это
    } else {
        console.log('---');
    }


    let first = String(num)[0];
    if (first == 1 || first == 2) {
        console.log('+++'); // выведет 'верно'
    } else {
        console.log('---');
    }

    num = 13;
    // Чётность
    let parity = (num % 2 === 0) ? 'Чётное' : 'Нечётное';
    console.log(parity);


    // Проверка остатка от деления
    a = 10;
    b = 3;
    let rest = a % b;

    if (rest === 0) {
        console.log('делится нацело');
    } else {
        console.log('делится с остатком ' + rest);
    }


    // Поиск ошибок в коде с условиями
    num1 = 1;
    num2 = 2;

    if (num1 + num2 === 3) {
        console.log('+++');  // сработает это
    } else {
        console.log('---');
    }


    num1 = '1';
    num2 = '2';

    if (Number(num1) + Number(num2) === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }


    num = 123;
    first = String(num)[0];

    if (first == 1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    console.log(String(num).length); // выведет длинну 3, в числе ровно 3 цифры

    // Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:
    num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

    let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
    let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

    if (sum1 == sum2) {
        console.log('суммы равны');
    } else {
        console.log('суммы не равны');
    }


    // Практика на условия if-else
    let month = 7;

    if (month === 12 || month === 1 || month === 2) {
        console.log('Зима');
    } else if (3 <= month && month <= 5) {
        console.log('Весна');
    } else if (6 <= month && month <= 8) {
        console.log('Лето');
    } else if (9 <= month && month <= 11) {
        console.log('Осень');
    }


})
