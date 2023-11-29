'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');

    // Многомерные массивы
    let arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'],];

    console.log(arr[0][1]); // выведет 'b'
    console.log(arr[0][0]); // выведет 'a'
    console.log(arr[1][2]); // выведет 'f'
    console.log(arr[1][1]); // выведет 'e'
    console.log(arr[2][0]); // выведет 'e'
    console.log(arr[3][2]); // выведет 'l'


    // Трехмерный массив
    arr = [
        [
            ['a', 'b'],
            ['c', 'd'],
        ],
        [
            ['e', 'f'],
            ['g', 'h'],
        ],
        [
            ['i', 'j'],
            ['k', 'l'],
        ],
    ];

    console.log(arr[0][0][0]); // выведет 'a'
    console.log(arr[2][1][0]); // выведет 'k'
    console.log(arr[1][1][1]); // выведет 'h'


    // Произвольные массивы
    arr = [
        [
            'a', 'b', [1, 2, 3], [4, 5],
        ],
        [
            'd', ['e', 'f'],
        ],
    ];
    console.log(arr[0][2][1]) // выведет 2


    // Перебор многомерных массивов
    arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
    for (let subArr of arr) {
        for (let elem of subArr) {
            console.log(elem);
        }
    }

    // С помощью вложенных циклов найдите сумму элементов этого массива.
    arr = [[1, 2, 3], [4, 5], [6]];
    // console.log(Array.isArray(arr));
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            for (let subEll of elem) {
                console.log(subEll);
            }
        } else {
            console.log(elem);
        }
    }

    // С помощью вложенных циклов найдите сумму элементов этого массива.
    arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let arrSumma = 0;
    for (let elem of arr) {

        if (Array.isArray(elem)) {
            for (let subEll of elem) {

                if (Array.isArray(subEll)) {
                    for (let subSubEll of subEll) {
                        arrSumma += subSubEll;
                    }
                } else {
                    arrSumma += subEll;
                }

            }
        } else {
            arrSumma += elem;
        }
    }
    console.log(arrSumma);


    // Перебор через обычный for
    arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }

    arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    arrSumma = 0;
    for (let i = 0, count = arr.length; i < count; i++) {

        if (Array.isArray(arr[i])) {
            for (let j = 0, count_1 = arr[i].length; j < count_1; j++) {

                if (Array.isArray(arr[i][j])) {
                    for (let k = 0, count_2 = arr[i][j].length; k < count_2; k++) {

                        arrSumma += arr[i][j][k];

                    }
                } else {
                    arrSumma += arr[i][j];
                }

            }
        } else {
            arrSumma += arr[i];
        }
    }
    console.log(arrSumma);


    // Заполнение многомерных массивов
    arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = []; // создаем подмассив

        for (let j = 0; j < 3; j++) {
            arr[i].push(j + 1); // заполняем подмассив числами
        }
    }
    console.log(arr);

    // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
    arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = [];

        for (let j = 0; j < 5; j++) {
            arr[i].push(j + 1);
        }
    }
    console.log(arr);

    // Сформируйте с помощью двух вложенных циклов следующий массив
    arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 4; j++) {
            arr[i].push('x');
        }
    }
    console.log(arr);

    // Сформируйте с помощью трех вложенных циклов следующий массив
    arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = [] // важно определить пустой массив, иначе выдаст ошибку

        for (let j = 0; j < 2; j++) {
            arr[i][j] = []; // важно определить пустой массив, иначе выдаст ошибку

            for (let k = 0; k < 5; k++) {
                arr[i][j].push(k + 1);
            }
        }
    }
    console.log(arr);


    // Заполнение многомерных массивов по порядку
    // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    arr = [];
    for (let i = 0, k = 1; i < 3; i++) { // k = 1;  счетчик
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i].push(k); // записываем счетчик
            k++; // увеличиваем счетчик
        }
    }
    console.log(arr);

    // [[1, 2], [3, 4], [5, 6], [7, 8]]
    arr = [];
    for (let i = 0, k = 1; i < 4; i++) { // k = 1;  счетчик
        arr[i] = [];

        for (let j = 0; j < 2; j++) {
            arr[i].push(k); // записываем счетчик
            k++; // увеличиваем счетчик
        }
    }
    console.log(arr);

    // [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
    arr = [];
    for (let i = 0, k = 2; i < 4; i++) { // k = 1;  счетчик
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i].push(k); // записываем счетчик
            k += 2; // увеличиваем счетчик
        }
    }
    console.log(arr);

    // [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
    arr = [];
    for (let i = 0, n = 1; i < 2; i++) { // k = 1;  счетчик
        arr[i] = []; // обратите внимание на эту строчку

        for (let j = 0; j < 2; j++) {
            arr[i][j] = []; // обратите внимание на эту строчку

            for (let k = 0; k < 2; k++) {

                arr[i][j].push(n); // записываем счетчик
                n++;
            }
        }
    }
    console.log(arr);

    // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    arr = [];

    for (let i = 0, k = 1; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k;
            k++;
        }
    }
    console.log(arr);


    // Многомерные объекты
    let obj = {
        a: {
            key1: 'a1',
            key2: 'a2',
            key3: 'a3',
        },
        b: {
            key1: 'b1',
            key2: 'b2',
            key3: 'b3',
        },
        c: {
            key1: 'c1',
            key2: 'c2',
            key3: 'c3',
        },
    }
    console.log(obj['a']['key1']); // выведет 'a1'
    console.log(obj.a.key1); // выведет 'a1'
    console.log(obj['a'].key1); // выведет 'a1'
    console.log(obj.a['key1']); // выведет 'a1'

    obj = {
        1: {
            1: 'a1',
            2: 'a2',
            3: 'a3',
        },
        2: {
            1: 'b1',
            2: 'b2',
            3: 'b3',
        },
        3: {
            1: 'c1',
            2: 'c2',
            3: 'c3',
        },
    }
    console.log(obj['2']['2']); // выведет 'b2'
    console.log(obj['3']['1']); // выведет 'c1'

    obj = {
        key1: {
            a: 1, b: 2, c: {
                d: 3,
                e: 4,
            }, f: 5,
        },
        key2: {
            g: 6, h: 7,
        },
    }
    console.log(obj.key1.c.d); // выведет 3
    console.log('br');


    // Перебор многомерных объектов
    obj = {
        d: 3,
        a: {
            1: 'a1',
            2: 'a2',
            3: 'a3',
        },
        b: {
            1: 'b1',
            2: 'b2',
            3: 'b3',
        },
        c: {
            1: 'c1',
            2: 'c2',
            3: 'c3',
        },
    }
    for (let key in obj) {
        let subObj = obj[key];

        if (typeof subObj === 'object' && !Array.isArray(subObj)) {

            for (let subKey in subObj) {
                console.log(subObj[subKey]);
            }

        } else {
            console.log(subObj);
        }
    }
    // console.log(typeof {}); // выведет 'object'
    // console.log( Array.isArray({}) ); // выведет false

    // Используя циклы, найдите сумму элементов этого объекта
    obj = {
        1: {
            1: {
                1: 111,
                2: 112,
                3: 113,
            },
            2: {
                1: 121,
                2: 122,
                3: 123,
            },
        },
        2: {
            1: {
                1: 211,
                2: 212,
                3: 213,
            },
            2: {
                1: 221,
                2: 222,
                3: 223,
            },
        },
        3: {
            1: {
                1: 311,
                2: 312,
                3: 313,
            },
            2: {
                1: 321,
                2: 322,
                3: 323,
            },
        },
        4: {
            1: 41,
        },
        5: 5,
    }
    for (let key in obj) {
        let subElem = obj[key];

        if (typeof subElem === 'object' && !Array.isArray(subElem)) {
            for (let key in subElem) {

                let subSubElem = subElem[key];
                if (typeof subSubElem === 'object' && !Array.isArray(subSubElem)) {
                    for (let key in subSubElem) {
                        console.log(subSubElem[key]);
                    }
                } else {
                    console.log(subSubElem);
                }

            }
        } else {
            console.log(subElem);
        }

    }


    // Многомерные структуры
    let days = {
        'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
        'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
    };
    console.log(days['ru'][0]); // выведет 'пн'
    console.log(days.ru[1]); // выведет 'вт'
    console.log(days['en'][2]); // выведет 'wd'

    let students = {
        'group1': ['name11', 'name12', 'name`13'],
        'group2': ['name21', 'name22', 'name23'],
        'group3': ['name31', 'name32', 'name33'],
    };
    console.log(students.group3[0]); // name31


    // Перебор многомерных структур
    students = {
        'group1': ['student11', 'student12', 'student13'],
        'group2': ['student21', 'student22', 'student23'],
        'group3': ['student31', 'student32'],
    };

    for (let group in students) {
        for (let name of students[group]) {
            console.log(name);
        }
    }
    console.log('');
    console.log('');

    let data = {
        1: [
            'data11',
            'data12',
            'data13',
        ],
        2: [
            'data21',
            'data22',
            'data23',
        ],
        3: [
            'data31',
            'data32',
            'data33',
        ],
        4: [
            'data41',
            'data42',
            'data43',
        ],
    };

    for (let number in data) {
        for (let number_data of data[number]) {
            console.log(number_data);
        }
    }
    console.log('');
    console.log('');

    data = [
        {
            1: 'data11',
            2: 'data12',
            3: 'data13',
        },
        {
            1: 'data21',
            2: 'data22',
            3: 'data33',
        },
        {
            1: 'data31',
            2: 'data32',
            3: 'data33',
        },
    ];

    for (let obj_data of data) {
        for (let number in obj_data) {
            console.log(obj_data[number]);
        }
    }
    console.log('');
    console.log('');

    data = [
        {
            1: [
                'data111',
                'data112',
                'data113',
            ],
            2: [
                'data121',
                'data122',
                'data123',
            ],
        },
        {
            1: [
                'data211',
                'data212',
                'data213',
            ],
            2: [
                'data221',
                'data222',
                'data223',
            ],
        },
        {
            1: [
                'data411',
                'data412',
                'data413',
            ],
            2: [
                'data421',
                'data422',
                'data423',
            ],
        },
    ];

    for (let obj_data of data) {
        for (let number in obj_data) {
            for (let data_content of obj_data[number]) {
                console.log(data_content);
            }
        }
    }
    console.log('');
    console.log('');


    // Массив объектов
    // Самой распространенной многомерной структурой является массив объектов
    let users = [
        {
            name: 'name1',
            surn: 'surn1',
        },
        {
            name: 'name2',
            surn: 'surn2',
        },
        {
            name: 'name3',
            surn: 'surn3',
        },
    ];

    for (let user of users) {
        console.log(user.name + ' ' + user.surn);
    }
    console.log('');
    console.log('');

    let employees = [
        {
            name: 'name1',
            salary: 300,
        },
        {
            name: 'name2',
            salary: 400,
        },
        {
            name: 'name3',
            salary: 500,
        },
    ];

    for (let employee of employees) {
        console.log(employee.name + ' ' + employee.salary);
    }
    console.log('');
    console.log('');

    employees = [
        {
            name: 'name1',
            salary: 300,
            age: 28,
        },
        {
            name: 'name2',
            salary: 400,
            age: 29,
        },
        {
            name: 'name3',
            salary: 500,
            age: 30,
        },
        {
            name: 'name4',
            salary: 600,
            age: 31,
        },
        {
            name: 'name5',
            salary: 700,
            age: 32,
        },
    ];

    for (let employee of employees) {
        if (employee.age >= 30) {
            console.log(employee.name + ' ' + employee.salary + ' ' + employee.age);
        }
    }
    console.log('');
    console.log('');


    // Ключи из переменных в многомерных структурах
    obj = {
        'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
        'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
    };

    let lang = 'ru';
    let day = 3;
    console.log(obj[lang][day]); // 'чт'

    let months = {
        'ru': [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь',
        ],
        'en': [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ],
    };
    lang = 'ru'; // может быть или 'ru' или 'en'
    let month = 5;   // число от 0 до 11
    console.log(months[lang][month]); // 'июнь'

    let affairs = {
        '2018': {
            11: {
                29: ['дело111', 'дело112', 'дело113'],
                30: ['дело121', 'дело122', 'дело123'],
            },
            12: {
                30: ['дело211', 'дело212', 'дело213'],
                31: ['дело221', 'дело222', 'дело223'],
            },
        },
        '2019': {
            12: {
                29: ['дело311', 'дело312', 'дело313'],
                30: ['дело321', 'дело322', 'дело323'],
                31: ['дело331', 'дело332', 'дело333'],
            }
        },
    }
    let year = '2018';
    month = 11;
    day = 29;
    let number = 1;
    console.log(affairs[year][month][day][number]);

    obj = {
        key1: {
            key2: '12',
            key3: '13',
        },
        key2: {
            key4: '24',
            key5: '25',
        },
    }
    let key1 = 'key2';
    let key2 = 'key4';
    console.log(obj[key1][key2]);


    // Добавление элементов в многомерные массивы
    users = [
        {
            name: 'name1',
            surn: 'surn1',
        },
        {
            name: 'name2',
            surn: 'surn2',
        },
        {
            name: 'name3',
            surn: 'surn3',
        },
    ];
    console.log(users);
    // добавим в этот массив еще одного юзера
    users.push({
        name: 'name4',
        surn: 'surn4',
    });
    console.log(users);

    employees = [
        {
            name: 'name1',
            salary: 300,
            age: 28,
        },
        {
            name: 'name2',
            salary: 400,
            age: 29,
        },
        {
            name: 'name3',
            salary: 500,
            age: 30,
        },
    ];
    console.log(employees);
    employees.push(
        {
            name: 'name4',
            salary: 600,
            age: 31,
        }
    );
    console.log(employees);


    // Добавление элементов в многомерные объекты
    students = {
        'group1': ['student11', 'student12', 'student13'],
        'group2': ['student21', 'student22', 'student23'],
        'group3': ['student31', 'student32'],
    };
    console.log(students.group3);
    // добавим еще одного студента в третью группу
    students.group3.push('student33');
    console.log(students.group3);

    // сделаем еще одну, четвертую группу и добавим в нее студента
    // сначала обязательно нужно объявить новую группу массивом
    students.group4 = [];
    // теперь можно добавлять студентов
    students.group4.push('student41');
    students.group4.push('student42');
    console.log(students);

    affairs = {
        '2019-12-28': ['data11', 'data12', 'data13'],
        '2019-12-29': ['data21', 'data22', 'data23'],
        '2019-12-30': ['data31', 'data32', 'data33'],
    };

    affairs['2019-12-29'].push('data24');
    console.log(affairs);
    affairs['2019-12-31'] = [];
    affairs['2019-12-31'].push('data41');
    affairs['2019-12-31'].push('data42');
    console.log(affairs);

    students = {
        'group1': {
            'subgroup11': ['student111', 'student112', 'student113'],
            'subgroup12': ['student121', 'student122', 'student123'],
        },
        'group2': {
            'subgroup21': ['student211', 'student212', 'student213'],
            'subgroup22': ['student221', 'student222', 'student223'],
        },
        'group3': {
            'subgroup31': ['student311', 'student312', 'student313'],
            'subgroup32': ['student321', 'student322', 'student323'],
        },
    };
    // Добавьте нового студента в подгруппу 'subgroup11'.
    students.group1.subgroup11.push('student114');
    console.log(students.group1.subgroup11);
    // Добавьте в первую группу еще одну подгруппу.
    students.group1['subgroup13'] = [];
    console.log(students.group1);
    // Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
    students['group4'] = [];
    students['group4']['subgroup41'] = [];
    students['group4']['subgroup41'].push('student411');
    students['group4']['subgroup41'].push('student412');
    console.log(students.group4);
    console.log(students);


});
