'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event);
    console.log(' ');
    console.log(' ');


    // Основы работы с функцией setInterval
    // setInterval запускает заданный код через определенные промежутки времени.
    // Первым параметром она принимает исходный код функции, а вторым параметром - интервал, через который эта функция будет автоматически вызываться. Второй параметр задается в миллисекундах (1000 миллисекунд = 1 секунда).

    function timerForSetInterval() {
        console.log('!');
    }

    timerForSetInterval();

    // каждую секунду будет выводить в консоль
    // setInterval(timerForSetInterval, 1000);

    // можно в первый параметр setInterval передать анонимную функцию
    // setInterval(function() {
    //   console.log('!');
    // }, 1000);

    // Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
    // setInterval(function () {
    //   console.log('Таймер 3с.');
    // }, 3000);


    // Счетчик через функцию setInterval
    let i = 0; // глобальная переменная

    // function increaseI() {
    //   paragraph_second_id.innerHTML = ++i;
    // }
    // setInterval(increaseI, 1000);

    // более компактный вид кода выше
    let paragraph_second_id = document.querySelector('#paragraph_second');
    setInterval(() => {
        paragraph_second_id.innerHTML = String(++i);
    }, 1000);


    // Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
    let hundred = 100;
    let paragraph_counter_id = document.querySelector('#paragraph_counter');

    setInterval(() => {
        paragraph_counter_id.innerHTML = String(hundred--);
    }, 1000);


    // Остановка таймера
    // Чтобы останавливать таймер, для этого вам необходимо знать, что каждый таймер, запущенный с помощью функции setInterval, имеет уникальный номер. Этот номер возвращает функция setInterval в момент запуска таймера.
    // Для остановки таймера используется функция clearInterval. Функция принимает уникальный номер того таймера, который нужно остановить.

    let i1 = 0;
    let paragraph_stop_second_id = document.querySelector('#paragraph_stop_second');

    let timerId = setInterval(function () {
        if (i1 >= 10) {
            clearInterval(timerId);
        }

        paragraph_stop_second_id.innerHTML = String(i1++);
    }, 1000);

    console.log(timerId); // выведет номер таймера


    // Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

    let ten = 10;
    let paragraph_stop_counter_id = document.querySelector('#paragraph_stop_counter');

    let timer_stop_counter_id = setInterval(function () {
        if (ten <= 0) {
            clearInterval(timer_stop_counter_id);
        }

        paragraph_stop_counter_id.innerHTML = String(ten--);
    }, 1000);


    // Кнопка для запуска таймера
    let paragraph_start_second_id = document.querySelector('#paragraph_start_second');
    let button_start_second_id = document.querySelector('#button_start_second');
    let button_stop_second_id = document.querySelector('#button_stop_second');

    button_start_second_id.addEventListener('click', methodStartSecond);
    button_stop_second_id.addEventListener('click', methodStopSecond);

    function methodStartSecond() {
        let i2 = 0;
        paragraph_start_second_id.innerHTML = (isNaN(+paragraph_start_second_id.innerHTML)) ? i2 : paragraph_start_second_id.innerHTML;

        let timer_start_second_id = setInterval(function () {
            paragraph_start_second_id.innerHTML++;
        }, 1000);

        paragraph_start_second_id.setAttribute('data-counter-id', String(timer_start_second_id));
        // console.log(timer_start_second_id);
        // console.log(paragraph_start_second_id);

        // Если на нашу кнопку сделать несколько кликов. В этом случае каждый клик будет приводить к запуску нового таймера, чтобы этого не было нужно отвязать обработчик.
        // То есть, к примеру, три нажатия на кнопку приведут к тому, что будет запущено три таймера, и каждый из этих таймеров будет выводить значение.
        this.removeEventListener('click', methodStartSecond); // отвязываем обработчик

    }

    function methodStopSecond() {
        let timer_start_second_id = paragraph_start_second_id.getAttribute('data-counter-id');
        clearInterval((+timer_start_second_id));
    }


    // Сделайте кнопку, по нажатию на которую в консоль будет выводиться обратный отсчет, начиная с 100.

    let paragraph_start_counter_id = document.querySelector('#paragraph_start_counter');
    let button_start_counter_id = document.querySelector('#button_start_counter');

    button_start_counter_id.addEventListener('click', methodStartCounter);

    function methodStartCounter() {
        let hundred1 = 100;

        paragraph_start_counter_id.innerHTML = String(hundred1);

        let timer_start_counter_id = setInterval(function () {
            paragraph_start_counter_id.innerHTML--;

            if ((+paragraph_start_counter_id.innerHTML) <= 0) {
                clearInterval(timer_start_counter_id);
            }

        }, 1000);

        this.removeEventListener('click', methodStartCounter);
    }


    // Кнопки для остановки
    let paragraph_start_stop_second_id = document.querySelector('#paragraph_start_stop_second');
    let button_start_second_new_id = document.querySelector('#button_start_second_new');
    let button_stop_second_new_id = document.querySelector('#button_stop_second_new');
    // ID таймера в функции methodStartSecondNew
    let timer_start_second_new_id;

    button_start_second_new_id.addEventListener('click', methodStartSecondNew);
    button_stop_second_new_id.addEventListener('click', methodStopSecondNew);

    function methodStartSecondNew() {

        paragraph_start_stop_second_id.innerHTML = (isNaN(+paragraph_start_stop_second_id.innerHTML)) ? 0 : paragraph_start_stop_second_id.innerHTML;

        timer_start_second_new_id = setInterval(function () {
            paragraph_start_stop_second_id.innerHTML++;
        }, 1000);

    }

    function methodStopSecondNew() {
        clearInterval(timer_start_second_new_id);
    }


    // Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

    // По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.

    let paragraph_start_stop_counter_id = document.querySelector('#paragraph_start_stop_counter');
    let button_start_counter_new_id = document.querySelector('#button_start_counter_new');
    let button_stop_counter_new_id = document.querySelector('#button_stop_counter_new');

    let timer_start_counter_new_id;

    button_start_counter_new_id.addEventListener('click', methodStartCounterNew);
    button_stop_counter_new_id.addEventListener('click', methodStopCounterNew);


    function methodStartCounterNew() {

        paragraph_start_stop_counter_id.innerHTML = (isNaN(+paragraph_start_stop_counter_id.innerHTML)) ? 10 : paragraph_start_stop_counter_id.innerHTML;

        timer_start_counter_new_id = setInterval(function () {
            paragraph_start_stop_counter_id.innerHTML--;

            if (paragraph_start_stop_counter_id.innerHTML <= 0) {
                clearInterval(timer_start_counter_new_id);
            }
        }, 1000);

    }

    function methodStopCounterNew() {
        clearInterval(timer_start_counter_new_id);
    }


    // По нажатию на кнопку запускает текущее время, выводящий в параграф текущий момент времени.
    let paragraph_start_stop_stopwatch_id = document.querySelector('#paragraph_start_stop_stopwatch');
    let start_stopwatch_id = document.querySelector('#start_stopwatch');
    let stop_stopwatch_id = document.querySelector('#stop_stopwatch');

    let timer_stopwatch_id;

    start_stopwatch_id.addEventListener('click', startCurrentTimes);
    stop_stopwatch_id.addEventListener('click', stopCurrentTimes);

    function startCurrentTimes() {
        timer_stopwatch_id = setInterval(function () {
            let date = new Date;
            let hours = (+date.getHours()) < 10 ? '0' + date.getHours() : date.getHours();
            let minutes = (+date.getMinutes()) < 10 ? '0' + date.getMinutes() : date.getMinutes();
            let seconds = (+date.getSeconds()) < 10 ? '0' + date.getSeconds() : date.getSeconds();

            paragraph_start_stop_stopwatch_id.innerHTML = (hours + ' : ' + minutes + ' : ' + seconds);
        }, 1000);

        this.removeEventListener('click', startCurrentTimes);
    }

    function stopCurrentTimes() {
        paragraph_start_stop_stopwatch_id.innerHTML = 'Текущее время';
        clearInterval(timer_stopwatch_id);

        start_stopwatch_id.addEventListener('click', startCurrentTimes);
    }


    // Практика на таймеры и DOM. Практика на таймеры и работу с DOM
    // Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
    // Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю, таймер прекратил свою работу.
    let input_work_with_DOM_id = document.querySelector('#input_work_with_DOM');

    let timer_work_with_DOM_id = setInterval(function () {
        +input_work_with_DOM_id.value;
        input_work_with_DOM_id.value--;

        if (input_work_with_DOM_id.value <= 0) {
            clearInterval(timer_work_with_DOM_id);
        }

    }, 1000);


    // Задержка перед выполнением, функция setTimeout
    let input_delay_id = document.querySelector('#input_delay');
    let paragraph_delay_id = document.querySelector('#paragraph_delay');

    input_delay_id.addEventListener('click', setMethodDelay);

    function setMethodDelay() {
        setTimeout(function () {
            paragraph_delay_id.innerHTML = 'Задержка 10с.';
        }, 10000);
    }


    // Запуск таймера
    // Функция setTimeout и не предназначена для создания таймеров, однако их все равно можно делать с ее помощью, если воспользоваться рекурсией.
    let paragraph_delay_timer_start_id = document.querySelector('#paragraph_delay_timer_start');
    let i2 = 0;

    function timer() {
        setTimeout(function () {
            paragraph_delay_timer_start_id.innerHTML = String(++i2);

            // запускаем, только если счетчик меньше 10
            if (i2 <= 10) {
                timer(); // вызовем сами себя
            }
        }, 1000);
    }

    timer();


});
