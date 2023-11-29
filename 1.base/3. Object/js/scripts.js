'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');

    // Объекты
    // Пустой объект
    let obj = {};
    // Объект с данными
    obj = {1: 'a', 2: 'b', 3: 'c'};
    // элемент объекта по его ключу
    console.log(obj[1]); // выведет 'a'

    let week = {1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вс'};
    console.log(week[1]);
    console.log(week[2]);
    console.log(week[3]);
    console.log(week[4]);
    console.log(week[5]);
    console.log(week[6]);
    console.log(week[7]);


    // Вывод всего объекта
    // alert(week); // выведет [Object object]

    console.log(week); // выведет сам объект

    // Строковые ключи объектов, ключи-строки в кавычки не брать
    obj = {a: 1, b: 2, c: 3};
    console.log(obj['a']); // выведет 1

    let FIO = {name: 'User_name', surname: 'User_surname', patronymic: 'User_patronymic'};

    console.log(FIO['name']);
    console.log(FIO['surname']);
    console.log(FIO['patronymic']);


    // Свойства объектов
    let date = {year: '2023', month: '07', day: '16'};

    console.log(date.year + '-' + date.month + '-' + date.day);

    // Ограничения на ключи объектов
    // Мы можем писать без кавычек не все ключи объектов, а только те, которые удовлетворяют следующим ограничениям: они не могут начинаться с цифры и не могут содержать внутри себя дефис, пробел и тому подобные вещи.

    // Если строка нарушает ограничение, то ее нужно брать в кавычки: '1key' , 'key-2'

    obj = {
        '1a': 1,
        'b2': 2,
        'с-с': 3,
        'd 4': 4,
        'e5': 5
    };

    console.log(obj['1a']);
    console.log(obj.b2);
    console.log(obj['с-с']);
    console.log(obj['d 4']);
    console.log(obj.e5);

    // Изменение элементов объектов
    obj = {a: 1, b: 2, c: 3};
    obj['a'] = '!';
    obj.b = '!';

    console.log(obj)

    obj = {x: 1, y: 2, z: 3};
    // obj.x = obj.x ** 2
    obj.x **= 2
    obj.y **= 2
    obj.z **= 2
    console.log(obj)


    // Добавление элементов в объекты
    obj = {};
    // Добавим новые элементы
    obj['a'] = 1;
    obj['b'] = 2;
    obj['c'] = 3;
    // Альтернативный синтаксис
    obj.x = 4;
    obj.y = 5;
    obj.z = 6;
    console.log(obj);


    // Неупорядоченность объектов
    obj = {3: 'c', 1: 'a', 2: 'b', 7: 'a', 50: 'b', 23: 'c'};

    console.log(obj[1]); // выведет 'a'
    console.log(obj[2]); // выведет 'b'
    console.log(obj[3]); // выведет 'c'
    console.log(obj[7]); // выведет 'a'
    console.log(obj[50]); // выведет 'b'
    console.log(obj[23]); // выведет 'c'


    // Массив ключей объекта
    let keys = Object.keys(obj);
    console.log(keys); // выведет ['1', '2', '3', '7', '23', '50']


    // Длина объекта, определяем по массиву ключей
    console.log(obj.length); // выведет undefined
    console.log(Object.keys(obj).length); // выведет 6


    // Ключи объектов из переменных
    console.log(obj[keys[0]]); // выведет 'a', ключ '1'
    console.log(obj[keys[4]]); // выведет 'c', ключ '23'
    let key_50 = keys[5];
    console.log(obj[key_50]); // выведет 'b', ключ '50'


    // Ошибка обращения к элементу по ключу
    // При обращению к элементу объекта через квадратные скобки имена ключей нужно брать в кавычки, а имена переменных - нет.
    obj = {x: 1, y: 2, z: 3};
    console.log(obj['x']);
    let key = 'y';
    console.log(obj[key]);


    // Вычисляемые свойства
    // При объявлении объекта имена его свойств могут браться из переменных. Такие свойства называются вычисляемыми.

    key = 'a';
    obj = {
        [key]: 1, // обязательно нужны скобки [], иначе будет воспринята, как строка
        b: 2,
        c: 3
    };
    console.log(obj);

    obj = {
        [key + '1']: 1,
        [key + '2']: 2,
        [key + '3']: 3
    };
    console.log(obj);

    let key1 = 'x';
    let key2 = 'y';
    let key3 = 'z';

    obj = {
        [key1]: 10,
        [key2]: 20,
        [key3]: 30,
    }
    console.log(obj);


    // Оператор in
    // С помощью оператора in можно проверять наличие свойства в объекте.
    obj = {a: 1, b: 2, c: 3};
    console.log('b' in obj); // выведет true
    console.log('x' in obj); // выведет false


    // Оператор delete
    delete obj.b;
    console.log(obj); // выведет {a: 1, c: 3}
    console.log('b' in obj); // выведет false


    // Типизация объектов
    console.log(typeof {}); // выведет 'object'
    console.log(typeof {x: 1, y: 2, z: 3});

    obj = {x: 1, y: 2, z: 3};
    console.log(typeof obj);
    console.log(typeof obj['x']);


    // Массивы как объекты
    console.log(typeof []); // выведет 'object'
    console.log(typeof {x: 1, y: 2, z: 3});
    console.log(typeof [1, 2, 3]);

    let arr = [1, 2, 3];
    console.log(typeof arr);
    console.log(typeof arr[0]);
    arr = ['1', '2', '3'];
    console.log(typeof arr[0]);


    // Отличаем массивы от объектов функция Array.isArray()
    console.log(Array.isArray([])); // выведет true
    console.log(Array.isArray({})); // выведет false
    console.log(Array.isArray([1, 2, 3])); // выведет true
    console.log(Array.isArray({x: 1, y: 2, z: 3})); // выведет false


    // Объекты и примитивы
    // Строки, числа, логические значения считаются простыми, или примитивными типами данных.
    // В JavaScript семь примитивных типов данных: string, number, boolean, null, undefined, symbol, bigint.
    let test = {x: 1, y: 2, z: 3};
    console.log(test); // object
    console.log(test.x); // number

    test = [1, 2, 3];
    console.log(test); // object array
    console.log(test[1]); // number


    // Передача объектов по ссылке
    let obj1 = {a: 1, b: 2, c: 3};
    let obj2 = obj1;
    obj2.a = '!';
    // изменения будут видны и в другой переменной:
    console.log(obj1); // {a: '!', b: 2, c: 3}

    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    arr1[0] = 'a';
    console.log(arr2);

    arr1 = [1, 2, 3];
    arr2 = arr1;
    arr1[0] = 'a';
    arr2[1] = 'b';
    console.log(arr1);

    arr1 = [1, 2, 3];
    arr2 = arr1;
    arr1[0] = 'a';
    arr2[0] = 'b';
    console.log(arr2);


    // Константы с массивами или объектами
    // JavaScript не разрешает изменять значения этих констант, но изменять свойства объектов и значения элементов массивов - можно.
    const obj5 = {a: 1, b: 2, c: 3};
    // obj5 = 123; // ошибка
    // obj5 = { x: 1, y: 2, z: 3 }; // ошибка
    obj5.a = '+'; // работает!
    console.log(obj5);

    const arr5 = ['a', 'b', 'c'];
    arr5[1] = '!';
    console.log(arr5);

    const arr3 = ['a', 'b', 'c'];
    // arr3 = [1, 2, 3]; // ошибка
    console.log(arr3);

    const arr4 = ['a', 'b', 'c'];
    // arr4 = ['a', 'b', 'c']; // ошибка
    console.log(arr4);


    // Подход программирования через константы
    // В последнее время в JavaScript возник новый подход к объявлению переменных. Суть подхода в том, что вместо let мы везде используем const, кроме тех случаев, когда мы точно знаем, что значение будет переменным.

    // const a = 1;
    // const b = 2;
    // const c = a + b;

    // console.log(c);

    // Этот подход очень популярный и вы можете встретить его в различных сторонних источниках.

    // Я, однако, против этого модного подхода. Дело в том, что константы были придуманы для хранения значений типа числа Пи. То есть для таких значений, которые предопределены в вашей программе. Объявление же всех переменных константами противоречит этой идее.

    // Кроме того, не очень логично поведение массивов и объектов - мы объявляем их константами, при этом спокойно можем изменять их свойства. Что это за константы, если их можно изменять?

    // Часто объявление объектов константами используется для того, чтобы мы не смогли сменить тип данных - вместо объекта записать примитив. Но если нам нужен контроль типов, которого нет по умолчанию в JavaScript, то лучше воспользоваться его диалектом TypeScript.

    // В общем, вы можете пользоваться этим подходом, раз такая мода, но я против и дальше в учебнике переменные по-прежнему будут объявляться через let, как это было задумано авторами языка.

    // const arr6 = [1, 2, 3, 4, 5];
    // const res = arr6[1] + arr6[2];

    // console.log(res);


    obj = {x: 1, y: 2, z: 3};
    console.log(obj['x']);

    key = 'x';
    console.log(obj[key]);

    let sum = obj.x + obj.y + obj.z;
    console.log(sum);

    // Все ключи массива
    keys = Object.keys(obj);
    console.log(keys);
    console.log(keys.length);

})
