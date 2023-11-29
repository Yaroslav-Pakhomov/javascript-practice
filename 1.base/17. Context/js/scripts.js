'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    console.log(event);
    console.log(' ');
    console.log(' ');


    // Основы работы с контекстом
    let context_base_work1_id = document.querySelector('#context_base_work1');
    let context_base_work2_id = document.querySelector('#context_base_work2');

    context_base_work1_id.addEventListener('blur', getContextBaseWork);
    context_base_work2_id.addEventListener('blur', getContextBaseWork);

    function getContextBaseWork() {
        console.log(this.value); // по потери фокуса выведет содержимое input
    }


    // Контекст непривязанной функции
    console.log(this); // в this ссылка на window
    function contextUnboundFunc() {
        console.log(this); // ссылка на окно window
    }

    // Если режим нестрогий, то в this будет храниться ссылка на window. А если режим строгий, то в this будет храниться undefined.
    contextUnboundFunc();


    // Итог
    // В любой функции можно написать this, это не приведет к каким-либо ошибкам JavaScript. Но вот что именно будет лежать в этом this не определено до момента вызова функции. Причем при разных вызовах функции this может принимать разное значение. Все зависит от контекста, в котором была вызвана функция.


    // Потеря контекста. Решение проблемы с контекстом.
    let context_lost_id = document.querySelector('#context_lost');
    context_lost_id.addEventListener('blur', contextLostParent);

    function contextLostParent() {
        console.log(this); // выведет ссылку на наш инпут


        // Первое решение проблемы с контекстом
        let this_ref = this;

        function contextLostChild() {
            console.log(this); // выведет undefined, потеря контекста во внутренней функции

            console.log(this_ref);
            console.log(this_ref.value);
        }

        contextLostChild(); // вызываем внутреннюю функцию


        // Второе решение проблемы с контекстом
        function contextLostChild2(param) {
            // в переменной param лежит переданное содержимое this
            console.log(param.value);
        }

        contextLostChild2(this); // передаем параметром this


        // Третье решение проблемы с контекстом
        // использование стрелочных функций
        let context_lost_child3 = () => {
            console.log(this.value);
        }
        context_lost_child3();

    }


    // Привязывание контекста через метод call
    // Рассмотрим методы, которые позволяют принудительно указать, в каком контексте вызывается функция (то есть принудительно сказать, чему равен this)
    let binding_method_call_id = document.querySelector('#binding_method_call');

    function getBindingMethodCall() {
        console.log(this.value);
    }

    getBindingMethodCall.call(binding_method_call_id);

    let binding_method_call1_id = document.querySelector('#binding_method_call1');
    let binding_method_call2_id = document.querySelector('#binding_method_call2');
    let binding_method_call3_id = document.querySelector('#binding_method_call3');

    getBindingMethodCall.call(binding_method_call1_id);
    getBindingMethodCall.call(binding_method_call2_id);
    getBindingMethodCall.call(binding_method_call3_id);


    // Метод call с параметрами
    function methodCallWithParams(param1, param2) {
        console.log(this.value + ' ' + param1 + ' ' + param2);
    }

    let param1 = 'param_1'
    let param2 = 'param_2';
    methodCallWithParams.call(binding_method_call_id, param1, param2);


    // Добавьте метод call так, чтобы на экран вывелось 'hello, John Smith'. Слово 'hello' должно взяться из value инпута, а 'John' и 'Smith' должны быть параметрами функциями.
    let binding_method_call_with_params_id = document.querySelector('#binding_method_call_with_params');

    function methodCallWithParamsHello(surname, name) {
        console.log(this.value + ', ' + name + ' ' + surname);
    }

    methodCallWithParamsHello.call(binding_method_call_with_params_id, 'Smith', 'John');
    console.log(' ');


    // Привязывание контекста через метод apply
    // Метод apply работает практически так же, как и метод call. Разница заключается в том, что в apply параметры передаются в виде массива, а не перечисляются через запятую. В зависимости от задачи бывает удобен то один, то другой метод.
    // func.apply(elem, [param1, param2]);
    let binding_method_apply_id = document.querySelector('#binding_method_apply');

    function methodApplyWithParamsHello(surname, name) {
        console.log(this.value + ', ' + name + ' ' + surname);
    }

    methodApplyWithParamsHello.apply(binding_method_apply_id, ['Smith', 'John']);
    console.log(' ');


    // Привязывание контекста через метод bind
    // Метод bind позволяет навсегда привязать контекст к функции. Своим результатом этот метод возвращает новую функцию, внутри которой this будет иметь жестко заданное значение.
    let binding_method_bind_id = document.querySelector('#binding_method_bind');

    function methodBindWithParamsHello(surname, name) {
        console.log(this.value + ', ' + name + ' ' + surname);
    }

    let method_bind = methodBindWithParamsHello.bind(binding_method_bind_id);
    method_bind('Kein', 'Salomon');  // выведет 'text 1 2'

    // Не обязательно записывать результат работы bind в новую функцию newFunc, можно просто перезаписать func. После этого func будет такой же функцией, как и была, но с жестко связанным this.
    // methodBindWithParamsHello = methodBindWithParamsHello.bind(binding_method_bind_id);
    let method_bind_with_params_hello = methodBindWithParamsHello.bind(binding_method_bind_id, 'Smith', 'John');
    method_bind_with_params_hello();
    method_bind_with_params_hello = methodBindWithParamsHello.bind(binding_method_bind_id, 'Luis', 'Eric');
    method_bind_with_params_hello();


});
