'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event);
    console.log('Манипулирование элементами ');
    console.log(' ');


    // Манипулирование элементами

    const TAG_P = document.createElement('p');
    const TAG_LI = document.createElement('li');
    const TAG_UL = document.createElement('ul');

    console.log(TAG_P);
    console.log(TAG_LI);
    console.log(TAG_UL);

    // Создание и вставка элементов
    // Метод createElement('param'), параметром этого метода следует передавать имя тега, который должен быть создан.
    // Метод appendChild(param) для размещения нового элемента на странице, параметром метода следует передавать наш новый элемент, созданный ранее через createElement. Следует применять к тому элементу, в который мы хотим поместить наш элемент

    let block_create_insert_elems_id = document.querySelector('#block_create_insert_elems');

    let p = document.createElement('p');
    p.innerHTML = 'New';

    block_create_insert_elems_id.appendChild(p);


    // Вставьте ему в конец li с текстом 'item'.
    let ol_create_insert_elems_id = document.querySelector('#ol_create_insert_elems');

    let li = document.createElement('li');
    li.innerHTML = 'item 1';

    let li1 = document.createElement('li');
    li1.innerHTML = 'item 2';

    let li2 = document.createElement('li');
    li2.innerHTML = 'item 3';

    ol_create_insert_elems_id.appendChild(li);
    ol_create_insert_elems_id.appendChild(li1);
    ol_create_insert_elems_id.appendChild(li2);


    // Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
    let ul_create_insert_elems_id = document.querySelector('#ul_create_insert_elems');
    let button_create_insert_elems_id = document.querySelector('#button_create_insert_elems');

    button_create_insert_elems_id.addEventListener('click', insertItemOnUl);

    function insertItemOnUl() {
        let obj_li = getListItems(ul_create_insert_elems_id);

        for (let li in obj_li) {
            let item = li;
            // Создаём элемент
            item = document.createElement('li');
            // Вставляем элемент
            item.innerHTML = obj_li[li];

            ul_create_insert_elems_id.appendChild(item);
        }
    }

    // Получаем массив названий переменных и их содержимое для элементов списка
    function getListItems(parent_elem, obj_li = {}) {
        let number_last_elem = +parent_elem.childElementCount;
        let new_elem_number = number_last_elem + 1;
        // new_elem_number++;

        for (let i = number_last_elem, j = ++number_last_elem; i < new_elem_number; i++, j++) {
            obj_li[`li` + i] = 'item ' + j;
        }

        return obj_li;
    }


    // Навешивание событий при вставке. Привязывание событий при вставке элементов
    let block_binding_events_insert_id = document.querySelector('#block_binding_events_insert');

    // Новый элемент
    let tag_p = document.createElement('p');
    // Содержимое
    tag_p.innerHTML = 'Новый элемент';
    // Привязка событий
    tag_p.addEventListener('click', function () {
        console.log(this.innerHTML);
    });

    // Вставка в конец блока
    block_binding_events_insert_id.appendChild(tag_p);


    // Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
    let button_binding_events_insert_id = document.querySelector('#button_binding_events_insert');
    let ol_binding_events_insert_id = document.querySelector('#ol_binding_events_insert');

    button_binding_events_insert_id.addEventListener('click', insertItemOnOlWithEvents);

    function insertItemOnOlWithEvents() {
        let obj_li = getListItems(ol_binding_events_insert_id);

        for (let li in obj_li) {
            let elem = li;

            // Создаём li
            elem = document.createElement('li');
            // Содержимое li
            elem.innerHTML = obj_li[li];
            // Привязка события к li
            elem.addEventListener('click', function () {
                this.innerHTML += '!';
            });

            ol_binding_events_insert_id.appendChild(elem);
        }
    }


    // Создание элементов в цикле
    let block_circle_create_elem_id = document.querySelector('#block_circle_create_elem');

    for (let i = 0, j = 1; i < 10; i++, j++) {
        let tag_p = document.createElement('p');
        tag_p.innerHTML = 'Параграф ' + j;

        block_circle_create_elem_id.appendChild(tag_p);
    }


    // Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
    let ul_circle_create_elem_id = document.querySelector('#ul_circle_create_elem');

    for (let i = 0, j = 1; i < 10; i++, j++) {
        let tag_li = document.createElement('li');
        tag_li.innerHTML = 'Пункт ' + j;

        ul_circle_create_elem_id.appendChild(tag_li);
    }


    // Навешивание обработчиков в цикле
    let block_circle_hanging_events_id = document.querySelector('#block_circle_hanging_events');

    for (let i = 0, j = 1; i < 10; i++, j++) {
        // Создаём p
        let tag_p = document.createElement('p');
        // Содержимое p
        tag_p.innerHTML = 'Параграф ' + j;
        // Привязка события к p
        tag_p.addEventListener('click', function () {
            console.log(this.innerHTML);
        });

        block_circle_hanging_events_id.appendChild(tag_p);
    }


    // Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
    let block_input_circle_hanging_events = document.querySelector('#block_input_circle_hanging_events');
    let paragraph_input_circle_hanging_events_id = document.querySelector('#paragraph_input_circle_hanging_events');

    for (let i = 0, j = 1; i < 5; i++, j++) {

        // Создаём input
        let tag_input = document.createElement('input');

        // Содержимое input
        tag_input.value = 'Текст ' + j;

        // Привязка события к input
        tag_input.addEventListener('blur', function () {
            paragraph_input_circle_hanging_events_id.innerHTML += this.value + ' ';
        });

        let tag_br1 = document.createElement('br');
        let tag_br2 = document.createElement('br');

        block_input_circle_hanging_events.appendChild(tag_input);
        block_input_circle_hanging_events.appendChild(tag_br1);
        block_input_circle_hanging_events.appendChild(tag_br2);
    }


    // Удаление элементов
    // elem.remove();
    let paragraph_remove_class = document.querySelectorAll('.paragraph_remove');

    for (let paragraph of paragraph_remove_class) {
        paragraph.addEventListener('click', function () {
            this.remove();
        });
    }


    // Сделайте так, чтобы любая li удалялась по клику на нее
    let ul_remove_elem_id = document.querySelector('#ul_remove_elem');
    let li_elem = ul_remove_elem_id.children;

    console.log(li_elem);

    for (let li of li_elem) {
        li.addEventListener('click', function () {
            this.remove();
        });
    }


    // Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
    let ul_parent_remove_elem_id = document.querySelector('#ul_parent_remove_elem');
    let button_ul_parent_remove_elem_id = document.querySelector('#button_ul_parent_remove_elem');

    button_ul_parent_remove_elem_id.addEventListener('click', function () {
        ul_parent_remove_elem_id.lastElementChild.remove();
    });


    // Вставка с краю. Вставка элементов в начало или в конец
    // append prepend
    // родитель.append(элемент или строка)
    // родитель.prepend(элемент или строка)


    // Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
    // insert_from_edge
    let ul_insert_from_edge_id = document.querySelector('#ul_insert_from_edge');

    let tag_li_start = document.createElement('li');
    let tag_li_finish = document.createElement('li');

    tag_li_start.innerHTML = 'start';
    tag_li_finish.innerHTML = 'finish';

    ul_insert_from_edge_id.prepend(tag_li_start);
    ul_insert_from_edge_id.append(tag_li_finish);


    // insertBefore
    // родитель.insertBefore(элемент, перед кем вставить)

    // Вставьте перед этим элементом элемент с текстом 'new'.
    let ul_parent_insert_before_id = document.querySelector('#ul_parent_insert_before');
    let tag_li_before = document.querySelector('#ul_parent_insert_before #elem_insert_before');

    // Создаём li
    let tag_li_insert = document.createElement('li');

    // Содержимое li
    tag_li_insert.innerHTML = 'Новый';

    // Привязка события к li
    tag_li_insert.addEventListener('click', function () {
        tag_li_insert.innerHTML += '!';
    });

    ul_parent_insert_before_id.insertBefore(tag_li_insert, tag_li_before);


    // Смежная вставка. Смежная вставка элементов
    // insertAdjacentElement
    // опорный элемент.insertAdjacentElement('способ вставки', код для вставки)

    // Метод insertAdjacentElement позволяет вставить элемент в любое место страницы. Чаще всего используется после создания элемента с помощью createElement.

    // Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.

    let block_adjacent_insert_id = document.querySelector('#block_adjacent_insert');


    // Вставьте перед ним абзац с текстом '!!!'.
    let before_begin_tag_p = document.createElement('p');
    before_begin_tag_p.innerHTML = 'beforeBegin !!!';
    block_adjacent_insert_id.insertAdjacentElement('beforebegin', before_begin_tag_p);


    // Вставьте после него абзац с текстом '!!!'.
    let after_end_tag_p = document.createElement('p');
    after_end_tag_p.innerHTML = 'afterEnd !!!';
    block_adjacent_insert_id.insertAdjacentElement('afterend', after_end_tag_p);


    // Вставьте ему в начало абзац с текстом '!!!'.
    let after_begin_tag_p = document.createElement('p');
    after_begin_tag_p.innerHTML = 'afterBegin !!!';
    block_adjacent_insert_id.insertAdjacentElement('afterbegin', after_begin_tag_p);


    // Вставьте ему в конец абзац с текстом '!!!'.
    let before_end_tag_p = document.createElement('p');
    before_end_tag_p.innerHTML = 'beforeEnd !!!';
    block_adjacent_insert_id.insertAdjacentElement('beforeend', before_end_tag_p);


    // Смежная вставка тегов
    // insertAdjacentHTML
    // опорный элемент.insertAdjacentHTML(способ вставки, код для вставки)

    // Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.


    // Дан элемент. Вставьте перед ним следующий тег.
    let block_tags_adjacent_insert_id = document.querySelector('#block_tags_adjacent_insert');

    let tags_adjacent_insert = '<div class="www"><p>text</p><p>text</p><input></div>';

    block_tags_adjacent_insert_id.insertAdjacentHTML('beforebegin', tags_adjacent_insert);


    // Клонирование элементов
    // метода cloneNode(bool)
    // В этот метод нужно передавать параметром true либо false. Если передан true, то элемент клонируется полностью, вместе со всем атрибутами и дочерними элементами, а если false - только сам элемент.

    let parent_block_clone_id = document.querySelector('#parent_block_clone');
    let elem_block_clone_class = parent_block_clone_id.querySelector('.elem_block_clone');

    let clone_elem = elem_block_clone_class.cloneNode(true);
    parent_block_clone_id.appendChild(clone_elem);


    // Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
    let submit_elem_clone_id = document.querySelector('#submit_elem_clone');
    let parent_block_input_clone_id = document.querySelector('#parent_block_input_clone');
    let elem_input_clone_id = parent_block_input_clone_id.querySelector('.elem_input_clone');

    submit_elem_clone_id.addEventListener('click', methodCloneInput);

    function methodCloneInput() {
        let clone_input = elem_input_clone_id.cloneNode(true);
        console.log(clone_input);

        parent_block_input_clone_id.appendChild(clone_input);
    }


    // Проверка элементов
    // Метод matches
    // позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.
    // элемент.matches('селектор');


    // Проверьте, является ли этот элемент элементом с классом check_matches.
    let block_check_matches_id = document.querySelector('#block_check_matches');
    let check_matches_class = block_check_matches_id.matches('.check_matches');
    let check_matches_tag_p = block_check_matches_id.matches('p');
    console.log(check_matches_class);
    console.log(check_matches_tag_p);


    // Метод contains
    // позволяет проверить, содержит ли один элемент внутри себя другой. Параметром метода передается элемент. Элемент будет проверяться на то, что он находится внутри элемента, к которому применился метод.
    // родитель.contains(элемент)

    let parent_block_contains_id = document.querySelector('#parent_block_contains');
    let child_paragraph_contains_id = document.querySelector('#child_paragraph_contains');

    let contains_child_paragraph = parent_block_contains_id.contains(child_paragraph_contains_id);
    console.log(contains_child_paragraph);


});
