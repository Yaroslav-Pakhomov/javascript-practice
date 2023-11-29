// Строгий режим, аналог declare(strict_types=1) в php
"use strict";

alert('JS');

// let a, b, c; // можно сначала объявить все 3 переменные
let a = 3;
let b = 1;
let c = 4, d = 5;

// Присваиваем переменным значения:
a = 1;
b = 2;
c = 3;

// alert(a);

// Сложение:
a = 1 + 2;

// Вычитание:
b = 3 - 2;

// Умножение:
c = 3 * 2;

// Деление:
d = 4 / 2;

c = a + b;

// Приоритет операций такой же как в математике
a = 2 * 2 + 3;
// alert(a); // выведет 7 (результат 4 + 3)

a = 0.5 + 0.5;
// alert(a); // выведет 1

a++;
// alert(a);
a--;
// alert(a);

a = -100;
// alert(a);


// Остаток от деления оператор %:
a = 13;
b = 5;
// alert(a % b); // выведет 3

// Возведение в степень:
// alert(10 ** 3); // выведет 1000

// alert(2 * 2 ** 3); // выведет 16

a = (3 * 2) ** 3;
// alert(a);  // выведет 216

a = 3 * 2 ** (3 + 1);
// alert(a); // выведет 48

// Строки
// Между одинарными и двойными кавычками в JavaScript нет никакой разницы

let str = 'abc';
// alert(str);

// Сложение строк, конкатенация
let str1 = 'abc';
let str2 = 'def';
// alert(str1 + ' !!! ' + str2); // выведет 'abc !!! def'

// Длина строки
str = 'abcde';
// alert(str.length); // выведет 5
// alert('ab de'.length); // выведет 5

// Шаблонные строки
// Существует специальный тип кавычек - косые:
str = `abc`;
// alert(str); // выведет 'abc'

// В косых кавычках можно выполнять вставку переменных. Для этого имя переменной нужно написать в конструкции ${}.

str = 'xxx';
let txt = 'aaa ' + str + ' bbb';
// Аналог выше написанного
txt = `aaa ${str} bbb`;

// Косые кавычки специально предназначены для создания многострочных строк:
str = `abc
def`; // так будет работать
// alert(str);
str = `a
b
c`;
// alert(str);


// Специальные значения
// Вот они: undefined, null, true, false, NaN, Infinity, -Infinity.

// Значение undefined обозначает неопределенность
let z;
// alert(z);

// Значение null обозначает "ничего".
a = null;
// alert(a); // выведет null

// Значения true и false обозначают истину и ложь соответственно

a = true;
// alert(a);
a = false;
// alert(a);

// Значение NaN (Not-A-Number) обозначает не число.
// alert('abc' * 3); // выведет NaN
// alert(NaN + 1); // выведет NaN

// Значения Infinity и -Infinity обозначают соответственно бесконечность и минус бесконечность.
// alert( 1 / 0); // выведет Infinity
// alert(-1 / 0); // выведет -Infinity


// Работа с консолью
// В открывшейся панели разработчика в основном пользуются двумя вкладками: Elements и Console. В первой вкладке вы можете получать информацию по тегам страницы, а во второй - отладочную информацию JavaScript.

// чтобы заниматься отладкой программ используем console.log();
let num = 123;
// Тип данных в консоли
// В консоли разным цветом выводятся разные типы данных.
console.log(num);
console.log('123');
console.log(z);
console.log(null);
console.log(true);
console.log('abc' * 3);
console.log(1 / 0);
console.log(-1 / 0);

// Ошибки в консоли вкладка "Источник" показывает место ошибки
// alert(eee);

// Константы - объявляются с помощью оператора const, записываются большими буквами.
const PI = 3.14;

a = '1' + (2 + 3);
// alert(a); // выведет '15'

a = '1' + 2 + 3;
// alert(a); // выведет '123'

a = 2 + 3 + '1';
// alert(a); // выведет '51'

a = '5' * '2';
// alert(a); // 10

a = '5' - '2';
// alert(a); // 3

a = '5' / '2';
// alert(a); // 2.5

a = '5' % '2';
// alert(a); // 1

a = '5s' * '2';
// alert(a); // NaN

a = '5s' + '2';
// alert(a); // '5s2'


// Преобразование к числу оператор Number(), либо +
a = '2';
b = '3';
// alert(Number(a) + Number(b)); // выведет 5
// Альтернатива
a = +'2'; // в переменную запишется число 2
b = +'3';


// Выделение чисел оператор parseInt() и parseFloat()
num = parseInt('12px');
// alert(num); // выведет 12
let summa = parseInt('6.5px') + parseInt('6.5px');

// alert(summa); // выведет 12 из-за parseInt()

// alert((parseFloat('6.5px') + parseFloat('6.5px')) + 'px'); // выведет 13px


// Преобразование к строке
num = 12345;
str = String(num); // преобразуем наше число к строке
// alert(String(num).length);     // найдем длину строки


