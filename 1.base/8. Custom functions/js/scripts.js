'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');

    func('Человек');

    function func(str = 'Мир') {
        console.log('Привет ' + str + '!!!');
    }

    func();

    function summa(number) {
        summa = 0;
        for (let i = 0; i <= number; i++) {
            summa += i;
        }
        console.log(summa);
    }

    summa(100);


    // Параметры функций
    function isPositive(number) {
        if (number >= 0) {
            console.log('Число положительное.');
        } else {
            console.log('Число отрицательное.');
        }
    }

    isPositive(-1);
    isPositive(1);

    function cube(number) {
        if (number > 0) {
            console.log(number ** 3);
        } else {
            console.log('Введите положительное чилсо');
        }

    }

    cube(3);
    cube(-3);


    // Несколько параметров
    // Необязательные параметры number2, number3
    function sumThree(number1, number2 = 0, number3 = 0) {
        console.log((+number1) + (+number2) + (+number3));
    }

    sumThree('1', 2, 3);
    sumThree('1', '2', '3');


    // Параметры-переменные функций
    let param1 = 1;
    let param2 = 2;
    let param3 = 3;
    sumThree(param1, param2, param3);


    // Инструкция return
    function func1(num) {
        return num ** 2;
    }

    let res = func1(3); // в переменную запишется 9
    res++;
    console.log(res);
    console.log(func1(4));
    res = func1(2) + func1(3);
    console.log(res); // выведет 13

    function returnCube(num) {
        return num ** 3;
    }

    res = returnCube(3);
    console.log(returnCube(3));

    function returnSquareRoot(num) {
        return Math.pow(num, 1 / 2);
    }

    console.log(returnSquareRoot(9));
    res = returnSquareRoot(9) + returnSquareRoot(4);
    console.log(res);


    // Последовательный вызов функций
    // После того, как выполнится инструкция return - функция закончит свою работу и никакой код дальше не выполнится.
    function returnSquare(num) {
        return num ** 2;
    }

    function returnSum(num1, num2) {
        return num1 + num2;
    }

    res = returnSquare(returnSquare(2));
    console.log(res); // выведет 16
    res = returnCube(returnSquare(2));
    console.log(res);
    res = returnSum(returnSquare(2), returnCube(3));
    console.log(res);

    function sqrt(num) {
        return Math.sqrt(num);
    }

    function round(num) {
        return num.toFixed(3);
    }

    function sum(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    console.log(round(sqrt(4))); // выведет 2.000
    console.log(round(sum(sqrt(2), sqrt(3), sqrt(4))));

    function func2(num) {
        if (num <= 0) {
            return Math.abs(num);
        }
        return num ** 2;
    }

    console.log(func2(10)); // 100
    console.log(func2(-5)); // 5


    // Цикл и return
    function func3() {
        let sum = 0;
        for (let i = 1; i <= 5; i++) {
            sum += i;
        }

        return sum;
    }

    res = func3();
    console.log(res); // выведет 15

    function func4(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }

        return sum;
    }

    console.log(func4(10)); // 55


    // Применение return в циклах
    // функция, которая определяет, сколько первых элементов массива нужно сложить, чтобы сумма стала больше или равна 10:
    function func5(arr) {
        let sum = 0;

        for (let i = 0, count = arr.length; i < count; i++) {
            sum += arr[i];

            // Если сумма больше или равна 10:
            if (sum >= 10) {
                return i + 1; // выходим из цикла и	из функции
            }
        }
    }

    res = func5([1, 2, 3, 4, 5]);
    console.log(res);

    // функция, которая вычисляет, сколько целых чисел, начиная с 1, нужно сложить, чтобы результат был больше 100
    function func6() {
        let sum = 0;
        let i = 1;

        while (true) { // бесконечный цикл
            sum += i;

            if (sum >= 100) {
                return i; // цикл крутится пока не выйдет тут
            }

            i++;
        }
    }

    console.log(func6());

    // функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

    function counterDivisionBy2(num) {
        let i = 0;

        while (true) {
            num /= 2;

            if (num < 10) {
                return (i + 1);
            }

            i++;
        }
    }

    console.log(counterDivisionBy2(64));


    // Прием работы с return
    function func7(num1, num2) {
        let res;

        if (num1 > 0 && num2 > 0) {
            return num1 * num2;
        }

        return num1 - num2;
    }

    console.log(func7(3, 4));
    console.log(func7(-3, -4));


    // Флаги в функциях
    // функция, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
    let arr1 = [2, 4, 6, 8, 10];

    function parityCheckArr(arr) {
        for (let i = 0, count = arr.length; i < count; i++) {
            if (arr[i] % 2) {
                return false;
            }
        }
        return true;
    }

    console.log(parityCheckArr(arr1));

    // функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
    let number = 2242628;

    function parityCheckNumber(num) {
        num = String(num);
        for (let i = 0, numLength = num.length; i < numLength; i++) {
            if (num[i] % 2) {
                return false;
            }
        }
        return true;
    }

    console.log(parityCheckNumber(number));

    // функция, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
    arr1 = [2, 4, 6, 8, 10, 2, 10];

    function arrElemRepeat(arr) {
        let repeatObj = {};
        for (let i = 0, count = arr.length; i < count; i++) {
            if (repeatObj[arr[i]]) {
                repeatObj[arr[i]]++;
                return false;
            } else {
                repeatObj[arr[i]] = 1;
            }
        }

        return repeatObj;
    }

    console.log(arrElemRepeat(arr1));


    // Логические операторы без if в функциях
    function func8(a, b) {
        if (a + b >= 10) {
            return true;
        } else {
            return false;
        }
    }

    console.log(func8(5, 10));

    // Эвивалент ф-ции выше
    function func9(a, b) {
        return a + b >= 10;
    }

    console.log(func9(5, 10));


    // Советы по созданию функций
    // 1. Имена функций должны быть глаголами.
    // 2. Имя каждой функции должно точно отражать то, что функция делает.
    // 3. Функция должна делать только то, что явно подразумевается её названием, и не делать другого.
    // 4. Каждая функция должна выполнять только одно действие.
    // 5. Используйте внутри функций вспомогательные функции.
    // 6. Код функций лучше не делать длиннее 10-15 строк.
    // 7. Длинные функции лучше разбивать на ряд вспомогательных.
    // 8. Используйте общепринятые префиксы в именах функций: show, get, set, calc, create, change, check.
    // 9. Выносите дублирующийся код в функции.


    // Поиск ошибок в коде
    let arr = [1, 2, 3, 4, 5];

    function func10(arr) {
        let res = 0;

        for (let elem of arr) {
            res += elem;
        }

        return res;
    }

    console.log(func10(arr));

    function func11() {
        return 3;
    }

    function func12() {
        return 5;
    }

    console.log(func11() + func12());

    sum = sumArr([1, 2, 3, 4, 5]);
    console.log(sum);

    function sumArr(arr) {
        let sum = 0;
        for (let elem of arr) {
            sum += elem;
        }

        return sum;
    }

    function addZero(num) {
        if (1 <= num && num <= 9) {
            return '0' + num;
        }
        return num;
    }

    console.log(addZero(1));

    let num = 12345;
    res = getDigitsSum(num);
    console.log(res);

    function getDigitsSum(num) {
        let arr = String(num).split('');
        let sum = 0;

        for (let elem of arr) {
            sum += +elem;
        }

        return sum;
    }


    // проверить число на то, что оно является простым
    console.log(isPrime(13)); // должен вывести true
    console.log(isPrime(15)); // должен вывести false
    console.log(isPrime1(15)); // должен вывести true - ошибка
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    function isPrime1(num) {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            } else {
                return false;
            }
        }
    }


    // Практика на функции
    // функция, которая параметром будет принимать массив и возвращать сумму его элементов
    function calcElemArr(arr) {
        let sum = 0;
        for (let i = 0, count = arr.length; i < count; i++) {
            sum += +arr[i];
        }

        return sum;
    }

    arr1 = [1, 2, 3, 4, 5];
    console.log(calcElemArr(arr1));

    // функция, которая параметром будет принимать число и возвращать массив его делителей
    function getDividers(num) {
        let dividers = [];
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                dividers.push(i);
            }
        }

        return dividers;
    }

    let dividers_15 = getDividers(15);
    console.log(dividers_15);
    console.log(getDividers(32));

    // функция, которая параметром будет принимать строку и возвращать массив ее символов
    function getArrFromStr(str) {
        return str.split('');
        // Второй вариант исключая пробелы
        // let arr_symbol = [];
        // let arr_words = str.split(' ');
        // for (let i = 0, count = arr_words.length; i < count; i++) {
        //
        //   let arr_words_symbol = arr_words[i].split('');
        //   for (let j = 0; j < arr_words_symbol.length; j++) {
        //     arr_symbol.push(arr_words_symbol[j]);
        //   }
        //
        // }
        //
        // return arr_symbol;
    }

    console.log(getArrFromStr('abc def jhi'));

    // функция, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
    function getStrRevers(str) {
        return getArrFromStr(str).reverse().join('');
        // return str.split('').reverse().join('');
    }

    console.log(getStrRevers('abc def jhi'));

    // функция, которая параметром будет принимать строку и делает заглавной первую букву этой строки
    function setCapitalLetterStr(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    console.log(setCapitalLetterStr('abc def jhi'));

    // функция, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки
    function setCapitalLetterWords(str) {
        let capitalLetterWords = [];
        let arrWords = str.split(' ');
        for (let i = 0, count = arrWords.length; i < count; i++) {
            capitalLetterWords.push(setCapitalLetterStr(arrWords[i]));
        }

        return capitalLetterWords.join(' ');
    }

    console.log(setCapitalLetterWords('abc def jhi'));

    // функция, заполняющую массив целыми числами от 1 до заданного
    function fillArray(num) {
        let numberArr = [];
        for (let i = 1; i <= num; i++) {
            numberArr.push(i);
        }

        return numberArr;
    }

    console.log(fillArray(10));

    // функция, которая будет возвращать случайный элемент из массива
    function getRandomArrElem(arr) {
        let randomNumber = getRandomInt(0, (+arr.length - 1));
        return arr[randomNumber];
    }

    // Вспомогательная функция - получение случайного целого числа между min и max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(getRandomArrElem([1, 2, 5, 44, 55, 46, 88]));

    // функция, которая параметром будет принимать число и проверять, простое оно или нет
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    console.log(isPrime(13)); // должен вывести true
    console.log(isPrime(15)); // должен вывести false

    // функция, которая будет проверять пару чисел на дружественность. Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу.
    // Например, дружественными числами являются такие числа: 220 и 284, 1184 и 1210.
    function checkFriendNumbers(num1, num2) {
        let sum_num1 = calcElemArr(getDividers(num1));
        let sum_num2 = calcElemArr(getDividers(num2));

        if (sum_num1 === num2 && sum_num2 === num1) {
            return num1 + ' и ' + num2 + ' - дружественные числа';
        }

        return num1 + ' и ' + num2 + ' - не дружественные числа';
    }

    console.log(checkFriendNumbers(220, 284));
    console.log(checkFriendNumbers(1184, 1210));
    console.log(checkFriendNumbers(118, 121));

    // функция из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000
    function getAllFriendNumbers(num) {
        let arr_strings = [];
        let obj = {};
        for (let i = 0; i < num; i++) {
            let sum_num1 = calcElemArr(getDividers(i));
            let sum_num2 = calcElemArr(getDividers(sum_num1));

            if (i === sum_num2 && sum_num1 !== sum_num2) {
                if (obj[sum_num1] && obj[sum_num2]) {
                    continue;
                }
                arr_strings.push(sum_num2 + ' и ' + sum_num1 + ' - дружественные числа');
                obj[sum_num1] = 1;
                obj[sum_num2] = 1;
            }
        }

        return arr_strings;
    }

    console.log(getAllFriendNumbers(10000));

    // функция, которая будет проверять число на совершенность. Совершенное число - это число, сумма собственных делителей которого равна этому числу.
    function checkPerfectNumber(num) {
        let sum_dividers_num = calcElemArr(getDividers(num));
        if (num === sum_dividers_num) {
            return num + ' - совершенное число';
        }
        return num + ' - несовершенное число';
    }

    console.log(checkPerfectNumber(6));
    console.log(checkPerfectNumber(7));

    // функция, которая будет проверять все счастливые билеты. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.
    function checkLuckyTicket(num) {
        num = String(num);
        let num_length = num.length;

        let num_str_part1 = num.slice(0, num_length / 2);
        let num_str_part2 = num.slice(num_length / 2);

        let num_arr_part1 = num_str_part1.split('');
        let num_arr_part2 = num_str_part2.split('');

        let num_sum_part1 = calcElemArr(num_arr_part1);
        let num_sum_part2 = calcElemArr(num_arr_part2);

        if (num_sum_part1 === num_sum_part2) {
            return num + ' - счастливый билет.';
        }
        return num + ' - не счастливый билет.';
    }

    console.log(checkLuckyTicket(330501));

    // функция, которая параметром будет принимать два числа и возвращать массив их общих делителей
    function getGeneralDividers(num1, num2) {
        let general_dividers = [];

        let dividers_num1 = getDividers(num1);
        let dividers_num2 = getDividers(num2);

        for (let divider_num1 of dividers_num1) {
            if (divider_num1 === 1) {
                continue;
            }
            if (containsElem(dividers_num2, divider_num1)) {
                general_dividers.push(divider_num1);
            }
        }

        if (general_dividers.length > 0) {
            return 'Общие делители чисел \'' + num1 + '\' и \'' + num2 + '\' - ' + general_dividers.join(',') + '.';
        }

        return dividers_num2;
    }

    // вспомогательная функция проверки элемента в массиве
    function containsElem(arr, elem, from = 0) {
        return arr.indexOf(elem, from) != -1;
    }

    console.log(getGeneralDividers(6, 12));

    // функция, которая будет принимать строку на русском языке, а возвращать ее транслит
    function translit(word) {
        var answer = '';
        var converter = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
            'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
            'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
            'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
            'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
            'э': 'e', 'ю': 'yu', 'я': 'ya',

            'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
            'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
            'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
            'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
            'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
            'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
            'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
        };

        for (var i = 0; i < word.length; ++i) {
            if (converter[word[i]] == undefined) {
                answer += word[i];
            } else {
                answer += converter[word[i]];
            }
        }

        return answer;
    }

    console.log(translit('Он она они сказка, Ярослав ёлка'));

    function translitURL(word) {
        var converter = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
            'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
            'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
            'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
            'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
            'э': 'e', 'ю': 'yu', 'я': 'ya'
        };

        word = word.toLowerCase();

        var answer = '';
        for (var i = 0; i < word.length; ++i) {
            if (converter[word[i]] == undefined) {
                answer += word[i];
            } else {
                answer += converter[word[i]];
            }
        }

        answer = answer.replace(/[^-0-9a-z]/g, '-');
        answer = answer.replace(/[-]+/g, '-');
        answer = answer.replace(/^\-|-$/g, '');
        return answer;
    }

    console.log(translitURL('Он она они сказка, Ярослав ёлка'));

    // функция, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999
    function numToPr(number) {
        const
            h = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
            t = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
            o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
            p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

        let str = number.toString(), out = '';

        if (str.length === 1) {
            return o[number - 1];
        } else if (str.length === 2) {
            if (str[0] == 1) {
                out = p[parseInt(str[1]) - 1];
            } else {
                out = (t[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + o[parseInt(str[1]) - 1]) : ''));
            }
        } else if (str.length === 3) {
            out = (h[parseInt(str[0]) - 1] + ((str[1] != '0') ? (' ' + t[parseInt(str[1]) - 1]) : '') + ((str[2] != '0') ? (' ' + o[parseInt(str[2]) - 1]) : ''));
        }

        let arr = out.split('');
        arr[0] = arr[0].toUpperCase();
        out = arr.join('');
        return out;
    }

    console.log(numToPr(245));
    console.log(numToPr(999));


});
