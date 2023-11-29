'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    console.log(' ');

    // Первый способ
    let my_bar_elem_id = document.querySelector("#fact");

    let block_plan_max_id = document.querySelector("#block_plan_max");
    let plan_max_id = document.querySelector("#plan_max");

    let block_plan_min_id = document.querySelector("#block_plan_min");
    let plan_min_id = document.querySelector("#plan_min");

    // Соотношение пикселей к значению "Плана-макс" для подсчёта отступов слева
    let fit_coefficient = myBarScale.offsetWidth / (+plan_max_id.innerHTML);

    // Отступ слева для "Плана-мин"
    let margin_left_block_plan_min = ((+plan_min_id.innerHTML) - block_plan_min_id.offsetWidth / fit_coefficient) / (+plan_max_id.innerHTML) * 100;

    // Отступ слева для "Плана-макс"
    let margin_left_block_plan_max = 100 - (block_plan_max_id.offsetWidth / fit_coefficient) / (+plan_max_id.innerHTML) * 100;


    let width = (+my_bar_elem_id.innerHTML);

    // Ширина блока в процентах
    let width_percent = (+my_bar_elem_id.innerHTML) / (+plan_max_id.innerHTML) * 100;

    getColorProgressBar(width);

    my_bar_elem_id.style.width = width_percent + '%';

    block_plan_min_id.style.marginLeft = margin_left_block_plan_min + '%';
    block_plan_max_id.style.marginLeft = margin_left_block_plan_max + '%';

    let i = 0;

    function moveBar() {
        if (i === 0) {

            i = 1;

            let frame_id = setInterval(frame, 50);

            function frame() {
                if (width >= (+plan_max_id.innerHTML)) {
                    clearInterval(frame_id);
                    i = 0;
                    width = 1;
                } else {
                    width++;
                    my_bar_elem_id.style.width = width / (+plan_max_id.innerHTML) * 100 + "%";
                    // my_bar_elem_id.innerHTML = width / (+plan_max_id.innerHTML) * 100 + "%";
                    my_bar_elem_id.innerHTML = width;

                    getColorProgressBar(width);
                }
            }

        }
    }

    function getColorProgressBar(width) {
        if (width <= (+plan_min_id.innerHTML) - (+plan_min_id.innerHTML) * 0.20) {
            my_bar_elem_id.setAttribute('class', 'min-my-bar');
        } else if ((+plan_min_id.innerHTML) - (+plan_min_id.innerHTML) * 0.20 < width && width < (+plan_min_id.innerHTML)) {
            my_bar_elem_id.setAttribute('class', 'middle-my-bar');
        } else {
            my_bar_elem_id.setAttribute('class', 'max-my-bar');
        }
    }

    let button_click_progress_bar_id = document.querySelector('#button_click_progress_bar');

    button_click_progress_bar_id.addEventListener('click', moveBar);


    // Второй способ
    let block_plan_max_gradient_id = document.querySelector("#block_plan_max_gradient");
    let plan_max_gradient_id = document.querySelector("#plan_max_gradient");

    let block_plan_gradient_min_id = document.querySelector("#block_plan_min_gradient");
    let plan_min_gradient_id = document.querySelector("#plan_min_gradient");

    // Соотношение пикселей к значению "Плана-макс" для подсчёта отступов слева
    let fit_coefficient_gradient = myBarScaleGradient.offsetWidth / (+plan_max_gradient_id.innerHTML);

    // Отступ слева для "Плана-мин"
    let margin_left_block_plan_min_gradient = ((+plan_min_gradient_id.innerHTML) - block_plan_gradient_min_id.offsetWidth / fit_coefficient_gradient) / (+plan_max_id.innerHTML) * 100;

    // Отступ слева для "Плана-макс"
    let margin_left_block_plan_max_gradient = 100 - (block_plan_max_gradient_id.offsetWidth / fit_coefficient_gradient) / (+plan_max_gradient_id.innerHTML) * 100;

    block_plan_gradient_min_id.style.marginLeft = margin_left_block_plan_min_gradient + '%';
    block_plan_max_gradient_id.style.marginLeft = margin_left_block_plan_max_gradient + '%';


    // let width = (+my_bar_elem_id.innerHTML);

    let linear_gradient_id = document.querySelector('#linear_gradient');
    let linear_gradient_value_id = document.querySelector('#linear_gradient_value');
    let linear_gradient_progress_id = document.querySelector('#linear_gradient_progress');

    let ratio_gradient_percent = margin_left_block_plan_min_gradient + (block_plan_min_id.offsetWidth / fit_coefficient_gradient) / (+plan_max_id.innerHTML) * 100;

    let width_value = (+linear_gradient_value_id.innerHTML);


    linear_gradient_id.style.background = 'linear-gradient(to right, rgb(197, 39, 39), rgb(247, 218, 1) ' + ratio_gradient_percent * 0.8 + '%, rgb(4, 170, 109) ' + ratio_gradient_percent + '%)';


    linear_gradient_progress_id.style.width = 100 - width_value / (+plan_max_id.innerHTML) * 100 + '%';

    linear_gradient_value_id.style.width = width_value / (+plan_max_id.innerHTML) * 100 + '%';
    linear_gradient_value_id.innerHTML = width_value + '';

    let j = 0;

    function moveBarGradient() {
        if (j === 0) {

            j = 1;

            console.log(width_value);
            let frame_id = setInterval(frame, 50);

            function frame() {
                if (width_value >= (+plan_max_id.innerHTML)) {
                    clearInterval(frame_id);
                    j = 0;
                    width_value = 1;
                } else {
                    width_value++;

                    linear_gradient_progress_id.style.width = 100 - width_value / (+plan_max_id.innerHTML) * 100 + '%';
                    linear_gradient_value_id.style.width = width_value / (+plan_max_id.innerHTML) * 100 + '%';
                    linear_gradient_value_id.innerHTML = width_value + '';

                    // getColorProgressBar(width);
                }
            }

        }
    }

    button_click_progress_bar_id.addEventListener('click', moveBarGradient);

});
