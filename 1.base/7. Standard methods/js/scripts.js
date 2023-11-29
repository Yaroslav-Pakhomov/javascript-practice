'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');

    // Математические методы
    console.log('Математические методы');


    // Работа со степенью и корнем Math.pow, Math.sqrt
    // Метод Math.pow возводит число в заданную степень. Math.pow(число, степень)
    // Метод Math.sqrt возвращает квадратный корень числа. Math.sqrt(положительное число)

    //  2 в 10 степени
    console.log(Math.pow(2, 10));

    // квадратный корень из 245
    console.log(Math.sqrt(245));

    let arr = [4, 2, 5, 19, 13, 0, 10];
    let summa = 0;
    for (let elem of arr) {
        summa += Math.pow(elem, 3);
    }
    // console.log(Math.sqrt(summa));
    summa = Math.pow(summa, 1 / 2);
    console.log(summa);


    // Работа с функциями округления Math.round, Math.ceil, Math.floor, toFixed, toPrecision
    // Math.round выполняет округление до ближайшего целого числа по правилам математического округления - Math.round(число)
    // Math.ceil производит округление дробного числа до целого всегда в большую сторону - Math.ceil(число)
    // Math.floor производит округление числа до целых всегда в меньшую сторону - Math.floor(число)
    // toFixed производит округление числа до указанного знака в дробной части - число.toFixed([количество знаков в дробной части]);
    // toPrecision округляет число до заданного знака. В отличие от Math.round округление можно проводить не только в дробной части - число.toPrecision(длина); let num = 12.1; console.log(num.toPrecision(5)); - 12.100

    let number = Math.pow(379, 1 / 2);
    console.log(number); // 19
    console.log(Math.round(number)); // 19
    console.log(Math.ceil(number)); // 20
    console.log(Math.floor(number)); // 19
    console.log(number.toFixed(5)); // 19.46792
    console.log(number.toPrecision(1)); // 2e+1 = 2 * 10**1 = 2 * 10

    number = Math.pow(587, 1 / 2);
    let obj = {};
    obj['number'] = number;
    obj['floor'] = Math.floor(number);
    obj['ceil'] = Math.ceil(number);
    console.log(obj);


    // Нахождение максимального и минимального числа Math.max, Math.min
    // Math.max возвращает максимальное число из группы чисел, переданных в функцию - Math.max(число, число, число...), с помощью хитрого приема можно найти максимальное значение массива: Math.max.apply(null, arr), где arr - произвольный массив.
    // Math.min возвращает минимальное число из группы чисел, переданных параметрами - Math.min(число, число, число...), с помощью хитрого приема можно найти минимальное значение массива: Math.min.apply(null, arr), где arr - произвольный массив.

    arr = [4, -2, 5, 19, -130, 0, 10];
    console.log(Math.max(4, -2, 5, 19, -130, 0, 10) + ' - максимальное');
    console.log(Math.min(4, -2, 5, 19, -130, 0, 10) + ' - минимальное');
    console.log(Math.max.apply(null, arr) + ' - максимальное');
    console.log(Math.min.apply(null, arr) + ' - минимальное');


    // Работа с рандомом Math.random
    // Math.random возвращает случайное дробное число от 0 до 1
    // Получение случайного дробного числа между min и max
    function getRandomArbitary(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Получение случайного целого числа между min и max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(getRandomArbitary(1, 100));
    console.log(getRandomInt(1, 100));

    let arr_random_int = [];
    let arr_random_float = [];
    for (let i = 0; i < 10; i++) {
        arr_random_int.push(getRandomInt(1, 100));
        arr_random_float.push(getRandomArbitary(1, 100));
    }
    console.log(arr_random_int);
    console.log(arr_random_float);


    // Работа с модулем Math.abs
    // Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное - Math.abs(число)
    let a = 1;
    let b = 10;
    console.log(Math.abs(a - b));


    // Строковые методы
    console.log('Строковые методы');


    // Работа с регистром символов toUpperCase, toLowerCase
    // строка.toUpperCase()
    // строка.toLowerCase()
    let str = 'Язык JavaScript';
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());


    // Работа с substr, substring, slice
    // substr возвращает подстроку из строки (исходная строка при этом не изменяется).
    // Первый параметр задает номер символа, с которого метод начинает отрезать (учтите, что нумерация с нуля), а второй параметр - сколько символов отрезать.
    // Первый параметр может принимать отрицательные значения. В этом случае отсчет символа, с которого начинается обрезание, будет идти с конца строки. Причем последний символ имеет номер -1, предпоследний - -2 и так далее.
    // Второй параметр не является обязательным, если он не указан, то вырезаны будут все символы до конца строки.
    // - строка.substr(номер первого символа, [сколько символов отрезать])

    // substring возвращает подстроку из строки (исходная строка при этом не изменяется).
    // Первый параметр задает номер символа, с которого метод начинает отрезать (учтите, что нумерация с нуля), а второй параметр - номер символа, на котором следует закончить вырезание (символ с этим номером не включается в вырезанную часть).
    // Второй параметр не является обязательным, если он не указан, то вырезаны будут все символы до конца строки.
    // Если первый параметр больше второго, тогда substring ведет себя, как будто они поменялись местами. Например, написать str.substring(3, 0) все равно что написать str.substring(0, 3).
    // Если какой-то из параметров больше, чем длина строки - он считается равным длине строки.
    // Отрицательные значения приравниваются к нулю.
    // - строка.substring(откуда начать отрезать, [докуда отрезать])

    // slice возвращает подстроку из строки (исходная строка при этом не изменяется).
    // Первым параметром указывается номер символа строки, с которого начинается вырезание, а вторым параметром - номер символа, на котором закончится вырезание (при этом символ с этим номером не включится в вырезанную часть).
    // Второй параметр не является обязательным. Если его не указать - подстрока возьмется с указанного в первом параметре символа до конца строки.
    // Второй параметр также может принимать отрицательные значения. В этом случае отсчет символа, на котором закончится обрезание, начинается с конца строки. Причем последний символ имеет номер -1, предпоследний - -2 и так далее.
    // К примеру, если написать slice(1, -1), то вырезанная часть возьмется с первого символа включительно по последний не включая его. Если вам нужно включить и последний символ - нужно просто не задавать второй параметр для slice, вот так: slice(1).
    // Если второй параметр меньше первого - возвратится пустая строка.
    // - строка.slice(откуда отрезать, [докуда отрезать])

    str = 'я учу javascript!';
    let subSubstr1 = str.substr(2, 3);
    let subSlice1 = str.slice(2, 5);
    let subSubstr2 = str.substr(6, 10);
    let subSlice2 = str.slice(6, -1); // Вариант 2 - subSlice2 = str.slice(6, 16);
    let subSubstr3 = str.substr(6);
    let subSlice3 = str.slice(6);
    console.log(subSubstr1);
    console.log(subSlice1);
    console.log(subSubstr2);
    console.log(subSlice2);
    console.log(subSubstr3);
    console.log(subSlice3);


    // Работа с indexOf, lastIndexOf
    // indexOf осуществляет поиск подстроки (указывается первым параметром) в строке.
    // Метод вернет позицию первого совпадения, а если оно не найдено, то вернет -1.
    // Вторым параметром (он необязателен) можно передать номер символа, откуда следует начинать поиск.
    // Метод чувствителен к регистру символов.
    // - строка.indexOf(что ищем, [откуда начинать поиск]);

    // lastIndexOf осуществляет поиск подстроки (указывается первым параметром) в строке. Поиск ведется с конца строки.
    // Метод вернет позицию первого совпадения, а если оно не найдено, то вернет -1.
    // Вторым параметром (он необязателен) можно передать номер символа, откуда следует начинать поиск.
    // Метод чувствителен к регистру символов.
    // - строка.lastIndexOf(что ищем, [откуда начинать поиск]);

    str = 'abcdea';
    let strLength = str.length;
    let index_a_1 = +str.indexOf('a');
    let index_a_2 = +str.lastIndexOf('a');

    console.log(strLength);
    console.log(index_a_1);

    // есть ли в этой строке символ 'a' и начинается ли эта строка с символа 'a'
    if (!isNaN(index_a_1) && index_a_1 === 0) {
        console.log(index_a_1 + ' начинается с буквы \'a\'');
    }

    // есть ли в этой строке символ 'a' и заканчивается ли эта строка на символ 'a'
    if (!isNaN(index_a_2) && index_a_2 === (strLength - 1)) {
        console.log(index_a_2 + ' заканчивается с буквы \'a\'');
    }

    // Дана строка. Проверьте, начинается ли эта строка на 'http://'.
    str = 'http://jakgkjga.ru';
    let search_str = 'http://';
    let index_http = +str.indexOf(search_str);
    // есть ли в этой строке символ 'http://' и начинается ли эта строка с символа 'http://'
    if (!isNaN(index_a_1) && index_a_1 === 0) {
        console.log(index_http + ' начинается с буквы \'http://\'');
    }

    // Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
    // Строка
    str = 'askjgnkang.html';
    // Искомая строка
    search_str = '.html';
    // Длинна строки
    strLength = +str.length;
    // Длинна искомой строки
    let searchLength = +search_str.length;
    // Число индекса первого сивола искомой строки с конца
    let indexHtml = +str.lastIndexOf(search_str);
    // Номер последнего символа
    let lastSymbol = indexHtml ? indexHtml + searchLength : 0;
    console.log(strLength);
    console.log(searchLength);
    console.log(indexHtml);
    console.log(lastSymbol);

    if (!isNaN(indexHtml) && lastSymbol === strLength) {
        console.log(indexHtml + ' заканчивается на \'' + search_str + '\'.');
    }


    // Работа с startsWith, endsWith
    // startsWith() помогает определить, начинается ли строка с символов указанных в скобках
    // Необязательный параметр. Позиция в строке, с которой начинать поиск searchString; по умолчанию 0. - str.startsWith(searchString[, position])

    // endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках
    // length - Необязательный параметр. Позволяет искать внутри строки, обрезая её по диапазону; по умолчанию равен длине строки. - str.endsWith(searchString[, length])

    str = 'http://jakgkjga.ru';
    search_str = 'http://';
    console.log(str.startsWith(search_str));
    console.log(str.endsWith(search_str));

    str = 'askjgnkang.html';
    search_str = '.html';
    console.log(str.startsWith(search_str));
    console.log(str.endsWith(search_str));


    // Работа с split
    // split осуществляет разбиение строки в массив по указанному разделителю
    // Разделитель указывается первым необязательным параметром. Если он не задан - вернется вся строка. Если он задан как пустые кавычки '' - то каждый символ строки попадет в отдельный элемент массива.

    // Вторым необязательным параметром можно указать максимальное количество элементов в получившемся массиве. - строка.split([разделитель], [максимальное количество элементов])

    str = 'html-css-javascript';
    arr = str.split('-');
    console.log(arr);
    arr = str.split('-', 2);
    console.log(arr);

    str = '1-2-3-4-5';
    arr = str.split('-');
    console.log(arr);

    str = '12345';
    arr = str.split('');
    console.log(arr);


    // Работа с join
    // join объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива)
    // Разделитель задается параметром метода и не является обязательным. Если он не задан - по умолчанию в качестве разделителя возьмется запятая. Если вы хотите слить элементы массива без разделителя - укажите его как пустую строку ''. - массив.join([разделитель])

    arr = [1, 2, 3];
    str = arr.join('-');
    console.log(str);

    arr = [1, 2, 3, 4, 5];
    str = arr.join('-');
    console.log(str);


    // Методы для массивов

    // Работа с push, unshift
    // push добавляет неограниченное количество элементов в конец массива. При этом исходный массив изменяется, а результатом возвращается новая длина массива. - массив.push(элемент, элемент, элемент...)
    // unshift добавляет неограниченное количество новых элементов в начало массива. При этом исходный массив изменяется, а результатом возвращается новая длина массива. - массив.unshift(элемент, элемент, элемент...);

    arr = [1, 2, 3];
    arr.push(4, 5, 6);
    console.log(arr);

    arr = [1, 2, 3];
    arr.unshift(4, 5, 6);
    console.log(arr);


    // Работа с shift, pop
    // shift удаляет первый элемент из массива. При этом исходный массив изменяется, а результатом метода возвращается удаленный элемент. - массив.shift();
    // pop удаляет последний элемент из массива. При этом исходный массив изменяется, а результатом метода возвращается удаленный элемент. - массив.pop()

    arr = [0, 1, 2, 3];
    console.log(arr);

    let first_elem_arr = +arr.shift();
    if (!isNaN(first_elem_arr)) {
        console.log(first_elem_arr);
        console.log(arr);
    }

    let end_elem_arr = +arr.pop();
    console.log(end_elem_arr);
    console.log(arr);


    // Работа с slice
    // slice вырезает и возвращает указанную часть массива.
    // Первым параметром указывается номер элемента массива, с которого начинается вырезание, а вторым параметром - номер элемента, на котором закончится вырезание (при этом элемент с этим номером не включится в вырезанную часть).
    // Второй параметр не является обязательным. Если его не указать - подмассив возьмется с указанного в первом параметре элемента до конца массива.
    // Второй параметр также может принимать отрицательные значения. В этом случае отсчет элемента, на котором закончится обрезание, начинается с конца массива. Причем, последний элемент имеет номер -1, предпоследний -2 и так далее.
    // К примеру, если написать slice(1, -1), то вырезанная часть возьмется с первого элемента включительно по последний не включая его. Если вам нужно включить и последний элемент - нужно просто не задавать второй параметр для slice, вот так: slice(1).
    // Метод не изменяет исходный массив. - массив.slice(откуда отрезать, [докуда	отрезать])

    arr = [1, 2, 3, 4, 5];
    let sub_arr = arr.slice(0, 3);
    console.log(sub_arr);

    sub_arr = arr.slice(3);
    console.log(sub_arr);


    // Работа с splice
    // splice удаляет или добавляет элементы в массив. Можно только удалять элементы, только добавлять или делать и то и другое одновременно. Метод очень универсальный и сложный для понимания.
    // Метод изменяет сам массив и возвращает при этом массив удаленных элементов.
    // Первым параметром метод принимает номер элемента массива, который нужно удалить. Вторым параметром - сколько элементов массива следует удалить. Если его поставить в 0 - то элементы удалены не будут (только добавлены новые).
    // Дальше через запятую идут элементы, которые нужно добавить в массив (являются необязательными параметрами). Эти элементы добавятся вместо удаленных элементов массива.
    // Если удаления не было (когда второй параметр 0) - элементы вставятся в массив начиная с той позиции, которая указана первым параметром метода.
    // Первый параметр может иметь отрицательное значение. В этом случае отсчет позиции начнется не с начала массива, а с конца. Причем, последний элемент имеет номер -1, предпоследний -2 и так далее. - массив.splice(откуда удаляем, сколько элементов удаляем, [вставить элемент], [вставить элемент]...);

    arr = ['a', 'b', 'c', 'd', 'e'];
    let del = arr.splice(1, 3);
    console.log(del);
    console.log(arr);

    arr = ['a', 'b', 'c', 'd', 'e'];
    del = arr.splice(2, 1, '1', '2', '3');
    console.log(del);
    console.log(arr);

    arr = ['a', 'b', 'c', 'd', 'e'];
    del = arr.splice(2, 0, '1', '2', '3');
    console.log(del);
    console.log(arr);

    arr = ['a', 'b', 'c', 'd', 'e'];
    del = arr.splice(-2, 1);
    console.log(del);
    console.log(arr);

    arr = [1, 2, 3, 4, 5];
    del = arr.splice(1, 2);
    console.log(del);
    console.log(arr);

    arr = [1, 2, 3, 4, 5];
    // arr = ['a', 'b', 'c', 'd', 'e'];
    del = arr.splice(3, 0, 'a', 'b', 'c');
    console.log(del);
    console.log(arr);

    arr = [1, 2, 3, 4, 5];
    del = arr.splice(1, 0, 'a', 'b');
    console.log(arr);
    del = arr.splice(6, 0, 'c');
    console.log(arr);
    del = arr.splice(8, 0, 'e');
    console.log(del);
    console.log(arr);


    // Работа с indexOf
    // indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет - arr.indexOf(searchElement[, fromIndex = 0]), fromIndex Индекс, с которого начинать поиск

    arr = [1, 2, 3, 4, 5];
    let index_3 = arr.indexOf(3);
    console.log(index_3);


    // Работа с includes
    // includes проверяет наличие элемента в массиве, возвращает bool значение
    arr = [1, 2, 3, 4, 5];
    index_3 = arr.includes(3);
    console.log(index_3);


    // Практика на использования изученных методов

    // Регистр символов
    str = 'london';
    let result = str.slice(0, 1).toUpperCase() + str.slice(1);
    console.log(result); // выведет 'London'

    result = str.slice(0, 1).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
    console.log(result); // выведет 'LondoN'

    str = 'London';
    result = str.slice(0, 1).toLowerCase() + str.slice(1);
    console.log(result);  // выведет 'london'


    // Слова в строке
    str = 'word1 word2 word3';
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        // Увеличим регистр каждого слова:
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
    }
    result = words.join(' '); // Сольем массив обратно в строку:
    console.log(result); 	// выведет 'Word1 Word2	Word3'

    str = 'var_test_text';
    words = str.split('_');
    for (var i = 0, count = words.length; i < count; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
    }
    str = words.join('');
    console.log(str);


    // Переворот строки
    str = '12345';
    result = str.split('').reverse().join('');
    console.log(result); // выведет '54321'

    str = 'word1 word2 word3';
    result = str.split(' ').reverse().join(' ');
    console.log(result); // выведет 'word3 word2 word1'


    // Поиск ошибок в коде со стандартными методами
    let num = 12345;
    arr = String(num).split('');
    let sum = 0;
    for (let digit of arr) {
        sum += +digit;
    }
    console.log(sum);

    num = 12345;
    arr = String(num).split('');
    let prod = 1;
    for (let digit of arr) {
        prod *= +digit;
    }
    console.log(prod);


})
