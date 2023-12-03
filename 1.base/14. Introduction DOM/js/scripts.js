'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // alert('JS');

    // Получение DOM элемента
    let input_button = document.querySelector('#button');
    console.log(input_button);


    // Сложные селекторы DOM элемента
    // Получит только 1-ый элемент:
    let elem = document.querySelector('#parent input.elem');
    console.log(elem); // здесь будет первый инпут


    // Привязывание обработчиков к элементам
    input_button.addEventListener('click', function () {
        console.log('!!!');
    });


    // Именованные обработчики событий
    input_button.addEventListener('click', func);

    function func() {
        console.log('function !!!');
    }


    // Один обработчик ко многим элементам
    let button1 = document.querySelector('#button1');
    let button2 = document.querySelector('#button2');

    button1.addEventListener('click', func);
    button2.addEventListener('click', func);


    // Несколько обработчиков одного события
    input_button.addEventListener('click', func1);
    input_button.addEventListener('click', func2);

    function func1() {
        console.log('1');
    }

    function func2() {
        console.log('2');
    }


    // Обработчики разных событий
    input_button.addEventListener('mouseover', function () {
        console.log('mouseover 1');
    });
    input_button.addEventListener('mouseout', function () {
        console.log('mouseout 2');
    });


    // Работа с текстом элементов
    let p_elem = document.querySelector('p#p_elem');
    console.log(p_elem.textContent);
    p_elem.textContent = '!!!';
    console.log(p_elem.textContent);


    // Работа с HTML кодом элементов
    let p_html_elem = document.querySelector('p#p_html_elem');

    console.log(p_html_elem.innerHTML); // выведет <b>text</b>
    p_html_elem.innerHTML = '<i>!!!</i>';
    console.log(p_html_elem.innerHTML); // выведет <i>!!!</i>


    // Атрибуты тегов как свойства
    let input_elem = document.querySelector('#input_elem');
    console.log(input_elem.id);   // выведет 'input_elem'
    console.log(input_elem.type); // выведет 'text'
    // поменяем значение атрибута:
    input_elem.type = 'submit';


    // Работа с текстовыми полями
    let text_elem = document.querySelector('#text_elem');
    console.log(text_elem.value);
    text_elem.value = 'new text';
    console.log(text_elem.value);


    // Фокус текстовых полей
    // 'blur' - потеря фокуса
    text_elem.addEventListener('focus', function () {
        console.log(text_elem.value);
    });


    // Исключения при работе с атрибутами
    let class_elem = document.querySelector('#class_elem');
    console.log(class_elem.classList); // ['aaa', 'bbb', value: 'aaa bbb']
    // значение атрибута class для нашего инпута:
    console.log(class_elem.className); // aaa bbb

    // Существуют и другие исключения, например, атрибут for. К нему следует обращаться через htmlFor.


    // Цепочки методов и свойств
    let text_elem_value = document.querySelector('#text_elem').value;
    let text_elem_id = document.querySelector('#text_elem').id;
    console.log(text_elem_value);
    console.log(text_elem_id);
    // образом - цепочкой - можно производить и перезапись атрибутов:
    document.querySelector('#text_elem').value = 'www';
    console.log(document.querySelector('#text_elem').value);


    // Преимущества и недостатки цепочек
    // Несмотря на то, что цепочки сокращают код, в большинстве случаев введение переменной все-таки удобнее. Сравните два примера - сейчас я ввел переменную elem и могу записывать любое количество атрибутов, при этом querySelector вызывается только один раз:
    text_elem = document.querySelector('#text_elem');
    text_elem.value = 'www';
    text_elem.type = 'submit';

    // Не вводя новую переменную и поэтому мне приходится вызывать querySelector два раза:
    document.querySelector('#text_elem').value = 'www';
    document.querySelector('#text_elem').type = 'submit';


    // Объект this
    let this_text_elem = document.querySelector('#this_text_elem');
    this_text_elem.addEventListener('blur', func3);

    function func3() {
        console.log(this);
        this.value = 'text !!!!!!!!!';
    }


    // Преимущество this
    this_text_elem.addEventListener('click', func4);

    function func4() {
        console.log(this === this_text_elem);
    }

    // Проявляется, когда у нас несколько элементов, и к каждому привязана одна и та же функция.
    let this_button1 = document.querySelector('#this_button1');
    let this_button2 = document.querySelector('#this_button2');
    let this_button3 = document.querySelector('#this_button3');

    this_button1.addEventListener('click', func5);
    this_button2.addEventListener('click', func5);
    this_button3.addEventListener('click', func5);

    function func5() {
        console.log(this.value);
    }


    // Получение группы элементов
    let elems = document.querySelectorAll('.www');

    for (let elem of elems) {
        elem.textContent = elem.textContent + '!';
    }


    // Добавление обработчиков в цикле
    for (let elem of elems) {
        elem.addEventListener('click', func6);
    }

    function func6() {
        console.log('!');
        this.innerHTML += '!';
    }


    // Анонимные обработчики в цикле
    for (let elem of elems) {
        elem.addEventListener('click', function () {
            console.log(this.textContent);
        });
    }


    // Отвязывание событий
    let remove_event_button = document.querySelector('#remove_event_button');
    remove_event_button.addEventListener('click', func7);

    function func7() {
        this.value += ' !';
        this.removeEventListener('click', func7); // отвязывание событий
    }

    // Отвязывание обработчиков событий в цикле
    let remove_event_cycle_all = document.querySelectorAll('.remove_event_cycle');

    for (let elem of remove_event_cycle_all) {
        elem.addEventListener('click', func8);
    }

    function func8() {
        this.innerHTML += ' !';
        this.removeEventListener('click', func8); // отвязываем обработчик
    }


    // Отвязывание анонимных функций
    for (let elem of remove_event_cycle_all) {
        elem.addEventListener('click', function func() { // дали имя функции
            console.log(this.textContent);
            this.removeEventListener('click', func); // отвязываем функцию
        });
    }
});
