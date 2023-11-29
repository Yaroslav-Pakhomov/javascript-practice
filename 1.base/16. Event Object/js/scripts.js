'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');


    // Основы работы с объектом Event (Событие)
    let elem_base_work_id = document.querySelector('#elem_base_work');
    elem_base_work_id.addEventListener('click', function (event) {
        console.log(event);
    });


    // Координаты события
    // clientX clientY pageX pageY
    // clientX clientY - координаты относительно окна
    // pageX pageY - координаты относительно страницы (документа, с учётом прокрутки).
    // Синтаксис - event.clientX

    // для button "Кликни"
    elem_base_work_id.addEventListener('click', function (event) {
        let winWidth = window.outerWidth; // outer свойства не меняют значения при масштабировании страницы
        let winHeight = window.outerHeight;

        let horShift = 100;
        let verShift = 130;

        let left = window.screenX + horShift;
        let top = window.screenY + verShift;

        let width = winWidth - 2 * horShift;
        let height = winHeight - 2 * verShift;

        let date = new Date();
        let newWin = window.open('about:blank', date.getTime().toString(), 'left=' + left + ',top=' + top + ',width=' + width + ',height=' + height + ',location=no');

        let srcdoc = this.querySelector('div[srcdoc]').getAttribute('srcdoc');
        newWin.document.write(srcdoc);

        event.preventDefault();
    });

    // Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора
    let event_cursor_coordinate_id = document.querySelector('#event_cursor_coordinate');
    document.addEventListener('mousemove', function (event) {
        event_cursor_coordinate_id.innerHTML = 'Client - координаты X : ' + event.clientX + ' координаты Y: ' + event.clientY;
        event_cursor_coordinate_id.innerHTML += '<br>';
        event_cursor_coordinate_id.innerHTML += 'Page - координаты X: ' + event.pageX + ' координаты Y: ' + event.pageY;

    });


    // Тип события в объекте Event - event.type
    elem_base_work_id.addEventListener('click', function (event) {
        console.log(event.type); // click
    });

    let elem_event_type_id = document.querySelector('#elem_event_type');
    elem_event_type_id.addEventListener('click', getEventType);
    elem_event_type_id.addEventListener('dblclick', getEventType);

    // при клике (click) на элемент этот элемент красился в зеленый цвет, а при двойном клике (dblclick) - в красный.
    function getEventType(event) {
        console.log(event.type);
        console.log(event.type === 'click');

        (event.type === 'click') ? this.classList.toggle('colored_green') :
            (event.type === 'dblclick') ? this.classList.toggle('colored_red') :
                '';
    }


    // Элемент события в объекте Event
    // Элемент, в котором произошло событие (свойство target)
    // this всегда содержит элемент, к которому было привязано событие, а свойство target - элемент, по которому реально был клик. Этот реальный элемент может совпадать с this, а может не совпадать.
    let event_elem_id = document.querySelector('#event_elem');
    event_elem_id.addEventListener('click', function (event) {
        console.log(event.target); // выведет наш абзац
        console.log(this);         // выведет наш див
    });


    // Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.
    let event_elem_ul_id = document.querySelector('#event_elem_ul');
    event_elem_ul_id.addEventListener('click', checkClickTag);

    function checkClickTag(event) {
        console.log(event.target.tagName);
        if (event.target.tagName === 'LI') {
            event.target.textContent += ' !';
        }

        if (event.target.tagName === 'UL') {
            event.target.innerHTML += '<li>New text</li>';
        }

    }


    // Получение нажатых клавиш
    let get_pressed_keys_id = document.querySelector('#get_pressed_keys');

    // Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
    // Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
    let paragraph_get_pressed_keys_id = document.querySelector('#paragraph_get_pressed_keys');

    get_pressed_keys_id.addEventListener('keypress', function (event) {
        console.log(event.key); // нажатый символ
        console.log(event.code); // код нажатой клавиши
        paragraph_get_pressed_keys_id.innerHTML += 'Символ - ' + event.key + ', код символа - ' + event.code + '.<br> '; // Символ - Enter, код символа - NumpadEnter.
        if (event.key === 'Enter' && event.code === 'NumpadEnter') {
            console.log(this.value);
            paragraph_get_pressed_keys_id.innerHTML = this.value;
            this.value = '';
        }
    });


    // Отслеживание клавиш-модификаторов
    // С помощью объекта Event можно узнать, были ли нажаты в момент события клавиши Ctrl, Alt и Shift. Это делается с помощью свойств ctrlKey, altKey и shiftKey - они имеют значение true или false.
    let tracking_modifier_keys_id = document.querySelector('#tracking_modifier_keys');

    tracking_modifier_keys_id.addEventListener('click', function (event) {
        // console.log(event);
        if (event.ctrlKey) {
            console.log('нажат Ctrl');
        }

        if (event.altKey) {
            console.log('нажат Alt');
        }

        if (event.shiftKey) {
            console.log('нажат Shift');
        }
    });


    // Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
    let href_tracking_modifier_keys_id = document.querySelector('#href_tracking_modifier_keys');

    href_tracking_modifier_keys_id.addEventListener('click', function (event) {
        if (event.altKey) {
            this.classList.toggle('colored_red');
        }
    });


    // Пусть у вас есть список ul с тегами li. Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.


    let ul_tracking_modifier_keys_id = document.querySelector('#ul_tracking_modifier_keys');
    ul_tracking_modifier_keys_id.addEventListener('click', setValueLi);

    function setValueLi(event) {
        if (event.ctrlKey) {
            event.target.innerHTML += ' 1';
        }
        if (event.altKey) {
            event.target.innerHTML += ' 2';
        }
        if (event.shiftKey) {
            event.target.innerHTML += ' 3';
        }
    }


    // Отмена действия по умолчанию
    // Cancel default
    let elem_cancel_default_id = document.querySelector('#elem_cancel_default');

    // Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
    elem_cancel_default_id.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Вы не можете перейти по этой ссылке!');
        event.target.innerHTML += ' (' + event.target.getAttribute('href') + ') ';
    });


    // Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
    let input_cancel_default_1_id = document.querySelector('#input_cancel_default_1');
    let input_cancel_default_2_id = document.querySelector('#input_cancel_default_2');
    let paragraph_cancel_default_id = document.querySelector('#paragraph_cancel_default');
    let link_cancel_default_id = document.querySelector('#link_cancel_default');
    link_cancel_default_id.addEventListener('click', getSumInput);

    function getSumInput(event) {
        event.preventDefault();
        let sum = (+input_cancel_default_1_id.value) + (+input_cancel_default_2_id.value);

        paragraph_cancel_default_id.innerHTML = 'Сумма чисел: ' + sum;
    }


    // Всплытие событий
    // Когда кликаем (некоторые др. события) на самый внутренний блок, событие клика возникает сначала в нем, затем срабатывает в его родителе, в родителе его родителя и так далее. Такое поведение называется всплытием (англ. bubbling) событий.
    let events_emergence_elem1_id = document.querySelector('#events_emergence_elem1');
    let events_emergence_elem2_id = document.querySelector('#events_emergence_elem2');
    let events_emergence_elem3_id = document.querySelector('#events_emergence_elem3');

    events_emergence_elem1_id.addEventListener('click', function () {
        console.log('зеленый');
    });

    events_emergence_elem2_id.addEventListener('click', function () {
        console.log('голубой');
    });

    events_emergence_elem3_id.addEventListener('click', function () {
        console.log('красный');
    });

    // Нажмите теперь на самый внутренний красный блок - и вы увидите, как событие сначала сработает в красном блоке, потом в голубом, потом в зеленом. И это логично, ведь кликая на внутренний блок, вы одновременно кликаете на все внешние.


    // Целевой элемент при всплытии. Получение целевого элемента при всплытии событий
    let ascent_target_element_block_id = document.querySelector('#ascent_target_element_block');
    ascent_target_element_block_id.addEventListener('click', function (event) {
        console.log('click');
        if (event.target.matches('div')) {
            console.log('клик именно по диву');
        }
        if (event.target.tagName === 'DIV') {
            console.log('клик именно по диву');
        }
        if (event.target.matches('p')) {
            console.log('клик именно по абзацу');
        }
        if (event.target.tagName === 'P') {
            console.log('клик именно по абзацу');
        }
    });


    // Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
    // Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul - ей в конец добавлялась новая li.
    let ascent_target_element_div_id = document.querySelector('#ascent_target_element_div');
    ascent_target_element_div_id.addEventListener('click', function (event) {
        console.log(event.target.matches('ul'));

        if (event.target.matches('ul')) {
            let last_child = event.target.lastElementChild;
            let number_last_child = +last_child.getAttribute('data-value');
            number_last_child++;

            event.target.innerHTML += '<li class="ascent_target_element_li" data-value="' + number_last_child + '">Текст ' + number_last_child + '</li>';
        }

        if ((+event.target.getAttribute('data-value'))) {
            event.target.innerHTML += ' !';
            console.log('Содержимое пункта ' + (+event.target.getAttribute('data-value')) + ': ' + event.target.innerHTML);
        }
    });


    // Прекращение всплытия событий
    // метод stopPropagation объекта Event, event.stopPropagation()
    let events_emergence_stop_elem1_id = document.querySelector('#events_emergence_stop_elem1');
    let events_emergence_stop_elem2_id = document.querySelector('#events_emergence_stop_elem2');
    let events_emergence_stop_elem3_id = document.querySelector('#events_emergence_stop_elem3');

    events_emergence_stop_elem1_id.addEventListener('click', function (event) {
        event.preventDefault(); // отмена действия по умолчанию
        event.stopPropagation(); // остановим всплытие
        console.log('зеленый');
    });

    events_emergence_stop_elem2_id.addEventListener('click', function (event) {
        event.preventDefault(); // отмена действия по умолчанию
        event.stopPropagation(); // остановим всплытие
        console.log('голубой - первый обработчик');
    });

    events_emergence_stop_elem3_id.addEventListener('click', function (event) {
        event.preventDefault(); // отмена действия по умолчанию
        event.stopPropagation(); // остановим всплытие
        console.log('красный');
    });


    // Несколько обработчиков на элементе
    // Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены. То есть, stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают.

    events_emergence_stop_elem2_id.addEventListener('click', function (event) {
        event.preventDefault(); // отмена действия по умолчанию
        event.stopPropagation(); // остановим всплытие
        console.log('голубой - второй обработчик'); // все равно сработает
    });


    // Немедленное прекращение всплытия
    // Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод stopImmediatePropagation. Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

    events_emergence_stop_elem2_id.addEventListener('click', function (event) {
        event.preventDefault(); // отмена действия по умолчанию
        event.stopImmediatePropagation(); // остановим всплытие и обработку события
        console.log('голубой - третий обработчик'); // все равно сработает
    });

    events_emergence_stop_elem2_id.addEventListener('click', function () {
        console.log('голубой - четвёртый обработчик'); // уже не сработает из-за метода stopImmediatePropagation()
    });


    // Практическое применение, подходит для всплывающих блоков клик по внешнему блоку '#parent' скрывает всплывающий '#block', а клик по кнопке '#parent button' его показывается.
    let parent_id = document.querySelector('#parent');
    let parent_button_id = document.querySelector('#parent button');
    let block_id = document.querySelector('#block');

    parent_button_id.addEventListener('click', addActiveClassBlock);
    block_id.addEventListener('click', addActiveClassBlock);

    parent_id.addEventListener('click', function () {
        block_id.classList.remove('active');
    });

    function addActiveClassBlock(event) {
        event.preventDefault(); // отмена действия по умолчанию
        event.stopImmediatePropagation(); // остановим всплытие и обработку события
        block_id.classList.add('active');
    }


    // Погружение событий
    // На самом деле событие сначала идет сверху вниз (стадия перехвата), доходит до нашего элемента (стадия цели) и только потом начинает всплывать (стадия всплытия).
    // Для того, чтобы повесить обработчик события с учетом стадии перехвата в addEventListener есть третий необязательный параметр. Если он равен true - событие сработает на стадии перехвата, а если false - на стадии всплытия (это по умолчанию).

    let events_immersion_elem1_id = document.querySelector('#events_immersion_elem1');
    let events_immersion_elem2_id = document.querySelector('#events_immersion_elem2');
    let events_immersion_elem3_id = document.querySelector('#events_immersion_elem3');

    events_immersion_elem1_id.addEventListener('click', function () {
        console.log('зеленый - погружение');
    }, true);
    events_immersion_elem1_id.addEventListener('click', function () {
        console.log('зеленый - всплытие');
    }, false);

    events_immersion_elem2_id.addEventListener('click', function () {
        console.log('голубой - погружение');
    }, true);
    events_immersion_elem2_id.addEventListener('click', function () {
        console.log('голубой - всплытие');
    }, false);

    events_immersion_elem3_id.addEventListener('click', function () {
        console.log('красный - погружение');
    }, true);
    events_immersion_elem3_id.addEventListener('click', function () {
        console.log('красный- всплытие');
    }, false);


    // Навешивание обработчиков на новые элементы
    let button_new_elem_hanging_handler_id = document.querySelector('#button_new_elem_hanging_handler');
    let ul_new_elem_hanging_handler_id = document.querySelector('#ul_new_elem_hanging_handler');
    let li_new_elem_hanging_handler = ul_new_elem_hanging_handler_id.querySelectorAll('li');

    console.log(button_new_elem_hanging_handler_id);
    console.log(ul_new_elem_hanging_handler_id);
    console.log(li_new_elem_hanging_handler);

    // по клику на любую li ей в конец добавлялся ' !'
    for (let item of li_new_elem_hanging_handler) {
        item.addEventListener('click', addExclamationMark);
    }

    // клик на новую добавленный li и навешивание на него обработчика клика
    button_new_elem_hanging_handler_id.addEventListener('click', function () {
        // создаём пункт
        let item = document.createElement('li');
        item.innerHTML = 'item';

        // навешиваем на него обработчик клика
        item.addEventListener('click', addExclamationMark);

        // вставляем в конец списка
        ul_new_elem_hanging_handler_id.appendChild(item);
    });

    function addExclamationMark() {
        let this_ref = this;
        this_ref.innerHTML += ' !';
    }

    console.log(' ');


    // Делегирование событий
    let ul_delegating_events_id = document.querySelector('#ul_delegating_events');
    // Недостаток нашего кода проявится в том случае, когда внутри li будут какие-то вложенные теги. В нашем случае пусть это будут теги i.
    // В этом случае нажатие на тег i приведет к добавлению восклицательного знака в конец тега i, а не тега li, как мы хотели бы - ведь в event.target попадает именно тот тег, в котором случилось событие.
    ul_delegating_events_id.addEventListener('click', function (event) {
        // console.log(this);         // наш список
        // console.log(event.target); // пункт списка
        event.target.innerHTML += ' !';
    });


    // Универсальное делегирование событий
    let ul_universal_delegating_events_id = document.querySelector('#ul_universal_delegating_events');

    // Решить проблему выше можно с помощью метода closest
    // Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск.
    // элемент.closest('селектор')
    ul_universal_delegating_events_id.addEventListener('click', function (event) {
        // console.log(event.target.tagName);

        // Для клика по li и i
        let li = event.target.closest('li');
        if (li) {
            li.innerHTML += ' !';
        }

        // Добавление новых тегов
        if (event.target.tagName === 'UL') {
            let item = document.createElement('li');
            item.innerHTML = 'item <i>italic</i> item';

            ul_universal_delegating_events_id.appendChild(item);
        }

    });


});
