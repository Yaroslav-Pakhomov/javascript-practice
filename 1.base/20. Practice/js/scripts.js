'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event);
    console.log('Практика ');
    console.log(' ');


    // Практика


    // Создание элементов из массива
    let parent_arr_create_elem_id = document.querySelector('#parent_arr_create_elem');

    let arr = [1, 2, 3, 4, 5];

    // По клику на абзац к его содержимому прибавлялась единица
    for (let number of arr) {
        let p = document.createElement('p');
        // p.innerHTML = 'Параграф ' + number;
        p.innerHTML = String(number);

        // Навешивание обработчика событий
        p.addEventListener('click', function () {
            p.innerHTML++;
        });

        parent_arr_create_elem_id.append(p);
    }


    // Практика на создание списков ul

    let create_ul_list_id = document.querySelector('#create_ul_list');

    arr = [1, 2, 3, 4, 5, 6, 7];

    for (let number of arr) {
        let symbol_li = ' !';

        let li = document.createElement('li');
        // Содержимое
        li.innerHTML = 'Пункт ' + number;
        // Класс
        li.classList.add('item_' + number);
        // Пользовательский атрибут
        li.setAttribute('data-value', String(number));

        // по клику на li ей в конец добавлялся символ только один раз
        li.addEventListener('click', function addSymbolExclamation() {
            console.log(symbol_li);
            this.innerHTML += symbol_li;

            // Символ добавился 1 раз, т.к. мы сразу удаляем привязанный обработчик событий
            this.removeEventListener('click', addSymbolExclamation);
        });

        create_ul_list_id.append(li);
    }


    // Создание таблиц. Создание HTML таблиц
    let block_create_html_table_id = document.querySelector('#block_create_html_table');

    let input_create_html_table_rows_id = document.querySelector('#input_create_html_table_rows');
    let input_create_html_table_cols_id = document.querySelector('#input_create_html_table_cols');

    let input_create_html_table_submit_id = document.querySelector('#input_create_html_table_submit');

    let input_delete_html_table_submit_id = document.querySelector('#input_delete_html_table_submit');

    // Создание таблицы
    input_create_html_table_submit_id.addEventListener('click', function () {
        let rows = +input_create_html_table_rows_id.value;
        let cols = +input_create_html_table_cols_id.value;
        createHtmlTable(rows, cols);
    });

    // Удаление таблицы
    input_delete_html_table_submit_id.addEventListener('click', function () {
        let table = block_create_html_table_id.querySelector('.create_html_table');
        table.remove();
    });

    // Функция для создания таблицы
    // rows - колонки
    // cols - столбцы
    function createHtmlTable(rows, cols) {

        let table = document.createElement('table');
        table.classList.add('create_html_table');
        // let rows = 5; // колонки
        // let cols = 10; // столбцы

        for (let i = 1; i <= rows; i++) {
            let tr = document.createElement('tr');

            for (let j = 1; j <= cols; j++) {
                let td = document.createElement('td');
                td.innerHTML = '№ ' + i + '.' + j;

                tr.append(td);
            }

            table.append(tr);
        }

        block_create_html_table_id.append(table);
    }


    // Последовательное заполнение HTML таблиц

    let block_serial_fill_html_table_id = document.querySelector('#block_serial_fill_html_table');

    let table = document.createElement('table');
    table.classList.add('serial_fill_html_table');

    let rows = 5; // колонки
    let cols = 5; // столбцы

    for (let i = 0, k = 2; i < rows; i++) {  // k = 1;
        let tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.innerHTML = String(k);
            // k++;
            k += 2;

            tr.append(td);
        }

        table.append(tr);
    }

    block_serial_fill_html_table_id.append(table);


    // Создание HTML таблицы из массива

    let block_create_html_table_by_arr_id = document.querySelector('#block_create_html_table_by_arr');
    arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

    table = document.createElement('table');
    table.classList.add('serial_html_table_by_arr');

    for (let rows of arr) {
        let tr = document.createElement('tr');

        for (let col of rows) {
            let td = document.createElement('td');
            td.innerHTML = String(col);

            tr.append(td);
        }

        table.append(tr);
    }

    block_create_html_table_by_arr_id.append(table);

    let br = document.createElement('br');
    let br1 = document.createElement('br');
    block_create_html_table_by_arr_id.append(br);
    block_create_html_table_by_arr_id.append(br1);


    // Выведите элементы приведенного массива в виде HTML таблицы table, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
    arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

    table = document.createElement('table');
    table.classList.add('serial_html_table_by_arr');

    for (let rows of arr) {
        let tr = document.createElement('tr');

        for (let col of rows) {
            let td = document.createElement('td');
            td.innerHTML = String(col ** 2);

            tr.append(td);
        }

        table.append(tr);
    }

    block_create_html_table_by_arr_id.append(table);


    // Добавление рядов и колонок
    let block_add_rows_cols_html_table_id = document.querySelector('#block_add_rows_cols_html_table');


    // Добавление рядов
    // Нужно создать tr, а затем запустить цикл, который добавит нужное количество ячеек в этот ряд (пусть 3)

    // Создаём тег table с классом 'add_rows_html_table'
    table = document.createElement('table');
    table.classList.add('add_rows_html_table');

    // Вставляем в конец блока '#block_add_rows_cols_html_table'
    block_add_rows_cols_html_table_id.append(table);

    addRowsHtmlTable();

    // кнопка, по нажатию на которую в таблицу будет добавляться новый ряд
    let submit_add_rows_html_table_id = document.querySelector('#submit_add_rows_html_table');
    submit_add_rows_html_table_id.addEventListener('click', function () {
        addRowsHtmlTable();
    });

    // Функция добавляет новый ряд в таблицу
    function addRowsHtmlTable() {
        let table = document.querySelector('.add_rows_html_table');

        // Получаем строку одну
        let row_table = table.querySelector('tr') ? table.querySelector('tr') : 0;
        // Получаем ячейки строки
        let cols_table = row_table ? row_table.querySelectorAll('td') : 0;

        // Кол-во ячеек, которое нужно вставить в строку (по умолчанию 3)
        let cols = cols_table ? cols_table.length : 3;
        let tr = document.createElement('tr');

        for (let i = 0; i < cols; i++) {
            let td = document.createElement('td');
            td.innerHTML = 'АК-47';

            tr.append(td);
        }

        table.append(tr);
    }


    // Добавление колонок
    // Нужно запустить цикл, который переберет все ряды таблицы и в каждый ряд добавит новую ячейку

    let submit_add_cols_html_table_id = document.querySelector('#submit_add_cols_html_table');
    submit_add_cols_html_table_id.addEventListener('click', function () {
        addColsHtmlTable();
    });

    // Функция добавляет новый столбец в таблицу
    function addColsHtmlTable() {
        let table = document.querySelector('.add_rows_html_table');

        let trs = table.querySelectorAll('tr');

        for (let tr of trs) {
            let td = document.createElement('td');
            td.innerHTML = 'АК-74';

            tr.append(td);
        }
    }


    // Добавление строк и колонок
    let submit_add_rows_cols_html_table_id = document.querySelector('#submit_add_rows_cols_html_table');
    submit_add_rows_cols_html_table_id.addEventListener('click', function () {
        addRowsHtmlTable();
        addColsHtmlTable();
    });


    // Изменение ячеек HTML таблицы
    let block_change_cells_html_table_id = document.querySelector('#block_change_cells_html_table');

    table = document.createElement('table');
    table.classList.add('change_cells_html_table');

    rows = 3;
    cols = 3;

    for (let i = 0, k = 1; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.innerHTML = String(k);
            k++;

            tr.append(td);
        }

        table.append(tr);
    }

    block_change_cells_html_table_id.append(table);

    // Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.

    let submit_increase_cells_twice_html_table_id = document.querySelector('#submit_increase_cells_twice_html_table');

    submit_increase_cells_twice_html_table_id.addEventListener('click', function () {
        let table = document.querySelector('.change_cells_html_table');
        let tds = table.querySelectorAll('td');

        for (let td of tds) {
            let number = (+td.innerHTML);
            td.innerHTML = String(number * 2);
        }

    });


    // Удаление новых элементов. Самоудаление новых элементов

    let block_parent_self_removal_new_elem_id = document.querySelector('#block_parent_self_removal_new_elem');

    // В цикле создадим 9 новых абзацев, при этом сделаем так, чтобы любой абзац удалялся по клику на нем
    for (let i = 1; i <= 9; i++) {
        let p = document.createElement('p');
        p.innerHTML = 'Параграф ' + i;

        p.addEventListener('click', function () {
            this.remove();
        });

        block_parent_self_removal_new_elem_id.append(p);
    }


    // Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.

    let ul_parent_self_removal_new_elem_id = document.querySelector('#ul_parent_self_removal_new_elem');
    let button_self_removal_new_elem_id = document.querySelector('#button_self_removal_new_elem');

    // Навешиваем обработчик событий на существующие эл-ты
    let default_items = ul_parent_self_removal_new_elem_id.children;
    for (let item of default_items) {
        item.addEventListener('click', function () {
            this.remove();
        });
    }

    // Создаём новый пункт по нажатию и навешиваем обработчик событий на удаление по клику
    button_self_removal_new_elem_id.addEventListener('click', function () {
        let ul_last_child = ul_parent_self_removal_new_elem_id.lastElementChild;

        let content_li = ul_last_child.innerHTML;
        content_li++;

        let li = document.createElement('li');
        li.innerHTML = content_li;

        li.addEventListener('click', function () {
            this.remove();
        });

        ul_parent_self_removal_new_elem_id.append(li);
    });


    // Ссылка на удаление элемента
    // Пусть у нас абзац. Давайте рядом с ним сделаем ссылку, с помощью которой этот абзац можно будет удалить.
    let block_parent_link_for_remove_elem_id = document.querySelector('#block_parent_link_for_remove_elem');
    let paragraph_for_remove_id = block_parent_link_for_remove_elem_id.querySelector('#paragraph_for_remove');
    let link_remove_paragraph_id = block_parent_link_for_remove_elem_id.querySelector('#link_remove_paragraph');

    link_remove_paragraph_id.addEventListener('click', function (event) {
        event.preventDefault(); // отменяем переход по ссылке
        paragraph_for_remove_id.remove();
    });


    // Создание ссылок для удаления элементов
    let block_parent_create_link_for_remove_elem_id = document.querySelector('#block_parent_create_link_for_remove_elem');

    let paragraph_create_link_for_remove_class = block_parent_create_link_for_remove_elem_id.querySelectorAll('.paragraph_create_link_for_remove');

    for (let paragraph of paragraph_create_link_for_remove_class) {
        // Ссылка на удаление параграфа
        let remove_link = document.createElement('a');

        // Класс ссылки
        remove_link.classList.add('create_link_for_remove');

        // Адрес ссылки
        remove_link.href = '';

        // Текст ссылки
        remove_link.innerHTML = 'Удалить параграф';

        // Обработчик события клика ссылки
        remove_link.addEventListener('click', function (event) {
            event.preventDefault();

            remove_link.remove();
            paragraph.remove();
        });

        paragraph.append(remove_link);
    }


    // Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
    let ul_parent_create_link_for_remove_elem_id = document.querySelector('#ul_parent_create_link_for_remove_elem');
    let items_link_for_remove_elem = ul_parent_create_link_for_remove_elem_id.querySelectorAll('li');

    for (let item of items_link_for_remove_elem) {
        // Ссылка на удаление пункта
        let link_for_remove_elem = document.createElement('a');

        // Класс ссылки
        link_for_remove_elem.classList.add('link_remove_elem');

        // Адрес ссылки
        link_for_remove_elem.href = '';

        // Текст ссылки
        link_for_remove_elem.innerHTML = 'Удалить пункт';

        // Обработчик события клика ссылки
        link_for_remove_elem.addEventListener('click', function (event) {
            event.preventDefault();

            // Удаления пункта и ссылки
            item.remove();
            link_for_remove_elem.remove();
        });

        item.append(link_for_remove_elem);
    }


    // Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.

    let table_parent_create_link_for_remove_elem_id = document.querySelector('#table_parent_create_link_for_remove_elem');

    let trs = table_parent_create_link_for_remove_elem_id.querySelectorAll('tr');


    for (let tr of trs) {
        // Создание ячейки для удаления
        let td = document.createElement('td');

        // Ссылка на удаление ряда
        let link_remove_row = document.createElement('a');

        // Класс ссылки
        link_remove_row.classList.add('link_remove_row');

        // Адрес ссылки
        link_remove_row.href = '';

        // Текст ссылки
        link_remove_row.innerHTML = 'Удалить ряд';

        link_remove_row.addEventListener('click', function (event) {
            event.preventDefault();

            tr.remove();
            link_remove_row.remove();
        });

        td.append(link_remove_row);

        tr.append(td);
    }


    // Редактирование отдельного элемента
    let block_parent_edit_single_elem_id = document.querySelector('#block_parent_edit_single_elem');
    let paragraph_edit_single_elem = block_parent_edit_single_elem_id.querySelector('p');
    // let input_edit_single_elem = block_parent_edit_single_elem_id.querySelector('input[type="text"]');

    // // записываем в инпут текст абзаца при загрузке страницы
    // input_edit_single_elem.value = paragraph_edit_single_elem.innerHTML;

    // // текст абзаца менялся не по потери фокуса (blur), а по мере ввода текста в инпут.
    // input_edit_single_elem.addEventListener('input', function () {
    //   paragraph_edit_single_elem.innerHTML = this.value;
    // });


    // Появление инпута
    // сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац.
    paragraph_edit_single_elem.addEventListener('click', function () {

        // Создание инпута
        let input_edit_single_elem = document.createElement('input');
        // Тип инпута
        input_edit_single_elem.type = 'text';
        // записываем в инпут текст абзаца при его загрузке
        input_edit_single_elem.value = paragraph_edit_single_elem.innerHTML;

        // текст абзаца меняется не по потери фокуса (blur), а по мере ввода текста (input) в инпут.
        input_edit_single_elem.addEventListener('input', function () {
            paragraph_edit_single_elem.innerHTML = this.value;
        });

        // удалим инпут после потери фокуса (blur)
        input_edit_single_elem.addEventListener('blur', function () {
            this.remove();
        });

        // Вставка инпута после параграфа
        this.insertAdjacentElement('afterend', input_edit_single_elem);

        // Установка фокуса инпута
        input_edit_single_elem.focus();
    });


    // Прячем текст при редактировании элемента
    let block_parent_hide_edit_single_elem_id = document.querySelector('#block_parent_hide_edit_single_elem');
    let paragraph_hide_edit_single_elem = block_parent_hide_edit_single_elem_id.querySelector('p');

    paragraph_hide_edit_single_elem.addEventListener('click', function () {
        let thisParagraph = this;
        hideEditSingleElem(thisParagraph);
    });

    function hideEditSingleElem(thisParagraph) {
        // let thisParagraph = this;

        // Создание инпута
        // let textarea_hide_edit_single_elem = document.createElement('input');
        let textarea_hide_edit_single_elem = document.createElement('textarea');

        // Размеры окна инпута
        textarea_hide_edit_single_elem.cols = 50;
        textarea_hide_edit_single_elem.rows = 10;

        // Тип инпута
        // input_hide_edit_single_elem.type = 'text';

        // Класс инпута
        textarea_hide_edit_single_elem.classList.add('hide_edit_single_elem');

        // Текст инпута, сначала записываем текст абзаца в инпут
        textarea_hide_edit_single_elem.value = thisParagraph.innerHTML;

        // удалим инпут после потери фокуса (blur)
        // при потери фокуса в инпуте текст этого инпута записывается в абзац
        textarea_hide_edit_single_elem.addEventListener('blur', function () {
            let thisInput = this;

            // текст инпута записывается в абзац
            thisParagraph.innerHTML = thisInput.value;

            textarea_hide_edit_single_elem.addEventListener('click', function (event) {
                event.preventDefault();
            });

            // повесим событие обратно
            thisParagraph.addEventListener('click', hideEditSingleElem);

            // удаляем инпут
            thisInput.remove();
        });

        // затем убираем текст абзаца
        thisParagraph.innerHTML = '';

        // Вставка инпута в параграф
        thisParagraph.append(textarea_hide_edit_single_elem);

        // Установка фокуса инпута
        textarea_hide_edit_single_elem.focus();

        // отвяжем событие, клики, сделанные после появления инпута, будут проигнорированы
        thisParagraph.removeEventListener('click', hideEditSingleElem);
    }


    // Редактирование в группе элементов
    function hideEditInputSingleElem(thisParagraph) {
        // let thisParagraph = this;

        // Создание инпута
        // let textarea_hide_edit_single_elem = document.createElement('input');
        let input_hide_edit_single_elem = document.createElement('input');

        // Размеры окна инпута
        input_hide_edit_single_elem.type = 'text';

        // Тип инпута
        // input_hide_edit_single_elem.type = 'text';

        // Класс инпута
        input_hide_edit_single_elem.classList.add('hide_edit_single_elem');

        // Текст инпута, сначала записываем текст абзаца в инпут
        input_hide_edit_single_elem.value = thisParagraph.innerHTML;

        // удалим инпут после потери фокуса (blur)
        // при потери фокуса в инпуте текст этого инпута записывается в абзац
        input_hide_edit_single_elem.addEventListener('blur', function () {
            let thisInput = this;

            // текст инпута записывается в абзац
            thisParagraph.innerHTML = thisInput.value;

            input_hide_edit_single_elem.addEventListener('click', function (event) {
                event.preventDefault();
            });

            // повесим событие обратно
            thisParagraph.addEventListener('click', hideEditSingleElem);

            // удаляем инпут
            thisInput.remove();
        });

        // затем убираем текст абзаца
        thisParagraph.innerHTML = '';

        // Вставка инпута в параграф
        thisParagraph.append(input_hide_edit_single_elem);

        // Установка фокуса инпута
        input_hide_edit_single_elem.focus();

        // отвяжем событие, клики, сделанные после появления инпута, будут проигнорированы
        thisParagraph.removeEventListener('click', hideEditSingleElem);
    }

    // elements_group_edit
    let block_elements_group_edit_id = document.querySelector('#block_elements_group_edit');
    let tag_p_elems = block_elements_group_edit_id.querySelectorAll('p');

    for (let elem of tag_p_elems) {
        elem.addEventListener('click', function () {
            let this_ref = this;
            hideEditSingleElem(this_ref);
        });
    }


    // Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет отредактировать текст этой li.

    let ul_elements_group_edit_id = document.querySelector('#ul_elements_group_edit');
    let tag_li_elems = ul_elements_group_edit_id.children;

    // console.log(tag_li_elems);

    for (let elem of tag_li_elems) {
        elem.addEventListener('click', function () {
            let this_ref = this;
            hideEditInputSingleElem(this_ref);
        });
    }


    // Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.

    let table_elements_group_edit_id = document.querySelector('#table_elements_group_edit');
    let tag_td_elems = table_elements_group_edit_id.querySelectorAll('td');

    // console.log(tag_td_elems);

    for (let elem of tag_td_elems) {
        elem.addEventListener('click', function () {
            let this_ref = this;
            hideEditInputSingleElem(this_ref);
        });
    }


    // Удаление и редактирование. Одновременное редактирование и удаление элементов
    // Сделайте ссылку на удаление и редактирование текста в параграфе.
    let block_edit_delete_elems_simultaneous_id = document.querySelector('#block_edit_delete_elems_simultaneous');

    tag_p_elems = block_edit_delete_elems_simultaneous_id.querySelectorAll('p');

    for (let tag_p_elem of tag_p_elems) {
        let tag_span_elem = tag_p_elem.querySelector('span');
        let tag_a_elem = tag_p_elem.querySelector('a');

        tag_a_elem.addEventListener('click', function (event) {
            event.preventDefault();
            tag_p_elem.remove();
        });

        tag_span_elem.addEventListener('click', function () {
            let this_ref = this;
            hideEditInputSingleElem(this_ref);
        });

    }


    // Стилизация элементов
    // Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).
    // Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
    let block_stylization_elems_id = document.querySelector('#block_stylization_elems');

    tag_p_elems = block_stylization_elems_id.querySelectorAll('p');

    for (let tag_p_elem of tag_p_elems) {
        let tag_span_elem = tag_p_elem.querySelector('span');
        let tag_a_elem = tag_p_elem.querySelector('a');

        tag_a_elem.addEventListener('click', function (event) {
            let this_a_ref = this;
            event.preventDefault();
            tag_span_elem.classList.add('line-through');

            this_a_ref.remove();
        });
    }


    // Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
    // Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.

    let table_stylization_elems_id = document.querySelector('#table_stylization_elems');

    let table_trs = table_stylization_elems_id.querySelectorAll('tr');

    for (let table_tr of table_trs) {
        // Новая ячейка
        let td = document.createElement('td');

        // Ссылка
        let a = document.createElement('a');
        a.href = '';
        a.innerHTML = 'Сделать зелёным';

        // Обработчик клика
        a.addEventListener('click', function (event) {
            // Отмена действия по умолчанию
            event.preventDefault();

            // Переключатель цвета
            table_tr.classList.toggle('tr-color');
        });

        // Добавление ссылки в ячейку
        td.append(a);
        // Добавление ячейки в строку
        table_tr.append(td);
    }


    // Кнопки для скрытия и показа элемента
    let show_hide_elem_id = document.querySelector('#show_hide_elem');
    let submit_show_elem_id = document.querySelector('#submit_show_elem');
    let submit_hide_elem_id = document.querySelector('#submit_hide_elem');
    let submit_show_hide_elem_id = document.querySelector('#submit_show_hide_elem');

    submit_show_elem_id.addEventListener('click', function (event) {
        // Отмена действия по умолчанию
        event.preventDefault();

        show_hide_elem_id.classList.remove('hidden');
    });

    submit_hide_elem_id.addEventListener('click', function (event) {
        // Отмена действия по умолчанию
        event.preventDefault();

        show_hide_elem_id.classList.add('hidden');
    });

    // Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.
    submit_show_hide_elem_id.addEventListener('click', function (event) {
        // Отмена действия по умолчанию
        event.preventDefault();

        show_hide_elem_id.classList.toggle('hidden');
    });


    // Много элементов с кнопками показа

    // Первый способ
    // По клику на любую кнопку мы будем читать содержимое ее атрибута data-elem и искать абзац с таким id. Его и будем тоглить.

    // let button_show_hide_elem_class = document.querySelectorAll('.button_show_hide_elem');

    // for (let button of button_show_hide_elem_class) {

    //   button.addEventListener('click', function () {
    //     // Получаем атрибут кнопки data-elem
    //     let data_elem = button.getAttribute('data-elem');
    //     // Второй способ получить пользовательский атрибут - button.dataset.elem

    //     // Получаем параграф по ID
    //     let paragraph_show_hide = document.querySelector('#' + data_elem);

    //     // Скрытия/показа параграфа
    //     paragraph_show_hide.classList.toggle('hidden');

    //   });

    // }


    // Второй способ
    // Сделаем так, чтобы связь была по порядковому номеру: пусть первая кнопка скрывает первый абзац, вторая кнопка - второй и так далее

    // let button_show_hide_elem_second_class = document.querySelectorAll('.button_show_hide_elem_second');
    // let paragraph_show_hide_second_class = document.querySelectorAll('.paragraph_show_hide_second');

    // for (let i = 0, count = button_show_hide_elem_second_class.length; i < count; i++) {

    //   button_show_hide_elem_second_class[i].addEventListener('click', function () {

    //     // Скрытия/показа параграфа
    //     paragraph_show_hide_second_class[i].classList.toggle('hidden');

    //   });

    // }


    // Третий способ
    // Абзац, связанный с кнопкой, является ее соседом справа (nextElementSibling). Можно это использовать в качестве связи
    let button_show_hide_elem_third_class = document.querySelectorAll('.button_show_hide_elem_third');

    for (let button of button_show_hide_elem_third_class) {

        button.addEventListener('click', function () {

            // 2 раза .nextElementSibling, т.к. первый элемент после кнопки br
            let paragraph = button.nextElementSibling.nextElementSibling;

            paragraph.classList.toggle('hidden');

        });
    }


    // Активация элементов

    let table_activation_elems_id = document.querySelector('#table_activation_elems');
    let table_activation_tds = table_activation_elems_id.querySelectorAll('td');

    for (let activation_td of table_activation_tds) {

        activation_td.addEventListener('click', function () {
            let this_td = this;
            this_td.classList.toggle('bg-active');
        });
    }


    // Дан HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
    // Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
    let ul_activation_elems_id = document.querySelector('#ul_activation_elems');
    let tag_li_activation_elems = ul_activation_elems_id.children;

    for (let li_activation of tag_li_activation_elems) {

        li_activation.addEventListener('click', function () {
            let this_li = this;
            this_li.classList.toggle('bg-active');
        });
    }


    // Чередование стилей активации

    let table_activation_alternation_elems_id = document.querySelector('#table_activation_alternation_elems');
    let table_activation_alternation_tds = table_activation_alternation_elems_id.querySelectorAll('td');

    for (let activation_alternation_td of table_activation_alternation_tds) {

        let color = '';
        activation_alternation_td.addEventListener('click', function () {
            let this_li = this;

            // Последовательность class = bg-color1->bg-color2->''
            color = (color === 'bg-color1') ? 'bg-color2' : ((color === 'bg-color2') ? '' : 'bg-color1');

            this_li.setAttribute('class', color);

        });
    }


    // Чередование многих цветов из массива
    let table_many_activation_elems_id = document.querySelector('#table_many_activation_elems');
    let table_many_activation_tds = table_many_activation_elems_id.querySelectorAll('td');

    let colors = ['bg-color1', 'bg-color2', 'bg-color3', ''];
    let i_color = 0;

    for (let many_activation_td of table_many_activation_tds) {

        many_activation_td.addEventListener('click', function () {
            let this_li = this;

            this_li.setAttribute('class', colors[i_color]);

            i_color++;
            if (i_color === colors.length) {
                i_color = 0;
            }

        });
    }


    // Практика на изменение элементов


    // Дан массив. Выведите его элементы в виде списка ul.

    // Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет отредактировать.

    // Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

    // Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

    // Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.

    let workers = ['Работник 1', 'Работник 2', 'Работник 3', 'Работник 4', 'Работник 5'];

    let ul_workers_elems_id = document.querySelector('#ul_workers_elems');

    // Функция для обработчика события клика по пункту для появления инпута, с помощью которого редактируем пункт
    function clickFuncLi(elem, li) {
        let this_li = elem;
        // Создаём инпут
        let input = document.createElement('input');
        // Заполняем инпут
        input.value = this_li.innerHTML;

        // Обработчик события интпута при потере фокуса
        input.addEventListener('blur', function () {
            let this_input = this;
            // Записываем значение инпута в текущий пункт
            this_li.innerHTML = this_input.value;

            // Добавляем обработчик события клика по пункту
            this_li.addEventListener('click', clickFuncLi);

            // Удаляем сам инпут
            this_input.remove();
        });

        // Убираем содержимое пункта
        this_li.innerHTML = '';

        // Для добавления инпута 1 раз
        li.removeEventListener('click', clickFuncLi);

        // Вставляем инпут в пункт
        li.append(input);

        // Фокус в инпуте
        input.focus();
    }

    // Функция для обработчика события клика по кнопке (ссылке) удаления пункта (li)
    function clickFuncDeleteLi(li, parent = false) {
        let tag_a = document.createElement('a');
        tag_a.href = '';
        tag_a.innerHTML = ' Удалить ';

        tag_a.addEventListener('click', function (event) {
            event.preventDefault();

            if (parent === true) {
                li.parentElement.remove();
            }
            li.remove();
        });

        li.append(tag_a);
    }

    // Функция для обработчика события клика по кнопке (ссылке) перечёркивания пункта (li)
    function clickFuncCrossOutLi(li) {
        let tag_a = document.createElement('a');
        tag_a.href = '';
        tag_a.innerHTML = ' Перечеркнуть ';

        tag_a.addEventListener('click', function (event) {
            event.preventDefault();
            let tag_span = li.querySelector('span');

            tag_span.classList.toggle('line-through');
        });

        li.append(tag_a);
    }

    for (let worker of workers) {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = worker;

        // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
        span.addEventListener('click', function () {
            let this_span = this;
            clickFuncLi(this_span, li);
        });

        li.append(span);

        // Добавляем кнопку (ссылку) перечёркивания пункта (li)
        clickFuncCrossOutLi(li);

        // Добавляем кнопку (ссылку) удаления пункта (li)
        clickFuncDeleteLi(li);

        ul_workers_elems_id.append(li);
    }


    // Добавление работников
    let add_workers_elems_id = document.querySelector('#add_workers_elems');
    add_workers_elems_id.addEventListener('blur', function () {
        let this_input = this;
        let value_input = this_input.value;

        if (value_input.length > 0) {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.innerHTML = this_input.value;


            // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
            span.addEventListener('click', function () {
                let this_span = this;
                clickFuncLi(this_span, li);
            });

            li.append(span);

            // Добавляем кнопку (ссылку) перечёркивания пункта (li)
            clickFuncCrossOutLi(li);

            // Добавляем кнопку (ссылку) удаления пункта (li)
            clickFuncDeleteLi(li);


            ul_workers_elems_id.append(li);
        }
    });


    // Массив объектов и таблица

    // Выведите этих работников в HTML таблице.

    // Добавьте ячейкам созданной таблицы возможность редактирования.

    // Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

    // Сделайте под таблицей 3 инпута и кнопку для добавления нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.

    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];

    let table_workers_elems_id = document.querySelector('#table_workers_elems');
    let tr = document.createElement('tr');

    let name_th = document.createElement('th');
    name_th.innerHTML = 'Имя';
    let age_th = document.createElement('th');
    age_th.innerHTML = 'Возраст';
    let salary_th = document.createElement('th');
    salary_th.innerHTML = 'Зарплата';
    let action_th = document.createElement('th');
    action_th.innerHTML = 'Действие';

    tr.append(name_th);
    tr.append(age_th);
    tr.append(salary_th);
    tr.append(action_th);

    table_workers_elems_id.append(tr);

    for (let employee of employees) {
        let tr = document.createElement('tr');

        for (const parameter in employee) {

            let td = document.createElement('td');
            td.innerHTML = employee[parameter];

            // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
            td.addEventListener('click', function () {
                let this_td = this;
                clickFuncLi(this_td, this_td);
            });

            tr.append(td);

        }

        // Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
        let td = document.createElement('td');
        clickFuncDeleteLi(td, true);
        tr.append(td);

        table_workers_elems_id.append(tr);
    }


    // Сделайте под таблицей 3 инпута и кнопку для добавления нового работника...
    let add_workers_in_table_id = document.querySelector('#add_workers_in_table');

    add_workers_in_table_id.addEventListener('click', function (event) {
        event.preventDefault();

        let add_workers_in_table_name_id = document.querySelector('#add_workers_in_table_name');
        let add_workers_in_table_age_id = document.querySelector('#add_workers_in_table_age');
        let add_workers_in_table_salary_id = document.querySelector('#add_workers_in_table_salary');

        let tr = document.createElement('tr');

        let name_td = document.createElement('td');
        name_td.innerHTML = add_workers_in_table_name_id.value;

        let age_td = document.createElement('td');
        age_td.innerHTML = add_workers_in_table_age_id.value;

        let salary_td = document.createElement('td');
        salary_td.innerHTML = add_workers_in_table_salary_id.value;

        // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
        name_td.addEventListener('click', function () {
            let this_td = this;
            clickFuncLi(this_td, this_td);
        });

        // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
        age_td.addEventListener('click', function () {
            let this_td = this;
            clickFuncLi(this_td, this_td);
        });

        // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
        salary_td.addEventListener('click', function () {
            let this_td = this;
            clickFuncLi(this_td, this_td);
        });


        tr.append(name_td);
        tr.append(age_td);
        tr.append(salary_td);

        // Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
        let td = document.createElement('td');
        clickFuncDeleteLi(td, true);
        tr.append(td);

        table_workers_elems_id.append(tr);
    });


    // Массив объектов и список

    // Выведите на экран каждого работника в своем теге li тега ul.

    // Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.

    // Добавьте в конец каждого тега li ссылку на удаление этого li из списка.

    // Под списком сделайте форму для добавления нового работника.
    let ul_workers_objs_id = document.querySelector('#ul_workers_objs');
    employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];

    for (let employee of employees) {
        let {name, age, salary} = employee;
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = 'Имя: ' + name + ', Возраст: ' + age + ', Зарплата: ' + salary;

        // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
        span.addEventListener('click', function () {
            let this_span = this;
            clickFuncLi(this_span, li);
        });

        li.append(span);

        // Добавляем кнопку (ссылку) перечёркивания пункта (li)
        clickFuncCrossOutLi(li);

        // Добавляем кнопку (ссылку) удаления пункта (li)
        clickFuncDeleteLi(li);

        ul_workers_objs_id.append(li);
    }


    // Форма для добавления нового работника
    let add_workers_obj_id = document.querySelector('#add_workers_obj');

    add_workers_obj_id.addEventListener('click', function (event) {
        event.preventDefault();

        let add_workers_obj_name_id = document.querySelector('#add_workers_obj_name');
        let add_workers_obj_age_id = document.querySelector('#add_workers_obj_age');
        let add_workers_obj_salary_id = document.querySelector('#add_workers_obj_salary');

        let name_value = add_workers_obj_name_id.value;
        let age_value = add_workers_obj_age_id.value;
        let salary_value = add_workers_obj_salary_id.value;

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = 'Имя: ' + name_value + ', Возраст: ' + age_value + ', Зарплата: ' + salary_value;

        // Добавляем обработчик события клика по пункту для появления инпута, с помощью которого редактируем пункт
        span.addEventListener('click', function () {
            let this_span = this;
            clickFuncLi(this_span, li);
        });

        li.append(span);

        // Добавляем кнопку (ссылку) перечёркивания пункта (li)
        clickFuncCrossOutLi(li);

        // Добавляем кнопку (ссылку) удаления пункта (li)
        clickFuncDeleteLi(li);

        ul_workers_objs_id.append(li);

    });


});
