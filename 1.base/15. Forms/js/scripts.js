'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');

    // Работа с текстареа
    let elem_textarea_id = document.querySelector('#elem_textarea');
    console.log(elem_textarea_id.value);

    // Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
    elem_textarea_id.addEventListener('blur', () => {
        let paragraph_textarea_id = document.querySelector('#paragraph_textarea');
        paragraph_textarea_id.textContent = elem_textarea_id.value;
    });


    // Блокировка элементов, Атрибут disabled
    let elem_input_disabled_id = document.querySelector('#elem_input_disabled');
    console.log(elem_input_disabled_id.disabled);
    elem_input_disabled_id.disabled = false;
    console.log(elem_input_disabled_id.disabled);


    // Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - разблокирует, третья - заблокирован инпут или нет.

    // Инпут
    let elem_input_disabled_two_button_id = document.querySelector('#elem_input_disabled_two_button');
    // первая
    let submit_button_disabled_id = document.querySelector('#submit_button_disabled');
    // вторая
    let submit_button_included_id = document.querySelector('#submit_button_included');
    // третья
    let submit_button_is_disabled_id = document.querySelector('#submit_button_is_disabled');
    // Параграф
    let paragraph_is_disabled_id = document.querySelector('#paragraph_is_disabled');


    submit_button_disabled_id.addEventListener('click', () => {
        elem_input_disabled_two_button_id.disabled = true;
    });

    submit_button_included_id.addEventListener('click', () => {
        elem_input_disabled_two_button_id.disabled = false;
    });

    submit_button_is_disabled_id.addEventListener('click', () => {
        paragraph_is_disabled_id.textContent = elem_input_disabled_two_button_id.disabled ? 'Заблокирована' : 'Разблокирована';
    });


    // Работа с чекбоксами

    let elem_checkbox_id = document.querySelector('#elem_checkbox');
    console.log(elem_checkbox_id.checked);


    // Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
    let elem_checkbox_on_id = document.querySelector('#elem_checkbox_on');
    let elem_checkbox_off_id = document.querySelector('#elem_checkbox_off');

    elem_checkbox_on_id.addEventListener('click', changeChecked);
    elem_checkbox_off_id.addEventListener('click', changeChecked);

    function changeChecked() {
        // console.log(this.value);
        // elem_checkbox_id.checked = !elem_checkbox_id.checked; // для случая с одной кнопкой, чтобы изменять значения на противоположное
        elem_checkbox_id.checked = (this.value === 'Включить чекбокс');
    }


    // Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
    let checkbox_paragraph_id = document.querySelector('#checkbox_paragraph');
    let submit_checkbox_paragraph_id = document.querySelector('#submit_checkbox_paragraph');
    let paragraph_checkbox_id = document.querySelector('#paragraph_checkbox');

    submit_checkbox_paragraph_id.addEventListener('click', writeTextParagraphCheckbox);

    function writeTextParagraphCheckbox() {
        paragraph_checkbox_id.textContent = checkbox_paragraph_id.checked ? 'Привет' : 'Пока';
    }


    // Чередование атрибутов без значений
    let input_alternation_id = document.querySelector('#input_alternation');
    let button_alternation_id = document.querySelector('#button_alternation');

    button_alternation_id.addEventListener('click', alternationInput);

    function alternationInput() {
        console.log(input_alternation_id.disabled);
        input_alternation_id.disabled = !input_alternation_id.disabled;
    }


    // Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
    let checkbox_alternation_id = document.querySelector('#checkbox_alternation');
    let button_checkbox_alternation_id = document.querySelector('#button_checkbox_alternation');

    button_checkbox_alternation_id.addEventListener('click', alternationCheckboxChecked);

    function alternationCheckboxChecked() {
        checkbox_alternation_id.checked = !checkbox_alternation_id.checked; // для случая с одной кнопкой, чтобы изменять значения на противоположное
    }


    // Работа с радио-кнопками
    // по нажатию на кнопку на экран вывелось value той радио-кнопочки, которая отмечена в данный момент

    let radios = document.querySelectorAll('input[type="radio"]');
    let button_radio_id = document.querySelector('#button_radio');

    button_radio_id.addEventListener('click', () => {
        for (let radio of radios) {
            if (radio.checked) {
                console.log(radio.value);
                paragraph_radio_id.textContent = radio.value;
            }
        }
    });

    // Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
    let paragraph_radio_id = document.querySelector('#paragraph_radio');


    // Событие change
    // событие change, возникает в полях ввода при их изменениях
    let input_event_change_id = document.querySelector('#input_event_change');
    let paragraph_event_change_id = document.querySelector('#paragraph_event_change');

    input_event_change_id.addEventListener('change', setInputChangeEvent);

    // Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
    function setInputChangeEvent() {
        console.log(this.value);
        paragraph_event_change_id.textContent = this.value;
    }


    // Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
    let checkbox_event_change_id = document.querySelector('#checkbox_event_change');
    checkbox_event_change_id.addEventListener('change', setCheckboxChangeEvent);

    function setCheckboxChangeEvent() {
        console.log(this.checked);
    }


    // Расскажите, в чем разница между событиями blur и change.
    // Событиями blur срабатывает в любом случае, если текстовое поле становится не активным, а change, только при его изменения по выходу из него.


    // Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
    let input_quantity_change_id = document.querySelector('#input_quantity_change');
    input_quantity_change_id.addEventListener('change', getInputQuantityEvent);

    function getInputQuantityEvent() {
        let thisRef = this;
        if (thisRef.value.length < 5) {
            thisRef.style.color = 'rgb(230, 0, 0)';
        } else {
            thisRef.style.color = 'rgb(0, 100, 0)';
        }
    }


    // Событие input
    let input_event_input_id = document.querySelector('#input_event_input');
    let paragraph_event_input_id = document.querySelector('#paragraph_event_input');


    input_event_input_id.addEventListener('input', readInput);

    // Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
    // Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
    function readInput() {
        let thisRef = this;
        let quantity_symbol = 5 - (+thisRef.value.length);

        thisRef.style.color = 'rgb(230, 0, 0)';
        paragraph_event_input_id.textContent = 'Кол-во недостающих символов: ' + quantity_symbol;

        if ((+thisRef.value.length) >= 5) {
            paragraph_event_input_id.textContent = thisRef.value;
            thisRef.style.color = 'rgb(0, 100, 0)';
        }
    }


    // Методы focus и blur
    // focus и blur - специальные методы, которые позволяют принудительно установить фокус в инпут или убрать.
    let input_focus_blur_id = document.querySelector('#input_focus_blur');
    let button_focus_blur_id = document.querySelector('#button_focus_blur');

    button_focus_blur_id.addEventListener('click', function () {
        input_focus_blur_id.focus();
        // input_focus_blur_id.blur();
    });


    // Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.

    let text_focus_blur_class = document.querySelectorAll('.text_focus_blur');

    for (let i = 0, count = text_focus_blur_class.length; i < count; i++) {
        text_focus_blur_class[i].addEventListener('input', () => counterTextInput(i, text_focus_blur_class[i]));
    }

    function counterTextInput(index, obj) {
        let thisRef = obj;
        let length = thisRef.value.length;

        function changeInput() {
            index++;
            if (text_focus_blur_class[index]) {
                text_focus_blur_class[index].focus();
            } else {
                text_focus_blur_class[text_focus_blur_class.length - 1].blur();
                console.log(index + ' счётчика нет!');
            }
        }

        if (length >= 2) {
            changeInput();
        }

        console.log(index);
        console.log(length);
    }


    // Работа с выпадающими списками
    let select_list_id = document.querySelector('#select_list');
    select_list_id.addEventListener('change', function () {
        console.log(this.value);
    });


    // Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
    let paragraph_select_list_id = document.querySelector('#paragraph_select_list');
    let input_submit_select_id = document.querySelector('#input_submit_select');
    let select_paragraph_id = document.querySelector('#select_paragraph');

    input_submit_select_id.addEventListener('click', outputValueInParagraph);

    function outputValueInParagraph() {
        select_paragraph_id.textContent = paragraph_select_list_id.value;
    }


    // Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.

    // // используем генераторы JavaScript
    // function* generateSequence(start, end) {
    //   for (let i = start; i <= end; i++) {
    //     yield i;
    //   }
    // }
    // // Используем оператор … для преобразования итерируемого объекта в массив
    // let sequence = [...generateSequence(2,5)];
    // console.log(sequence); // 2, 3, 4, 5

    // Функция range в JavaScript, используем генераторы JavaScript и используя рекурсию
    function* arrayRange(start, end) {
        yield start;

        // если начальное и конечное значение совпадают
        if (start === end) return;

        // рекурсивно вызываем функцию-генератор
        yield* arrayRange(start + 1, end);
    }

    // Проверка года на високосность
    function isLeap(year) {
        let date = new Date(year, 2, 0);
        return (date.getDate() === 29) ? year + ' - високосный год.' : year + ' - обычный год.';
    }

    // Диапазон лет
    let years_range = [...arrayRange(2020, 2030)];
    console.log(years_range);

    // Список
    let years_select_list_id = document.querySelector('#years_select_list');

    // Пункты списка
    for (let year of years_range) {
        let selected = (year === 2025) ? 'selected' : '';
        years_select_list_id.innerHTML += '<option value="' + year + '" ' + selected + ' >' + year + '</option>';
    }

    // Изменение п. списка
    years_select_list_id.addEventListener('change', function () {
        console.log(isLeap(this.value));
    });


    // Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.

    let week_select_list_id = document.querySelector('#week_select_list');
    let week_paragraph_id = document.querySelector('#week_paragraph');

    week_select_list_id.addEventListener('change', listenerWeekSelect);

    function listenerWeekSelect() {
        console.log(week_select_list_id[this.selectedIndex].textContent); // текст выбранного пункта
        let text_paragraph = (this.value < 5) ? 'Выбран будний день недели: ' : 'Выбран выходной день недели: ';
        week_paragraph_id.textContent = text_paragraph + week_select_list_id[this.selectedIndex].textContent;
    }


    // Изменение выбранного пункта списка
    let select_list_change_item_id = document.querySelector('#select_list_change_item');
    let button_change_item_id = document.querySelector('#button_change_item');

    button_change_item_id.addEventListener('click', function () {
        select_list_change_item_id.value = 'one';
    });
    // Если у нашего списка нет атрибутов value, то в свойство value селекта нужно записывать текст тега option, который мы хотим выбрать.


    // Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.

    let select_list_change_item_month_id = document.querySelector('#select_list_change_item_month');
    let date = new Date();

    select_list_change_item_month_id.value = date.getMonth() + 1;

    // Номер выбранного пункта выпадающего списка
    console.log(select_list_change_item_month_id.selectedIndex);
    // select_list_change_item_month_id.selectedIndex = 5; // выберет июнь


    // Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
    let index_range = [...arrayRange(1, 20)];

    // Список
    let index_select_list_id = document.querySelector('#index_select_list');

    // Пункты списка
    for (let index of index_range) {
        let selected = (index === 2025) ? 'selected' : '';
        index_select_list_id.innerHTML += '<option value="' + index + '" ' + selected + ' >Текст ' + index + '</option>';
    }

    let input_change_index_id = document.querySelector('#input_change_index');
    input_change_index_id.addEventListener('blur', changeInputIndex);

    function changeInputIndex() {
        index_select_list_id.selectedIndex = this.value - 1;
    }


    // Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий день.

    let week_index_select_list_id = document.querySelector('#week_index_select_list');
    date = new Date();
    console.log(date.getDay());

    // Выбран текущий день недели
    week_index_select_list_id.selectedIndex = date.getDay() - 1;


    // Получение пунктов выпадающего списка
    // console.log(document.querySelectorAll('#week_index_select_list option'));
    week_index_select_list_id = document.querySelector('#week_index_select_list');

    console.log(week_index_select_list_id.querySelectorAll('option'));

    // Продвинутый способ
    // Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
    for (let option of week_index_select_list_id) {
        console.log(option);
        option.textContent += ' ' + option.value;
    }


    // Работа с пунктами выпадающего списка
    week_index_select_list_id = document.querySelector('#week_index_select_list');
    let option = week_index_select_list_id[2];

    console.log(option.text); // console.log(option.textContent);
    console.log(option.value);
    console.log(option.selected);

    // Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.
    for (let day of week_index_select_list_id) {
        day.text += day.selected ? ' !' : ' ?';
    }


    // Выбор пункта списка
    // элем.selected = true;
    // Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
    // Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
    // Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
    let week_day_select_list_id = document.querySelector('#week_day_select_list');
    let week_day_select_day_id = document.querySelector('#week_day_select_day');
    let week_day_paragraph_day_id = document.querySelector('#week_day_paragraph_day');

    week_day_select_day_id.addEventListener('click', selectLastDayWeek);
    week_day_select_list_id.addEventListener('change', changeWeekDay);

    function selectLastDayWeek() {
        week_day_select_list_id[week_day_select_list_id.length - 1].selected = true;
        week_day_paragraph_day_id.textContent = week_day_select_list_id[week_day_select_list_id.selectedIndex].textContent;
    }

    function changeWeekDay() {
        week_day_paragraph_day_id.textContent = week_day_select_list_id[week_day_select_list_id.selectedIndex].textContent + ' !';
    }


    // Получение выбранного опшиона
    // элем[элем.selectedIndex]
    console.log(week_day_select_list_id[week_day_select_list_id.selectedIndex].textContent);


    // Поиск ошибок в коде с формами
    // По потери фокуса текст из textarea должен записаться в див
    let textarea_test_id = document.querySelector('#textarea_test');
    let div_test_id = document.querySelector('#div_test');

    textarea_test_id.addEventListener('blur', function () {
        console.log(textarea_test_id);
        div_test_id.textContent = textarea_test_id.value;
    });


    // По клику на кнопку в див должно записаться или одно, или другое значение
    let checkbox_select_number_id = document.querySelector('#checkbox_select_number');
    let button_select_number_id = document.querySelector('#button_select_number');
    let div_select_number_id = document.querySelector('#div_select_number');

    button_select_number_id.addEventListener('click', function () {
        div_select_number_id.textContent = checkbox_select_number_id.checked ? '111' : '222';
    });


    // По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое
    let checkbox = document.querySelector('#checkbox[type="checkbox"]');
    let button = document.querySelector('#button');

    button.addEventListener('click', function () {
        checkbox.checked === true ? console.log('+++') : console.log('---');
    });


});