// Преобразование логического типа
// alert(String(true));  // выведет 'true'
// alert(String(false)); // выведет 'false'

// alert('a' + true);    // выведет 'atrue'

// alert(Number(true));  // выведет 1
// alert(Number(false)); // выведет 0

// alert(true + 1);     // выведет 2
// alert(true + true);  // выведет 2


// Преобразование к логическому типу
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(+0));         // false
console.log(Boolean(null));       // false
console.log(Boolean(false));      // false
console.log(Boolean(NaN));        // false
console.log(Boolean(undefined));  // false
console.log(Boolean(''));         // false

// остальные значения дают true
console.log(Boolean(-1));          // true
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true

// Следующие значения являются строками, так как взяты в кавычки, и также приводятся к true
console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true


// Получение символов строки
str = 'abcde';

// alert(str[0]); // выведет 'a'
// alert(str[1]); // выведет 'b'
// alert(str[2]); // выведет 'c'


// Последний символ строки
str = 'abcde';
let last = str.length - 1; // номер последнего символа
// alert(str[last]); // выведет 'e'
// alert(str[str.length - 1]); // выведет 'e' короткая запись


// Строки с цифрами
let test = '12345';
// alert(test[0] + test[1]); // выведет '12' - суммирует как строки
// alert(Number(test[0]) + Number(test[1])); // выведет 3

// Обращение к цифрам
test = 12345;
// alert(test[0]); // выдаст undefined
test = String(12345); // строка
// alert(test[0]); // выведет '1' - все работает
// alert(test[0] + test[1]); // выведет '12' - суммирует как строки
// alert(Number(test[0]) + Number(test[1])); // выведет 3
// alert(test[1] * test[2]); // выведет 6


// Сокращенные операции
num = 1;
num += 3; // эквивалентно num = num + 3;

num = 2;
num -= 3; // эквивалентно num = num - 3;

num = 2;
num *= 3; // эквивалентно num = num * 3;

num = 2;
num /= 3; // эквивалентно num = num / 3;


// Операции инкремента и декремента
num = 0;
num++;        // прибавляем к переменной a число 1
// alert(num);   // выведет 1

num = 0;
num--;        // отнимаем от переменной num число 1
// alert(num);   // выведет -1

// Префиксный и постфиксный тип
// В первом способе операция записывается после имени переменной, вот так: a++, а во втором способе - перед именем переменной, вот так: ++a.

// Первая форма называется постфиксной, а вторая - префиксной. Давайте посмотрим, в каких случаях проявляется разница между этими двумя формами.

// Пусть у нас есть код alert(a++) и код alert(++a).

// В случае alert(a++) переменная сначала выведется, а потом увеличится на единицу, а в случае alert(++a) переменная сначала увеличится на единицу, а потом выведется.

num = 0;
// alert(num++); // выведет 0
// alert(num);   // выведет 1

num = 0;
// alert(++num); // выведет 1 - переменная увеличилась сразу

let num1 = 0;
let num2 = num1++; // в переменную num2 запишется 0
// alert(num2); // выведет 0
// alert(num1); // выведет 1 - переменная num1 поменялась после записи в num2

num1 = 0;
num2 = ++num1; // в переменную num2 запишется 1
// alert(num2); // выведет 1

// Если наша операция выполняется на отдельной строке, то разницы между префиксной и постфиксной формами нет:
num = 0;
++num;
num++;
// alert(num); // выведет 2


// Неточные вычисления
a = 0.1 + 0.2;
// alert(a); // выведет 0.30000000000000004
// alert(a.toFixed(2)); // выведет '0.30'
// alert(+a.toFixed(2)); // выведет 0.3


// Функция prompt
// При вызове функции prompt дальнейшее выполнение скрипта блокируется
// let name_1 = prompt('Ваше имя?');

// alert('Ваше имя: ' + name_1);
// alert('Ваше имя: ' + prompt('Ваше имя?')); // сокращённая запись


// num1 = prompt('Введите первое число');
// num2 = prompt('Введите второе число');

// alert(Number(num1) + Number(num2)); // сложит числа как строки

// let square = prompt('Сторона квадрата?');

// alert('Площадь квадрата: ' + Number(square ** 2));


// Вывод текста в документ document.write
str = 'text';
document.write('<b>' + str + '</b>');
document.write('<br>');
document.write('text1<br>');
document.write('text2<br>');
document.write('text3<br>');
document.write('<br>');


let aaa = 1;
let bbb = 2;
let ccc = 3;

console.log(Number(aaa) + Number(bbb) + Number(ccc));

a = '123';
b = '456';
let s = Number(a) + Number(b);

console.log(s);

num = 123;
str = String(num);
console.log(str.length);

num = 124;
str = String(num);
console.log(str[str.length - 1]);

a = 24 * 60 * 60;
console.log(a);
