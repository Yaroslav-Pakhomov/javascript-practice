'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // alert('JS');


    // Оператор spread
    // Когда оператор spread стоит перед массивом, он разделяет этот массив на отдельные значения, превращая массив в набор параметров, необходимых для вызова функции.
    let arr = [1, 2, 3, 4, 5];

    function func1(num1, num2, num3, num4, num5) {
        return num1 + num2 + num3 + num4 + num5;
    }

    console.log(func1(...arr));

    function func2(n1, n2, n3, n4, n5, n6, n7, n8) {
        return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
    }

    console.log(func2(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));


    // Экстремальные значения массива через spread
    arr = [1, 2, 3, 4, 5];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    console.log(max);
    console.log(min);

    // Оператор spread и слияние массивов
    let arr1 = ['a', 'b', 'c'];
    let arr2 = [1, ...arr1, 2, 3];

    console.log(arr2); // выведет [1, 'a', 'b', 'c', 2, 3]


    arr1 = [1, 2, 3];
    arr2 = [4, 5, 6];

    arr = ['a', ...arr1, 'b', 'c', ...arr2];
    console.log(arr); // ['a', 1, 2, 3, 'b', 'c', 4, 5, 6]


    arr1 = [1, 2, 3];
    arr2 = [...arr1, 4, 5, 6];
    let arr3 = [...arr2, 7, 8, 9];

    arr = [0, ...arr3];
    console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // Разбиение строк
    function func3(s1, s2, s3, s4, s5) {
        return s1 + '-' + s2 + '-' + s3 + '-' + s4 + '-' + s5;
    }

    console.log(func3(...'abcde')); // выведет 'a-b-c-d-e'

    arr = [...'abcde'];
    console.log(arr); // получим массив ['a', 'b', 'c', 'd', 'e']

    arr1 = ['a', 'b', 'c'];
    arr2 = [...arr1, ...'12345'];

    console.log(arr2); // ['a', 'b', 'c', '1', '2', '3', '4', '5']


    // Разбиение чисел
    arr = [...String(12345)];
    console.log(arr); // получится массив ['1', '2', '3', '4', '5']


    // Оператор rest
    // На самом деле оператор '...' в зависимости от места в коде может называться либо оператором spread, либо оператором rest.

    // Как вы уже знаете, когда оператор spread стоит перед массивом или строкой, он разделяет их на отдельные значения. Оператор rest, хотя и имеет такой же синтаксис в виде ..., но предназначен для другого.


    function func4(a, b, ...rest) {
        console.log(a);    // выведет 1
        console.log(b);    // выведет 2
        console.log(rest); // выведет [3, 4, 5]
    }

    function func5(...rest) {
        console.log(rest);
    }

    func4(1, 2, 3, 4, 5);
    func5(1, 2, 3, 4, 5);


    // Сумма цифр
    function func6(...nums) {
        let sum = 0;

        for (let num of nums) {
            sum += num;
        }

        return sum;
    }

    console.log(func6(1, 2, 3)); // выведет 6
    console.log(func6(1, 2, 3, 4)); // выведет 10
    console.log(func6(1, 2, 3, 4, 5)); // выведет 15


    // Массивы в двухмерный

    // Функция unite, которая параметрами будет принимать произвольное количество массивов и сливать их в один двухмерный.
    function unite(...arrs) {
        return arrs;
    }

    let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]


    // Массивы в один
    // получим переданные массивы в виде одного двухмерного ...arrs
    function merge(...arrs) {
        // Сольем этот двухмерный массив в одномерный. Используем для этого метод concat и оператор spread:
        return [].concat(...arrs);
    }

    result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
    console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]

});
