'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event);
    console.log('Модули через замыкания');
    console.log(' ');


    // Конфликты переменных
    let str = 'file text scripts.js';
    console.log(str);


    // Модули через замыкания

    // В качестве решения конфликта переменных применяют так называемые модули.

    // Модуль - конструкция, благодаря которой, находящиеся переменные и функции видны только внутри нее и не мешали никому снаружи.

    // Самые простые модули через замыкания создаются с помощью вызова функции на месте.

    // Конструкция модуля:
    // ;(function() {
    // тут код модуля
    // })();

    // ;(function() {
    // тут код модуля

    // let str = 'переменная модуля';

    // function func() {
    //   alert('функция модуля');
    // }

    // })();


    // Практическое применение
    // По клику по первому диву его значение возводилось в квадрат, а по клику по второму диву - в куб.

    // Модуль 1
    ;(function () {

        let block_modules_via_closures_id = document.querySelector('#block_modules_via_closures1');

        function func(num) {
            return num ** 2;
        }

        block_modules_via_closures_id.addEventListener('click', function () {
            this.innerHTML = func(this.innerHTML);
        });

    })();

    // Модуль 2
    ;(function () {

        let block_modules_via_closures_id = document.querySelector('#block_modules_via_closures2');

        function func(num) {
            return num ** 3;
        }

        block_modules_via_closures_id.addEventListener('click', function () {
            this.innerHTML = func(this.innerHTML);
        });

    })();

    // Теперь в каждом из модулей мы можем использовать любые переменные и функции, не боясь того, что они будут конфликтовать с другими переменными и функциями нашего скрипта.

    // Например, оба элемента мы храним в переменной block_modules_via_closures_id - каждый в своей переменной своего модуля. Если бы модулей здесь не было, пришлось бы вводить разные переменные для хранения наши элементов. А с модулями мы можем спокойно использовать нашу переменную, не боясь того, что кто-то захочет также использовать эту переменную.


    // Передача параметров. Передача параметров в модуль через замыкания
    // Хорошей практикой считается не зашивать какие-то значения в модуль, а передавать их параметром самого модуля (то есть параметром вызывающейся на месте функции)

    // ;(function(arg1, arg2) { // параметры попадают в переменные

    // })(1, 2); // передаем какие-то параметры


    ;(function (selector1, selector2) {
        let div = document.querySelector(selector1);
        let btn = document.querySelector(selector2);

        function func(num) {
            return num ** 2;
        }

        btn.addEventListener('click', function () {
            div.textContent = func(div.textContent);
        });
    })('#block_modules_via_closures_transfer_parameter', '#btn_modules_via_closures_transfer_parameter');


    // Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.


    // ; (function (input1_id, input2_id, input3_id, submit_id, paragraph_id) {
    ;(function (inputs_class, submit_id, paragraph_id) {

        // let input1 = document.querySelector(input1_id);
        // let input2 = document.querySelector(input2_id);
        // let input3 = document.querySelector(input3_id);
        let inputs = document.querySelectorAll(inputs_class);

        let submit = document.querySelector(submit_id);
        let paragraph = document.querySelector(paragraph_id);

        function getSumInput() {
            let sum = 0;

            for (let input of inputs) {
                let input_value = +input.value;
                sum += input_value;
            }
            // let input1_value = +input1.value;
            // let input2_value = +input2.value;
            // let input3_value = +input3.value;

            // return input1_value + input2_value + input3_value;
            return sum;
        }

        submit.addEventListener('click', function () {
            paragraph.innerHTML = '' + getSumInput();
        });

    })
    (
        '.input_modules_via_closures_transfer_parameter',
        '#submit_modules_via_closures_transfer_parameter',
        '#paragraph_modules_via_closures_transfer_parameter'
    );
    //   (
    //   '#input_modules_via_closures_transfer_parameter1',
    //   '#input_modules_via_closures_transfer_parameter2',
    //   '#input_modules_via_closures_transfer_parameter3',
    //   '#submit_modules_via_closures_transfer_parameter',
    //   '#paragraph_modules_via_closures_transfer_parameter'
    // );


    // Передача родительского элемента. Передача родительского элемента в модуль через замыкания
    ;(function (parent_id) {
        let parent = document.querySelector(parent_id);

        let block_child1 = parent.querySelector('#block_modules_via_closures_transfer_child1');
        let block_child2 = parent.querySelector('#block_modules_via_closures_transfer_child2');
        let block_child3 = parent.querySelector('#block_modules_via_closures_transfer_child3');

        let block_child_res = parent.querySelector('#block_modules_via_closures_transfer_child_res');
        let btn_child = parent.querySelector('#btn_modules_via_closures_transfer_child');

        btn_child.addEventListener('click', function () {
            let num1 = +block_child1.innerHTML;
            let num2 = +block_child2.innerHTML;
            let num3 = +block_child3.innerHTML;

            block_child_res.innerHTML = String(num1 + num2 + num3);
        });

    })('#block_modules_via_closures_transfer_parent');

    // Таким образом получится, что родительский элемент мы передаем в модуль снаружи и легко можем его поменять. А дочерние элементы являются внутренним делом модуля.


    // Передача настроек модуля. Передача настроек модуля через замыкания
    // let config = {
    //   root:  '#block_modules_via_closures_transfer_parent_config',
    //   type:  'p',
    //   amount: 5
    // }

    // ;(function(config) { config.root, config.type, config.amount

    // Деструктуризация объекта с настройками
    // ;(function({root, type, amount}) {
    //   let parent = document.querySelector(root);

    //   for (let i = 1; i <= amount; i++) {
    //     let elem = document.createElement(type);
    //     elem.innerHTML = 'Параграф ' + i;
    //     parent.append(elem);
    //   }
    // })(config);


    // Параметры по умолчанию
    // Элементы объекта настроек не имеют порядка, и мы можем опускать их как угодно, поэтому можно пропустить тип.
    let new_config = {
            root: '#block_modules_via_closures_transfer_parent_config',
            amount: 10
        }

        // Деструктуризация объекта с настройками
    ;(function ({obj_new_config, type = 'p', amount = 5}) {
        let parent = document.querySelector(obj_new_config.root);

        for (let i = 1; i <= amount; i++) {
            let elem = document.createElement(type);
            elem.innerHTML = 'Новый параграф ' + i;

            parent.append(elem);
        }
    })(new_config);


    // Экспорт переменных и функций. Экспорт переменных и функций в модулях через замыкания
    ;(function () {
        let str = 'переменная модуля';
        console.log(str);

        function func() {
            console.log('функция модуля тест');
        }

        window.func = func; // экспортирование функции func с помощью записи в свойство встроенного в браузер объекта window
    })();

    window.func(); // выведет 'функция модуля'

    // необязательно вызывать функцию как свойство объекта window
    func(); // выведет 'функция модуля'
    console.log('');


    // Дан модуль. Экспортируйте наружу одну из переменных и две любые функции
    ;(function () {
        let str1 = 'переменная модуля 1';
        let str2 = 'переменная модуля 2';
        let str3 = 'переменная модуля 3';

        function func1() {
            console.log('функция модуля 1');
        }

        function func2() {
            console.log('функция модуля 2');
        }

        function func3() {
            console.log('функция модуля 3');
        }

        window.str1 = str1;
        window.str2 = str2;
        window.str3 = str3;

        window.func1 = func1;
        window.func2 = func2;
        window.func3 = func3;
    })();

    let str1 = window.str1;
    let str2 = window.str2;
    let str3 = window.str3;

    console.log(str1);
    console.log(str2);
    console.log(str3);

    console.log('');

    func1();
    func2();
    func3();

    console.log('');


    // Экспорт объекта
    // 1-ый способ
    ;(function () {
        function funcObj1() {
            console.log('функция объекта модуля 1');
        }

        function funcObj2() {
            console.log('функция объекта модуля 2');
        }

        function funcObj3() {
            console.log('функция объекта модуля 3');
        }

        // Так как имена ключей и переменных совпадают, то объект с функциями можно упросить
        // window.module = {funcObj1: funcObj1, funcObj2: funcObj2, funcObj3: funcObj3};

        window.obj_module = {funcObj1, funcObj2, funcObj3};
    })();


    let {funcObj1, funcObj2, funcObj3} = window.obj_module;

    funcObj1();
    funcObj2();
    funcObj3();

    console.log('');


    // 2-ой способ
    // ;(function() {
    //   let module = {};

    //   module.func1 = function() {
    //     alert('функция модуля');
    //   }
    //   module.func2 = function() {
    //     alert('функция модуля');
    //   }
    //   module.func3 = function() {
    //     alert('функция модуля');
    //   }

    //   window.module = module;
    // })();


    // Дан модуль. Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными
    ;(function () {

        let str1 = 'переменная модуля домашнего объекта 1';
        let str2 = 'переменная модуля домашнего объекта 2';
        let str3 = 'переменная модуля домашнего объекта 3';

        function func1() {
            console.log('функция модуля домашнего объекта 1');
        }

        function func2() {
            console.log('функция модуля домашнего объекта 2');
        }

        function func3() {
            console.log('функция модуля домашнего объекта 3');
        }

        function func4() {
            console.log('функция модуля домашнего объекта 4');
        }

        function func5() {
            console.log('функция модуля домашнего объекта 5');
        }

        window.module_home_obj = {
            home_obj_str1: str1,
            home_obj_str2: str2,
            home_obj_str3: str3,
            home_obj_func1: func1,
            home_obj_func2: func2,
            home_obj_func3: func3,
            home_obj_func4: func4,
            home_obj_func5: func5
        };

    })();

    // Деструктуризация объекта в свойстве объекта window на переменные
    let {
        home_obj_str1,
        home_obj_str2,
        home_obj_str3,
        home_obj_func1,
        home_obj_func2,
        home_obj_func3,
        home_obj_func4,
        home_obj_func5
    } = window.module_home_obj;

    console.log(home_obj_str1);
    console.log(home_obj_str2);
    console.log(home_obj_str3);

    console.log('');

    home_obj_func1();
    home_obj_func2();
    home_obj_func3();
    home_obj_func4();
    home_obj_func5();

    console.log('');


    // Библиотеки через замыкания. Сами функции хранятся в файле math.js
    console.log(math_obj); // аналогично window.math_obj
    console.log(math_obj_avg); // аналогично window.math_obj_avg

    console.log('');

    let {square, cube, digitsSum} = window.math_obj;
    let {avg1, avg2, avg3} = window.math_obj_avg;

    // console.log(square(3));
    console.log(square(3));
    console.log(cube(3));
    console.log(digitsSum(123));

    console.log('');

    console.log(avg1([3, 4, 5]));
    console.log(avg2([3, 3, 6]));
    console.log(avg3([3, 3, 6]));

    console.log('');


    // Изучите библиотеку underscore (https://underscorejs.org/). Сделайте свою аналогичную библиотеку, повторив в ней 5-10 функций оригинальной библиотеки.


});

// str = 'file text scripts.js';

// Так как переменная str есть и в файле index.html, и в файле script.js, и в файле script_test.js то будет конфликт. Победит та переменная, которая написана ниже, то есть переменная из файла script.js.

// Если нет обработчика события загрузки страницы, иначе победит переменная в файле index.html.
