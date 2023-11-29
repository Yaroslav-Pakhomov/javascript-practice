'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');

    // Глобальные переменные в функциях
    // Переменные, определенные снаружи функции, будут видны внутри этой функции, называются глобальными.
    function func1() {
        console.log(num); // переменная num видна внутри функции
    }

    function func2() {
        console.log(num);
        num++;
    }

    let num; // Переменная снаружи функции, д.б. определена перед вызовом функции

    num = 1; // задаем значение 1
    func1();  // выведет 1

    num = 2; // задаем значение 2
    func2();  // выведет 2
    func2();  // выведет 3
    // Так как любая из функций легко может поменять глобальную переменную, то их использование представляет собой рассадник трудноуловимых ошибок. По этой причине использование глобальных переменных в скрипте нужно сводить к минимуму. Желательно, чтобы их вообще не было или было самое минимальное количество.


    // Локальные переменные в функциях
    // Переменные, определенные внутри функции, называются локальными. В отличие от глобальных переменных, локальные переменные видны только внутри функции, и не видны снаружи
    function func3() {
        let num1 = 5; // локальная переменная
        return num1;
    }

    // console.log(num1); // ничего не выведет, а выдаст ошибку в консоль
    console.log(func3()); // выведет 5


    // Одинаковые имена переменных в функциях (Совпадение имен переменных)
    // Пусть и снаружи функции, и внутри есть переменная num. В этом случае любые изменения с локальной переменной num никак не влияют на глобальную переменную num.
    let num2 = 1; // глобальная переменная

    function func4() {
        // num = 2; // забыли написать let - меняем внешнюю переменную
        let num2 = 2; // локальная переменная
        console.log(num2);
    }

    func4(); // вызываем функцию, выведет 2
    console.log(num2); // выведет 1 - глобальная переменная не поменялась

    // Тут может быть две ситуации: или мы действительно хотели поменять глобальную переменную (тогда все ок), или мы забыли let и случайно поменяли глобальную переменную.


    // Изменение глобальных переменных
    let num5 = 1;

    function func5() {
        num5 = 2; // не написан let - меняем внешнюю переменную
        // console.log(num5);
    }

    console.log(num5); // выведет 1
    func5(); // меняем переменную
    console.log(num5); // выведет 2


    // Глобальные переменные и параметры функций
    function func6(localNum) {
        // let num6 = 13; // объявим через let, то локальная переменная, ничего не поменяется
        console.log(num6); // выведет 1
        console.log(localNum); // выведет 1
        localNum = 2; // ничего не меняет снаружи
        num6 = 2; // меняем глобальную переменную внутри функции
        console.log(localNum);
    }

    let num6 = 1; // внешняя глобальная переменная
    func6(num6); // вызываем функцию с параметром, выведет 1
    // console.log(localNum); // выдаст ошибку
    console.log(num6);  // Выведет 2, т.к. после вызова func6()


    // Совпадение имен с параметрами
    // Параметры функции являются локальными переменными внутри нее. Давайте назовем параметр функции таким же именем, как и внешнюю глобальную переменную.
    function func7(num7) {
        console.log(num7); // выведет 1
        num7 = 2; // меняем локальную переменную
        console.log(num7); // выведет 2
    }

    let num7 = 1;
    func7(num7);
    console.log(num7); // выведет 1 - ничего не поменялось


    // Параметры-объекты
    // Объекты, в отличие от примитивов, передаются по ссылке. Это значит, что изменение объекта внутри функции приведет к тому, что он поменяется и снаружи функции.
    function func8(arr) {
        arr[0] = '!';
    }

    let arr = [1, 2, 3];
    func8(arr);
    console.log(arr); // выведет ['!', 2, 3]

    function func9(obj) {
        obj.a = '!';
    }

    let obj = {a: 1, b: 2, c: 3};
    func9(obj);
    console.log(obj); // выведет {a: '!', b: 2, c: 3}

    function func10(arg) {
        arg = '!'; // меняем локальную переменную
        console.log(arg);
    }

    obj = {a: 1, b: 2, c: 3};
    func10(obj.a);
    console.log(obj); // выведет {a: 1, b: 2, c: 3}

    function func11(obj) {
        obj = '!';  // меняем локальную переменную
        console.log(obj)
    }

    obj = {a: 1, b: 2, c: 3};
    func11(obj.a);
    console.log(obj);  // выведет {a: 1, b: 2, c: 3}

    function func12(arr) {
        arr.splice(1, 1);
    }

    arr = [1, 2, 3];
    func12(arr);
    console.log(arr); // выведет [1, 3]

    function func13(arr) {
        arr.slice(1, 1);
    }

    arr = [1, 2, 3];
    func13(arr);
    console.log(arr); // выведет [1, 2, 3]

    function func14(arr) {
        let newArr = arr;
        newArr[0] = '!';
    }

    arr = [1, 2, 3];
    func14(arr);
    console.log(arr); // выведет ['!', 2, 3]


    // Исходный код функции и ее результат
    function func15() {
        return '!';
    }

    console.log(func15()); // выведет '!'
    console.log(func15); // увидим код функции


    // Функция как переменная
    // В JavaScript, в отличие от других языков, функции являются такими же значениями переменных, как числа, строки и массивы.
    // На самом деле у нас нет функции func. У нас есть переменная func, хранящая в себе исходный код функции.
    // Мы можем, к примеру, затереть переменную func чем-нибудь другим, например, строкой. В этом случае функция func больше не будет функцией, а будет строкой.

    function func16() {
        console.log('!');
    }

    func16(); // выведет '!'
    func16 = 'string'; // затрем переменную func
    console.log(func16); // выведет 'string'

    function func17() {
        return '!';
    }

    console.log(func17()); // выведет '!'
    console.log(func17); // исходный код функции
    let test2 = func17;
    func17 = 123;
    console.log(func17); // выведет 123
    console.log(test2());  // выведет '!'


    // Запись функции в другую переменную------------------
    function func18() {
        console.log('!');
    }

    let test = func18; // теперь test такая же функция, как и func
    // Проверим:
    test(); // выведет '!'
    func18(); // выведет '!'


    // Присваивание функций в переменные при создании-----------------
    // Итак название функции и ее исходный код отделены друг от друга. Поэтому в JavaScript существует альтернативный синтаксис для создания функции: создается функция без имени (такие функции называются безымянными) и присваивается в какую-нибудь переменную. Эта переменная и становится именем функции.
    let func19 = function () {
        console.log('func19');
    };
    func19(); // выведет 'func19'

    // Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func20.
    let func20 = function () {
        return 20;
    }
    console.log(func20());
    // Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func21.
    let func21 = function () {
        return 21;
    }
    console.log(func21());
    // Найдите сумму значений функций func20 и func21. Выведите эту сумму алертом в консоль.
    // alert(func20() + func21());
    console.log(func20() + func21());


    // Важный нюанс----------------
    function func22() {
        return '!';
    }

    func22 = 'string'; // затрем переменную с функцией строкой
    //func22(); // получим ошибку, тк func - не функция


    // Функциональные выражения и объявление функций (Function expression и Function declaration)
    // После изучения предыдущего урока вы теперь знаете, что в JavaScript функцию можно объявить двумя способами.

    // Первый способ - это просто объявить функцию через function, сразу задав ее имя, Function Declaration(объявление функции):
    // function func() {
    //   console.log('!');
    // }
    // func(); // выведет '!'

    // Второй способ - это сделать безымянную функцию и записать ее в какую-либо переменную, Function Expression (функциональное выражение):
    // let func = function() {
    //   console.log('!');
    // };
    // func(); // выведет '!'

    // По-научному первый способ называется Function Declaration (объявление функции), а второй - Function Expression (функциональное выражение).


    // Разница
    // Оба способа объявления функции эквивалентны, но есть существенная разница: функции, объявленные как Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.
    // Обращаемся к функции до ее объявления:
    // func(); //выведет '!'
    // function func() {
    //   console.log('!');
    // }
    // При объявлении функции как Function Declaration после фигурной скобки } точка с запятой не ставится.

    // А функциональные выражения создаются в момент выполнения кода и недоступны выше. Поэтому такой код выдаст ошибку.
    // func(); //ошибка, такой функции еще нет!
    // let func = function() {
    //   console.log('!');
    // };
    // Если же функция объявлена Function Expression, то после } ставится точка с запятой.

    // Почему: потому что в JavaScript любое выражение должно заканчиваться точкой с запятой, а в данном случае у нас как раз-таки выражение. Эта точка с запятой не обязательна, так как JavaScript вообще разрешает их не ставить, но желательна.


    // Объяснение работы Function Declaration
    // Почему функции, созданные как Function Declaration доступны до объявления?
    // Как вы должны уже знать, интерпретатор JavaScript обрабатывает код строка за строкой. Функции, однако, являются исключениями: интерпретатор вначале пробегается по всему документу с кодом и ищет все функции, объявленные как Function Declaration, и только потом начинает выполнять код документа построчно.
    // Функции, созданные как Function Expression, создаются в тот момент, когда до них доходит интерпретатор. Поэтому они и недоступны выше места своего объявления.


    // Расставьте точки с запятой во всех необходимых местах
    // let func1 = function () { console.log('!'); };
    // let func2 = function () {
    //   console.log('!');
    // };
    // function func3() {
    //   console.log('!');
    // }


    // Нюансы функциональных выражений
    // Название Function Expression (функциональное выражение) дано не просто так. Оно действительно означает это - то, что такие функции являются частью какого-либо выражения.
    // Сложим какую-нибудь строку и безымянную функцию:
    let str = 'str' + function () {
        return 2;
    };
    console.log(str); // выведет 'strfunction() {return 2;}'

    // Выводы
    // Подведем итог: функции являются Function Declaration(Объявление функции) или Function Expression(Выражение функции) не потому, что имеют имя или не имеют, а потому, что являются участниками выражений или не являются.

    // Как вы видели выше, функция без имени может быть воспринята как Function Declaration, а функции с именем может быть Function Expression.

    // Как проверить тип функции
    // В задачах ниже вам нужно будет определить функция определена как Function Declaration или Function Expression.

    // В простых случаях это не составляет труда сделать визуально. Но как проверить, что вы сделали это правильно? Используйте разницу между Function Declaration или Function Expression: первые могут быть вызваны выше своего определения, а вторые - нет.

    // Законченная команда - закрытая точкой с запятой.


    // Массив с анонимными функциями
    // Функции в JavaScript ведут себя, будто строки или числа
    arr = [
        function () {
            console.log('1')
        },
        function () {
            console.log('2')
        },
        function () {
            console.log('3')
        },
    ];
    console.log(arr[0]); // увидим исходный код первой функции
    arr[0](); // выведет '1'

    for (let func of arr) {
        console.log(func);
        func();
    }

    arr = [
        function () {
            return 1;
        },
        function () {
            return 2;
        },
        function () {
            return 3;
        },
    ];
    // console.log(arr[0]);
    console.log(arr[0]());

    let sum = 0;
    for (let func of arr) {
        console.log(func());
        sum += func();
    }
    console.log(sum);


    // Объект с анонимными функциями
    obj = {
        func1: function () {
            console.log(1)
        },
        func2: function () {
            console.log(2)
        },
        func3: function () {
            console.log(3)
        },
    };
    obj['func1'](); // выведет 1
    obj.func1(); // выведет 1

    obj = {
        func1: function () {
            return 11
        },
        func2: function () {
            return 22
        },
        func3: function () {
            return 33
        },
    };
    console.log(obj.func1());

    sum = 0;
    for (let func in obj) {
        console.log(obj[func]());
        sum += obj[func]();
    }
    console.log(sum);

    // Применение
    let math = {
        square: function (num) {
            return num ** 2
        },
        cube: function (num) {
            return num ** 3
        },
    };
    console.log(math.square(2)); // выведет 4
    console.log(math.cube(2)); // выведет 8

    // принимает параметром массив с числами, первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

    let math2 = {
        sum: function (arr) {
            let sum_arr = 0;
            for (let elem of arr) {
                sum_arr += elem;
            }
            return sum_arr;
        },

        square_sum: function (arr) {
            let sum_arr = 0;
            for (let elem of arr) {
                sum_arr += elem ** 2;
            }
            return sum_arr;
        },

        cube_sum: function (arr) {
            let sum_arr = 0;
            for (let elem of arr) {
                sum_arr += elem ** 3;
            }
            return sum_arr;
        },
    };
    console.log(math2.sum([1, 2, 3]));
    console.log(math2.square_sum([1, 2, 3]));
    console.log(math2.cube_sum([1, 2, 3]));


    // Передача функций параметрами
    // Вызов ф-ции
    test1(
        function () {
            return 1;
        }, // первый параметр
        function () {
            return 2;
        }  // второй параметр
    );

    // Объявление ф-ции
    function test1(func1, func2) {
        console.log(func1); // выведет 'function() {return 1;}'
        console.log(func1()); // выведет 1
        console.log(func2); // выведет 'function() {return 2;}'
        console.log(func2()); // выведет 2
        console.log(func1() + func2());
    }

    // Function Expression
    let anon_func1 = function () {
        return 111;
    };
    let anon_func2 = function () {
        return 222;
    };
    let anon_func3 = function () {
        return 333;
    };
    test3(
        anon_func1,
        anon_func2,
        anon_func3,
    );

    function test3(func1, func2, func3) {
        console.log(func1() + func2() + func3());
    }

    // Именованные функции
    // Function Declaration
    function get1() {
        return 11;
    }

    function get2() {
        return 22;
    }

    test4(get1, get2); // выведет 33
    function test4(func1, func2) {
        console.log(func1() + func2());
    }

    // Параметры передаваемых
    // Выведет 9:
    function test5(func) {
        console.log(func(3));
    }

    function func23(num) {
        return num ** 4;
    }

    test5(function (num) {
        return num ** 2;
    });
    test5(function (num) {
        return num ** 3;
    });

    test5(func23);

    // Передадим и число параметром
    function test6(num, func) { // первым параметром приходит число
        console.log(func(num));
    }

    test6(5, func23); // выведет 625
    test6(5, function (num) {
        return num ** 2; // возвращает квадрат переданного числа, первого параметра
    });
    test6(5, function (num) {
        return num ** 3; // возвращает куб переданного числа, первого параметра
    });

    console.log(test7(2, square_func, cube_func)); // сумма квадрата и куба переданного числа первым параметром
    console.log(test7(3, square_func, cube_func)); // сумма квадрата и куба переданного числа первым параметром

    function test7(num, square_func, cube_func) { // первым параметром приходит число
        return square_func(num) + cube_func(num);
    }

    function square_func(num) {
        return num ** 2;
    }

    function cube_func(num) {
        return num ** 3;
    }

    // Применение
    // Сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию. Переданная функция должна будет примениться к каждому элементу массива
    function test8(arr, func) {
        // Запускаем цикл:
        for (let i = 0, count = arr.length; i < count; i++) {
            arr[i] = func(arr[i]); // применяем функцию к каждому элементу
        }

        return arr; // возвращаем измененный массив
    }

    let result = test8([1, 2, 3, 4], square_func);
    console.log(result);


    // Именованные функциональные выражения
    // функциональное выражение, можно и без названия функции
    test = function func24() {
        console.log('!');
        // test(); // вызываем сами себя
        // func(); // вызываем сами себя, то в консоль будет выводиться бесконечное количество
    };
    test(); // выведет '!'
    // func(); - выдаст ошибку

    // Разница в том, что имя test - это просто переменная. В процессе работы скрипта наша функция может записаться в другую переменную или предаться параметром - в этом случае связь между переменной test и функцией может пропасть.
    // Имя func же жестко привязано к функции специально для того, чтобы можно было обратиться к нашей функции внутри нее самой.
    // Такие Function Expression с именем функции называются именованными функциональными выражениями.


    // Вложенные функции
    function square(num) {
        return num ** 2;
    }

    function func25(num1, num2) {
        return square(num1) + square(num2);
    }

    console.log(func25(2, 3)); // выведет 13

    // Пусть функция square будет использоваться только в функции func26
    function func26(num1, num2) {
        function square(num) {
            return num ** 2;
        }

        return square(num1) + square(num2);
    }

    console.log(func26(2, 3)); // выведет 13
    // console.log(square(2)); - выдаст ошибку

    // Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
    function func27(num1, num2) {
        function square(num) {
            return num ** 2;
        }

        function cube(num) {
            return num ** 3;
        }

        return square(num1) + cube(num2);
    }

    console.log(func27(3, 4));


    // Область видимости вложенных функций
    // Если функция содержит внутри другую функцию - переменные внешней функции видны во внутренней
    // Также во внутренней функции будут видны переменные, определенные снаружи внешней функции
    let num1 = 21;

    function test9() {
        let num = 1; // переменная внешней функции
        function func() {
            console.log(num + ', ' + num1); // выведет 1, 21
        }

        func(); // вызываем внутреннюю функцию
    }

    test9(); // вызываем внешнюю функцию

    // Параметры
    // Параметры внешней функции также будут доступны во внутренней
    function test10(num1, num2) {
        function func() {
            console.log(num1 + num2);
        }

        func();
    }

    test10(1, 2);

    function test11(num1, num2) {
        function func() {
            console.log(num1 + num2);
        }

        num1 = 2;
        func();
    }

    test11(1, 2); // 4

    // Параметры
    // Пусть внешняя функция и внутренняя принимали параметры
    function test12(num) {
        function func(localNum) {
            localNum = 2; // меняем переменную num
            // num = 2; // меняем переменную num
            console.log(localNum); // выведет 2
            console.log(num); // выведет 1
        }

        func(num);   // передаем параметр
        console.log(num);  // выведет 1
    }

    test12(1); // передаем параметром число

    function test13(num) {
        function func(localNum) {
            localNum = 2;
            console.log(localNum);
        }

        func(num);
        // console.log(localNum); - выдаст ошибку из-за области видимости переменной
    }

    test13(1);

    // Одноименные параметры
    // внешняя и внутренняя функция имеют одноименные параметры
    function test14(num) {
        function func(num) {
            // тут нельзя получить доступ во внешней переменной num
            num = 2; // меняем локальную переменную num
            console.log(num);
        }

        func(num);
        console.log(num); // выведет 1 - ничего не поменялось
    }

    test14(1);


    // Функция, возвращающая функцию
    function func28() {
        return function () {
            return '!';
        };
    }

    result = func28(); // в переменной result будет функция
    console.log(result); // выведет 'function() {return '!';}'
    console.log(result()); // выведет '!'
    console.log(func28()()); // выведет '!'

    function func29() {
        return function () {
            return 11;
        };
    }

    function func30() {
        return function () {
            return 22;
        };
    }

    console.log(func29()()); // 11
    console.log(func29()() + func30()()); // 33

    // Любой уровень вложенности
    function func31() {
        return function () {
            return function () {
                return function () {
                    return function () {
                        return '!';
                    }
                }
            };
        };
    }

    console.log(func31()()()()()); // выведет '!'

    // Параметры
    function func32(num1) {
        return function (num2) {
            return num1 + num2;
        };
    }

    console.log(func32(11)(22)); // выведет 33

    // func(2)(3)(4), вернет сумму переданных в параметры чисел.
    function func33(num1) {
        return function (num2) {
            return function (num3) {
                return num1 + num2 + num3;
            }
        }
    }

    console.log(func33(2)(3)(4));

    // func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
    function func34(num1) {
        return function (num2) {
            return function (num3) {
                return function (num4) {
                    return function () {
                        let arr = [];
                        arr.push(num1);
                        arr.push(num2);
                        arr.push(num3);
                        arr.push(num4);

                        return arr;
                    }
                }
            }
        }
    }

    console.log(func34(2)(3)(4)(5)());


    // Лексическое окружение функций
    // Значение переменной необязательно должно быть перед определением функции, главное, чтобы оно стояло перед ее вызовом
    function func35() {
        console.log(num3);
    }

    let num3 = 1;
    func35();
    num3 = 2; // функция в этот момент узнает, что num3 = 2
    func35(); // выведет 2

    // Все внешние, доступные функции переменные, называются ее лексическим окружением (англ. LexicalEnvironment).
    // Само лексическое окружение представляет собой некий внутренний объект JavaScript, привязанный к нашей функции. {num1: 1, num2: 2}

    // let num1 = 1; // окружение {num1: 1}
    // let num2 = 2; // окружение {num1: 1, num2: 2}
    // Поменяем переменную num1:
    // num1 = 123; // окружение {num1: 123, num2: 2}
    // function func() {
    // функция знает про переменные num1 и num2
    // }

    // Когда мы пытаемся обратиться к какой-либо переменной внутри функции, эта переменная вначале ищется среди локальных переменных функции и, если такой переменной там нет, то ищется в лексическом окружении функции.


    // Практическое применение
    function test15() {
        let num = 1;  // переменная родительской функции

        return function () {
            console.log(num); // лексическое окружение = {num: 1}
        }
    }

    let func36 = test15();
    func36(); // выведет 1
    // console.log(num); // переменная num тут недоступна, num привязана к лексическому окружению функции, вызвав в любом месте кода эту функцию, мы сможем получить значение переменной num

    function test16() {
        let num1 = 1;
        let num2 = 2;

        return function () {
            return num1 + num2;
        }
    }

    let func37 = test16();
    // console.log(func37);
    console.log(func37()); // 3


    // Замыкания
    // Замыкание - это функция вместе со всеми внешними переменными, которые ей доступны. Или, другими словами, замыкание - это функция вместе со своим лексическим окружением.
    // В JavaScript чаще всего, говоря "замыкание функции", имеют в виду не саму эту функцию, а именно ее внешние переменные. Если же какая-то функция получает переменную из своего лексического окружения, то говорят "переменная берется из замыкания".

    // Счетчик на замыканиях
    // let num = 1;
    function test166() {
        let num = 1;

        return function () {
            console.log(num);
            num++; // прибавляем единицу
        }
    }

    let func38 = test166();
    func38(); // Выведет 1
    // В данном случае и можно сказать, что функция func38 получает значение переменной num из замыкания. Также можно сказать, что функция func38 хранит значение переменной num в замыкании.
    func38(); //выведет 2
    func38(); //выведет 3
    func38(); //выведет 4
    func38(); //выведет 5

    let func39 = test166();
    func39(); // выведет 1
    func39(); //выведет 2
    func39(); //выведет 3
    // одна и та же переменная num для разных функций будет иметь разное значение

    // Если переменную num вынести за функции, тем самым сделав ее глобальной, то все возвращаемые функции будут изменять эту глобальную переменную и счетчики будут работать уже зависимо друг от друга.

    // Почему же наш предыдущий код делал независимые счетчики?

    // Дело в том, что переменная num - локальная внутри функции test. Поэтому каждый вызов test порождает свою локальную переменную.

    // Поэтому возвращаемые функции будут ссылаться каждая на свою локальную переменную функции test. Именно так и достигается независимость работы.

    // Если же сделать num глобальной переменной - это тоже будет замыканием. Просто лексические окружения возвращаемых функций ссылаются на одну и ту же переменную num - любые изменения с этой переменной будут видны во всех функциях.

    function test17() {
        let counter = 10;

        return function () {
            if (counter < 0) {
                console.log('Счётчик окончен.');
                return;
            }
            console.log(counter);
            counter--;
        }
    }

    let func40 = test17();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();
    func40();


    // Нюансы

    function test18() {
        let num = 1;

        return function () {
            console.log(num);
            num++;
        };
    }

    test18()(); // выведет 1
    test18()(); // выведет 1


    function func41() {
        let num = 0;

        return function () {
            console.log(num);
            num++;
        };
    }

    let test19 = func41;
    test19()(); // выведет 0
    test19()(); // выведет 0
    test19()(); // выведет 0


    let counter = 0;

    function test20() {
        return function () {
            console.log(counter);
            counter++;
        };
    }

    // let func = test20;
    let func42 = test20();
    let func43 = test20();
    func42(); // выведет 0
    func43(); // выведет 1
    func42(); // выведет 2
    func43(); // выведет 3


    function test21() {
        let counter = 0;

        return function () {
            return function () {
                console.log(counter);
                counter++;
            };
        };
    }

    let func44 = test21();
    let func45 = func44();
    let func46 = func44();
    func45(); // выведет 0
    func46(); // выведет 1
    func45(); // выведет 2
    func46(); // выведет 3


    // Вызов функции на месте
    // Прием, который позволяет вызвать функцию прямо на месте ее объявления. Такая конструкция называется Immediately Invoked Function Expression (IIFE).
    +function () {
        console.log('!'); // выведет '!'
    }();

    !function () {
        console.log('!'); // выведет '!'
    }();

    // function() {
    //   console.log('!');
    // }(); - ошибка, потому что ждёт объявление функции (Function declaration), данная запись не является выражением функции (Function expression)


    // Замыкания и вызов функции на месте
    // Часто функцию, вызывающуюся на месте, в таком случае берут в круглые скобки, хотя в этом и нет нужды. Это делается для того, чтобы сразу было видно, что функция вызывается на месте.
    result = (function () {
        return '!';
    })();

    console.log(result); // выведет '!'

    // Пусть результатом вызванной на месте функции будет анонимная функция
    let func47 = (function () {
        return function () {
            console.log('!');
        }
    })();

    func47(); // выведет '!'

    let func48 = (function () {
        let num = 1;

        return function () {
            console.log(num);
            num++;
        }
    })();
    func48();
    func48();
    func48();
    func48();
    func48();

    let func49 = (function () {
        let counter = 1;

        return function () {
            counter = (counter > 5) ? 1 : counter;
            console.log(counter);
            counter++;
        }

    })();

    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();
    func49();


    // Сравнение с предыдущим способом
    // Как вы видите, наш новый способ проще: в переменную сразу попадает готовый счетчик, в отличие от старого способа, в котором у нас появляется дополнительная функция test. Кроме того, в старом способе можно создать несколько счетчиков.
    // В новом способе получится только один уникальный счетчик. Если вам действительно нужен только один счетчик, то удобно использовать новый способ: так вы обезопасите себя от случайного создания нескольких счетчиков.


    // Функции-коллбэки
    // Функции можно передавать параметрами в другие функции. Такие функции-параметры называются коллбэками (англ. callback).

    // функция, которая первым параметром будет принимать массив, а вторым - коллбэк, который будет применять к каждому элементу массива
    function each(arr, callback) {
        let result = [];

        for (let elem of arr) {
            result.push(callback(elem)); // вызываем функцию-коллбэк
        }

        return result;
    }

    // Наша функция each - универсальная. Это значит, что мы можем передавать в нее различные коллбэки, выполняя разные операции над массивами. При этом код нашей функции останется неизменным - будут меняться только передаваемые коллбэки.

    // возведем в квадрат каждый элемент
    result = each([1, 2, 3, 4, 5], function (num) {
        return num ** 2;
    });
    console.log(result);

    // возведем в куб каждый элемент
    result = each([1, 2, 3, 4, 5], function (num) {
        return num ** 3;
    });
    console.log(result);

    // увеличьте каждый элемент в два раза
    result = each([1, 2, 3, 4, 5], function (num) {
        return num * 2;
    });
    console.log(result);

    // переверните символы каждой строки в обратном порядке
    result = each(['абв', 'где', 'ёжз'], function (str) {
        return str.split('').reverse().join('');
    });
    console.log(result);

    // сделайте заглавным первый символ каждой строки
    result = each(['абв', 'где', 'ёжз'], function (str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    });
    console.log(result);


    // Коллбэки не обязательно должны быть анонимными функциями
    // function square(num) {
    //     return num ** 2;
    // }

    result = each([1, 2, 3, 4, 5], square);
    console.log(result);

    function cube(num) {
        return num ** 3;
    }

    result = each([1, 2, 3, 4, 5], cube);
    console.log(result);


    // Стрелочные функции
    // обычная функция
    let func50 = function (num1, num2) {
        let result = num1 * num2;
        return result;
    }

    // соответствующая ей стрелочная (обе функции делают одно и тоже)
    let func51 = (num1, num2) => {
        let result = num1 * num2;
        return result;
    }
    console.log(func51(3, 4));

    // Если в функции одна строка кода, то в стрелочных функциях можно не писать return и фигурные скобки
    // Если параметр стрелочной функции один - круглые скобки можно не писать
    let func52_cube = num => num ** 3;
    console.log(func52_cube(3));

    let func52_multiplication = (num1, num2) => num1 * num2;
    console.log(func52_multiplication(3, 5));

    // Если в функции вообще нет параметров - нужно писать пустые круглые скобки
    // let func1 = function() {
    //   console.log('!!!');
    // }

    let func53 = () => console.log('!!!');
    func53();


    // Пример применения
    // Особое преимущество стрелочные функции имеют в качестве коллбэков. Давайте посмотрим на примере, на сколько упрощается код в таком случае. Возьмем функцию filter
    result = [1, 2, 3, 4, 5].filter(function (elem) {
        if (elem % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });
    console.log(result);

    // избавимся от конструкции if и напишем условие просто через оператор ===
    result = [1, 2, 3, 4, 5].filter(function (elem) {
        return elem % 2 === 0;
    });
    console.log(result);

    // Заменим обычную функцию на стрелочную
    result = [1, 2, 3, 4, 5].filter(elem => elem % 2 === 0);
    console.log(result);

    // Упростите коллбэк через стрелочную функцию
    result = [1, 2, 3, 4, 5].every(function (elem) {
        if (elem > 0) {
            return true;
        } else {
            return false;
        }
    });
    console.log(result);
    result = [1, 2, 3, 4, 5].every(elem => elem > 0);
    console.log(result);


    result = [1, 2, 3, 4, 5].every(function (elem, index) {
        if (elem * index > 10) {
            return true;
        } else {
            return false;
        }
    });
    result = [1, 2, 3, 4, 5].every((elem, index) => elem * index > 10);
    console.log(result);

    arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    result = each(arr, function (elem, index) {
        if (elem * index > 10) {
            return true;
        } else {
            return false;
        }
    });
    result = each(arr, (elem, index) => elem * index > 10);
    console.log(result);


    // Работа с рекурсией
    // рекурсия - это функция, которая вызывает сама себя
    let i = 1;

    function func54() {
        console.log(i);
        i++;

        if (i <= 10) {
            func54(); // здесь функция вызывает сама себя
        }
    }

    func54();


    // Пример с параметром
    function func55(arr) {
        console.log(arr.shift()); // выведет смещение
        console.log(arr); // массив уменьшился

        if (arr.length > 0) {
            func55(arr);
        }
    }

    func55([1, 2, 3]);

    function func56(arr) {
        console.log(arr[0]);
        arr.shift();

        if (arr.length > 0) {
            func56(arr);
        }
    }

    func56([1, 2, 3, 4, 5]);


    // Сумма элементов массива
    function getSum(arr) {
        let sum = arr.shift();
        if (arr.length !== 0) {
            sum += getSum(arr);
        }

        return sum;
    }

    console.log(getSum([1, 2, 3]));


    // С помощью рекурсии найдите сумму квадратов элементов этого массива
    arr = [1, 2, 3, 4, 5];

    function getArraySum(arr) {
        let sum = arr.shift();
        if (arr.length > 0) {
            sum += getArraySum(arr);
        }

        return sum;
    }

    console.log(getArraySum(arr));


    // Рекурсия и многомерные структуры
    arr = [
        1,
        [
            2, 7, 8
        ],
        [
            3, 4, [5, [6, 7]],
        ]
    ];

    function getMultipleArray(arr) {
        for (let elem of arr) {
            if (Array.isArray(elem)) {
                // console.log(elem);
                getMultipleArray(elem);
            } else {
                console.log(elem);
            }

        }
    }

    getMultipleArray(arr);


    // С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
    obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

    function getMultipleObj(obj) {
        for (let key in obj) {

            if (typeof obj[key] === 'object') {
                getMultipleObj(obj[key]);
            } else {
                console.log(key + ' - ' + obj[key]);
            }

        }
    }

    getMultipleObj(obj);


    // Напишите код, который развернет наш многомерный массив в одномерный.
    arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

    function rebaseMultipleArray(arr) {
        let rebase_arr = [];

        function checkArray(arr) {

            for (let elem of arr) {

                if (Array.isArray(elem)) {
                    checkArray(elem);
                } else {
                    rebase_arr.push(elem);
                }


            }

            return rebase_arr;
        }

        return checkArray(arr);

    }

    let new_arr = rebaseMultipleArray(arr);
    console.log(new_arr); // [1, 2, 7, 8, 3, 4, 5, 6, 7]


    // Сумма элементов массива
    function funcArrSum(arr) {
        let sum = 0;

        for (let elem of arr) {
            if (Array.isArray(elem)) {
                // if (typeof elem == 'object') {
                sum += funcArrSum(elem);
            } else {
                sum += elem;
            }
        }

        return sum;
    }

    console.log(funcArrSum([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

    // С помощью рекурсии найдите сумму элементов этого объекта
    function funcObjSum(obj) {
        let sum = 0;

        for (let obj_key in obj) {

            if (typeof obj[obj_key] === 'object') {
                sum += funcObjSum(obj[obj_key]);
            } else {
                sum += obj[obj_key];
            }

        }

        return sum;
    }

    console.log(funcObjSum({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));

    // С помощью рекурсии слейте элементы этого массива в одну строку
    function funcArrSquash(arr) {
        let str = '';

        for (let arr_value of arr) {

            if (Array.isArray(arr_value)) {
                str += funcArrSquash(arr_value);
            } else {
                str += arr_value;
            }

        }

        return str;
    }

    console.log(funcArrSquash(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])); // 'abcdefgjk'


    // Манипуляции с элементами
    // запишем элементами массива в конец знак '!'

    function addExclamationMark(arr) {
        let arr_new = [];

        for (let i = 0, count = arr.length; i < count; i++) {

            if (Array.isArray(arr[i])) {
                arr_new.push(addExclamationMark(arr[i]));
            } else {
                arr_new.push(arr[i] + '!');
            }

        }

        return arr_new;

    }

    console.log(addExclamationMark([1, [2, 7, 8], [3, 4, [5, 6]]]));


    // Возведите все элементы-числа этого массива в квадрат
    arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

    function funcArrSquare(arr) {
        let arr_new = [];

        for (let arr_value of arr) {

            if (Array.isArray(arr_value)) {
                arr_new.push(funcArrSquare(arr_value));
            } else {
                arr_new.push(arr_value ** 2);
            }

        }

        return arr_new;
    }

    console.log(funcArrSquare(arr));


});
