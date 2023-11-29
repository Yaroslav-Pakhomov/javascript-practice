'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    // alert('JS');

    // массив строк
    let arr = ['a', 'b', 'c']

    // массив чисел
    arr = [1, 2, 3]

    // все допустимые типы данных
    arr = [1, 2, 'a', 'b', null, true, false]

    // alert(arr)
    console.log(arr)
    // Длинна массива
    console.log(arr.length) // выведет 7
    console.log(arr[arr.length - 1]) // выведет 'false'

    // Элементы массива
    console.log(arr[0]) // выведет 1
    console.log(arr[1]) // выведет 2
    console.log(arr[2]) // выведет 'a'

    // Изменение элементов массива
    arr = ['a', 'b', 'c']
    arr[0] = '!'
    console.log(arr) // выведет ['!', 'b', 'c']

    // Перезапись элементов
    arr = ['a', 'b', 'c']
    arr[0] = arr[0] + '!'
    arr[1] = arr[1] + '!'
    arr[2] = arr[2] + '!'
    console.log(arr) // выведет ['a!', 'b!', 'c!']

    // Инкремент и декремент
    arr = [1, 2, 3, 4]
    arr[0]++
    ++arr[1]
    arr[2]--
    --arr[3]
    console.log(arr) // выведет [2, 3, 2, 3]

    // Добавление элементов по ключам
    arr = ['a', 'b', 'c']
    arr[3] = 'd'
    console.log(arr) // выведет ['a', 'b', 'c', 'd']

    arr = [1, 2, 3]
    arr[3] = 4
    arr[4] = 5
    console.log(arr)

    // Разреженные массивы
    arr = ['a', 'b', 'c']
    arr[4] = '!'
    console.log(arr) // выведет ['a', 'b', 'c', undefined, '!']
    console.log(arr.length) // выведет 5

    arr = []
    arr[3] = 'a'
    arr[8] = 'b'
    console.log(arr.length) // выведет 9

    // Добавление элементов через push
    arr = []
    arr.push('a')
    arr.push('b')
    arr.push('c')
    console.log(arr) // выведет ['a', 'b', 'c']

    arr = [1, 2, 3];
    arr.push(4);
    arr.push(5);

    // Ключи массивов из переменных
    arr = ['a', 'b', 'c'];
    let key = 0; // запишем ключ в переменную
    console.log(arr[key]); // выведет 'a'

    arr = [1, 2, 3, 4, 5];
    let key1 = 1;
    let key2 = 2;
    console.log(arr[key1]);
    console.log(arr[key2]);

    // Оператор delete в массивах
    arr = ['a', 'b', 'c'];
    delete arr[1];
    console.log(arr); // выведет ['a',, 'c']
    console.log(arr.length); // выведет 3

    arr = ['a', 'b', 'c', 'd', 'e'];
    delete arr[2]
    delete arr[3]
    console.log(arr)
    console.log(arr.length)

    // Практика
    arr = [1, 2, 3, 4, 5];
    console.log(arr[arr.length - 1]);

    console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

    console.log(arr.length);

})
