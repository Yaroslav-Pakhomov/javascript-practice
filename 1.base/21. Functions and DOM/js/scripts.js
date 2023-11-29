'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event);
    console.log('Функции и DOM');
    console.log(' ');


    // Функции и DOM


    // Функции для работы с DOM элементом

    // Функция, которая первым параметром будет принимать произвольный CSS селектор, а вторым - текст элемента, и будет устанавливать этому элементу новый текст.

    function setTextBySelector(selector, text) {
        let elem = document.querySelector(selector);
        elem.textContent = text;
    }

    setTextBySelector('#paragraph_dom_elem_work1', 'text paragraph 1');
    setTextBySelector('p#paragraph_dom_elem_work2', 'text paragraph 2');


    // Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.
    function setAttrBySelector(selector, attr_name, new_value) {
        let elem = document.querySelector(selector);
        elem.setAttribute(attr_name, new_value);
    }

    setAttrBySelector('p#paragraph_dom_elem_work1', 'data-paragraph', 'new value attribute paragraph 1');
    setAttrBySelector('p#paragraph_dom_elem_work2', 'data-paragraph', 'new value attribute paragraph 2');


    // Функции для работы с группой DOM элементов
    function setTextBySelectorAll(selector, text) {
        let elems = document.querySelectorAll(selector);
        let i = 1;

        for (let elem of elems) {
            elem.innerHTML = text + ' ' + i;
            i++;
        }
    }

    setTextBySelectorAll('.paragraph_dom_elem_work_group', 'text');


    // Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

    function appendTextBySelectorAll(selector, text) {
        let elems = document.querySelectorAll(selector);
        let i = 10;

        for (let elem of elems) {
            elem.innerHTML += ' ' + text + ' ' + i;
            i += 10;
        }
    }

    appendTextBySelectorAll('.paragraph_dom_elem_work_group', 'new text');
    appendTextBySelectorAll('.paragraph_dom_elem_work_group', 'newest text');


    // Передача коллбэка для работы с DOM
    function forEach(selector, func) {
        let elems = document.querySelectorAll(selector);

        for (let elem of elems) {
            func(elem);
        }
    }


    // Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.
    forEach('.paragraph_dom_elem_work_callback', function (elem) {
        elem.innerHTML += '!';
        console.log(elem.innerHTML); // функция применится к каждому элементу
    });


    // Даны абзацы. С помощью созданной нами функции forEach содержимое каждого абзаца возведём в квадрат.
    forEach('.paragraph_dom_elem_work_callback_square', function (elem) {
        elem.innerHTML **= 2;
    });


    // Передача порядкового номера в коллбэк
    function forEachWithIndex(selector, func) {
        let elems = document.querySelectorAll(selector);

        for (let i = 0, count = elems.length; i < count; i++) {
            func(elems[i], i);
        }
    }

    forEachWithIndex('.paragraph_dom_work_callback_with_index', function (elem, index) {
        // console.log(elem);
        // console.log(index);
        elem.innerHTML += ', индекс параграфа - ' + index + '.';
    });

    // Даны абзацы. С помощью созданной нами функции forEachWithIndex для каждого абзаца добавьте ему в начало его порядковый номер.

    forEachWithIndex('.paragraph_dom_work_callback_with_index', function (elem, index) {
        elem.innerHTML = index + '. ' + elem.innerHTML;
    });


    // Передача элемента параметром функции. Передача DOM элемента параметром
    function setTextAtElem(elem, text) {
        elem.innerHTML = text;
    }

    let paragraph_parameter_dom_elem1_id = document.querySelector('#paragraph_parameter_dom_elem1');
    let paragraph_parameter_dom_elem2_id = document.querySelector('#paragraph_parameter_dom_elem2');

    setTextAtElem(paragraph_parameter_dom_elem1_id, 'Параграф 1.1 <br> <br>');
    setTextAtElem(paragraph_parameter_dom_elem2_id, 'Параграф 1.2 <br> <br>');


    // Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
    function appendTextAtElem(elem, text) {
        elem.innerHTML += text
    }

    appendTextAtElem(paragraph_parameter_dom_elem1_id, 'Содержание параграфа 1.1.  <br>');
    appendTextAtElem(paragraph_parameter_dom_elem1_id, 'Дополнение к содержанию параграфа 1.1.  <br>');
    appendTextAtElem(paragraph_parameter_dom_elem2_id, 'Содержание параграфа 1.2.  <br>');


    // Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.

    let paragraph_parameter_dom_elem_class = document.querySelectorAll('.paragraph_parameter_dom_elem');

    for (let paragraph of paragraph_parameter_dom_elem_class) {
        appendTextAtElem(paragraph, 'Добавление в цикле!');
    }


    // Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
    function setValueOnInput(input, text) {
        input.value = text;
    }

    let input_parameter_dom_elem_id = document.querySelector('#input_parameter_dom_elem');

    setValueOnInput(input_parameter_dom_elem_id, 'Текст поля');


    // Передача группы элементов параметрами. Передача группы DOM элементов параметрами функций
    function setTextAtElemsGroup(elems, text) {

        for (let elem of elems) {
            elem.innerHTML = text;
        }
    }

    let paragraph_parameter_dom_elem_group_class = document.querySelectorAll('.paragraph_parameter_dom_elem_group');

    setTextAtElemsGroup(paragraph_parameter_dom_elem_group_class, 'Группа DOM элементов параметром.');


    // Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

    function appendTextAtElemsGroup(elems, text) {

        for (let elem of elems) {
            elem.innerHTML += text;
        }
    }

    appendTextAtElemsGroup(paragraph_parameter_dom_elem_group_class, ' Содержание параграфа.');


    // Сделайте функцию appendElem. Функция первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.

    function appendElemAtUl(elem_ul, text) {
        let li = document.createElement('li');
        li.innerHTML = text;

        elem_ul.append(li);
    }

    let ul_parameter_dom_elem_group_id = document.querySelector('#ul_parameter_dom_elem_group');

    appendElemAtUl(ul_parameter_dom_elem_group_id, 'Текст');


    // Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.

    let items_for_ul = ['Новый пункт 1', 'Новый пункт 2', 'Новый пункт 3', 'Новый пункт 4', 'Новый пункт 5'];

    for (let item of items_for_ul) {
        appendElemAtUl(ul_parameter_dom_elem_group_id, item);
    }


    // Функция для создания HTML таблиц

    let table = document.createElement('table');

    // функция createTable, которая будет создавать таблицу заданного размера и добавлять ее в конец заданного элемента
    function createTable(rows, cols, parent) {

        // тут создадим таблицу с rows рядами и cols колонками
        for (let i = 1; i <= rows; i++) {
            let tr = document.createElement('tr');

            for (let j = 1; j <= cols; j++) {
                let td = document.createElement('td');
                td.innerHTML = i + '.' + j;

                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        parent.appendChild(table);
    }


    let block_add_table_append1_id = document.querySelector('#block_add_table_append1');
    let block_add_table_append2_id = document.querySelector('#block_add_table_append2');

    createTable(3, 4, block_add_table_append1_id);
    createTable(5, 6, block_add_table_append2_id);


    // Возврат таблицы из функции
    function createTableWithReturn(rows, cols) {
        // let table = document.createElement('table');

        // тут создадим таблицу с rows рядами и cols колонками
        for (let i = 1; i <= rows; i++) {
            let tr = document.createElement('tr');

            for (let j = 1; j <= cols; j++) {
                let td = document.createElement('td');
                td.innerHTML = i + '.' + j;

                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        return table;
    }

    let block_return_table_append1_id = document.querySelector('#block_return_table_append1');
    let block_return_table_append2_id = document.querySelector('#block_return_table_append2');

    let table_4_4 = createTableWithReturn(4, 4);
    let table_6_7 = createTableWithReturn(4, 7);

    block_return_table_append1_id.appendChild(table_4_4);
    block_return_table_append2_id.appendChild(table_6_7);


    // Функция для создания таблицы из массива
    function createTableByArrWithReturn(arr) {
        let table = document.createElement('table');

        for (let row of arr) {
            let tr = document.createElement('tr');

            for (let col of row) {
                let td = document.createElement('td');
                td.innerHTML = col;

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        return table;
    }

    let block_arr_table_append1_id = document.querySelector('#block_arr_table_append1');

    let arr_table = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    let create_arr_table = createTableByArrWithReturn(arr_table);

    block_arr_table_append1_id.appendChild(create_arr_table);


});
