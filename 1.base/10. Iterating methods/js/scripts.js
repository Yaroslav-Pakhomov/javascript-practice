'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // alert('JS');

    // Метод map
    // Синтаксис:
    // let новый массив = массив.map(function(элемент, индекс, массив) {
    //     код
    //     return измененный элемент;
    // });

    let arr = [1, 2, 3, 4, 5];

    let res = arr.map(function (elem, index) {
        return elem * index;
    });

    console.log(res); // [0, 2, 6, 12, 20]

    // Перебор многомерных массивов
    arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    let result = arr.map(function (elem) {
        return elem.map(function (num) {
            return num * num;
        });
    });

    console.log(result); // [[1, 4, 9], [16, 25, 36], [49, 64, 81]]


    // Метод forEach
    // Синтаксис
    // массив.forEach(function(элемент, индекс, массив) {
    //     код, который выполнится для всех элементов
    // });

    arr = [1, 2, 3, 4, 5];
    let sum = 0;

    arr.forEach(function (elem) {
        sum += elem * elem;
    });

    console.log(sum); // 15

    // Метод filter
    // Синтаксис
    // let новый массив = массив.filter(function(элемент, индекс, массив) {
    //     код
    //     return true или false
    // });

    arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
    res = arr.filter(elem => {
        return elem >= 0;
    });

    console.log(res); // [5, 1, 1, 3, 4]

    // Сокращение записи выше
    arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
    res = arr.filter(elem => elem > 0);

    console.log(res);

    // При необходимости в третий параметр можно передать сам массив:
    // let res = arr.filter(function(elem, index, arr) {
    //     тут будет доступен массив arr
    // });


    // Метод every
    // Синтаксис
    // Метод every проверяет элементы массива в соответствии с переданной функцией.
    // При необходимости в третий параметр можно передать сам массив:
    // массив.every(function(элемент, индекс, массив) {
    //     return true или false;
    // });

    arr = [1, 2, 3, 4, 5];

    let check = arr.every(function (elem) {
        return elem >= 0;
    });

    console.log(check); // true


    // Метод some
    // Следующий метод some проверяет элементы массива и возвращает true, если хотя бы для одного элемента коллбэк вернул true, в противном случае метод возвращает false.
    // Есть хотя бы одно четное число:
    arr = [2, 4, 6, 8];

    result = arr.some(elem => elem % 2 === 0);
    console.log(result);


    // Метод find
    // Метод find помогает найти первый элемент в массиве согласно переданному в параметре коллбэку.

    // Найдем элемент массива, длина которого равна 2:

    arr = ['abc', 'defg', 'kl', 'mn'];
    res = arr.find(function (elem) {
        return elem.length === 2;
    });

    console.log(res); // 'kl'

    // Метод findIndex
    // Метод findIndex позволяет найти индекс первого элемента согласно переданному в параметре коллбэку. Если элемент не найден, то возвращается -1.

    // Синтаксис
    // массив.findIndex(функция);

    // найдем индекс первого четного элемента массива:
    arr = [1, 2, 3, 4, 5];
    res = arr.findIndex(function (elem) {
        return elem % 2 === 0;
    });

    console.log(res); // 1

    // Не соответствует ни один элемент в массиве:
    arr = [1, 2, 3, 4, 5];
    res = arr.findIndex(function (elem) {
        return elem < 0;
    });

    console.log(res); // -1


    // Метод findLast
    // Метод findLast ищет первый элемент с конца массива согласно переданному в параметре коллбэку. Если элемента нет, то в результат возвращается undefined.

    // Синтаксис
    // массив.findLast(функция);

    arr = [1, 2, 3, 4, 5];
    res = arr.findLast(function (elem) {
        return elem > 0;
    });

    console.log(res); // 5

    // Метод findLastIndex
    // Метод findLastIndex помогает найти индекс первого элемента с конца массива, соответствующий условию согласно переданному в параметре коллбэку. Если элемента нет, то возвращается undefined.

    // Синтаксис
    // массив.findLastIndex(функция);

    // Найдем индекс положительного числа в массиве:
    arr = [-12, -13, 14, 15];
    res = arr.findLastIndex(function (elem) {
        return elem > 0;
    });

    console.log(res); // 3

    // Давайте найдем индекс элемента, которого нет в массиве:
    arr = ['a', 'b', 'c', 'd'];
    res = arr.findLastIndex(function (elem) {
        return elem === 'f';
    });

    console.log(res); // -1


    // Метод reduce
    // Синтаксис
    // массив.reduce(function(промежуточный результат, элемент, индекс, массив) {
    //     return новый промежуточный результат;
    // }, начальное значение);

    // Найдем сумму элементов массива:
    arr = [1, 2, 3, 4, 5, 6];
    res = arr.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);

    console.log(res); // 21

    // Найдем сумму всех положительных чисел массива:
    arr = [1, -2, -3, 4, 5, -6];
    res = arr.reduce(function (sum, elem) {
        if (elem >= 0) {
            return sum + elem;
        } else {
            return sum;
        }
    });

    console.log(res); // 10

    // Метод reduceRight
    // Метод reduceRight работает точно так же как и reduce - смотрите его для полного понимания. Единственное отличие: reduce перебирает элементы слева направо, а reduceRight - справа налево.

    // Синтаксис
    // массив.reduceRight(function(промежуточный результат, элемент, индекс, массив) {
    //     return новый промежуточный результат;
    // }, начальное значение);

    // Найдем сумму элементов массива:
    arr = [1, 2, 3, 4, 5, 6];
    res = arr.reduceRight(function (sum, elem) {
        return sum + elem;
    }, 0);

    console.log(res); // 21

    // Сольем двумерный массив в одномерный:
    arr = [['a', 'b'], ['c'], ['d', 'e']];
    res = arr.reduceRight(function (elem1, elem2) {
        return elem1.concat(elem2);
    }, []);

    console.log(res); // ['d', 'e', 'c', 'a', 'b']

});
