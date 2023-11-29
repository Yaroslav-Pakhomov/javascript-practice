'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    console.log(' ');

    // --------------------------------
    // Блок шкалы месяц - начало
    // --------------------------------

    let bar_scale_month_id = document.querySelector('#bar_scale_month');

    // Блок "Плана-макс" месяц
    let block_plan_max_month_id = document.querySelector("#block_plan_max_month");
    let plan_max_month_id = document.querySelector("#plan_max_month");
    let plan_max_month_value = (+plan_max_month_id.innerHTML);


    // Блок "Плана-мин" месяц
    let block_plan_min_month_id = document.querySelector("#block_plan_min_month");
    let plan_min_month_id = document.querySelector("#plan_min_month");
    let plan_min_month_value = (+plan_min_month_id.innerHTML);


    // --------------------------------
    // Блок отступов месяц - начало
    // --------------------------------

    // Соотношение пикселей к значению "Плана-макс" для подсчёта отступов слева
    let fit_month_coefficient = (plan_max_month_value > plan_min_month_value) ? bar_scale_month_id.offsetWidth / plan_max_month_value : bar_scale_month_id.offsetWidth / plan_min_month_value;

    // Отступ слева для "Плана-мин"
    let margin_left_block_plan_min_month = (plan_max_month_value > plan_min_month_value) ? (plan_min_month_value - block_plan_min_month_id.offsetWidth / fit_month_coefficient) / plan_max_month_value * 100 : (plan_min_month_value - block_plan_min_month_id.offsetWidth / fit_month_coefficient) / plan_min_month_value * 100;

    // Отступ слева для "Плана-макс"
    let margin_left_block_plan_max_month = (plan_max_month_value > plan_min_month_value) ? (plan_max_month_value - block_plan_max_month_id.offsetWidth / fit_month_coefficient) / plan_max_month_value * 100 : (plan_max_month_value - block_plan_max_month_id.offsetWidth / fit_month_coefficient) / plan_min_month_value * 100;

    block_plan_min_month_id.style.marginLeft = margin_left_block_plan_min_month + '%';
    block_plan_max_month_id.style.marginLeft = margin_left_block_plan_max_month + '%';

    // --------------------------------
    // Блок отступов месяц - конец
    // --------------------------------


    // --------------------------------
    // Блок шкалы месяц - конец
    // --------------------------------


    // --------------------------------
    // Блок прогресс месяц - начало
    // --------------------------------

    // "Факт" месяц
    let fact_month_id = document.querySelector("#fact_month");
    let fact_month_value = (+fact_month_id.innerHTML);

    // Ширина блока в процентах
    let width_month_percent = fact_month_value / plan_max_month_value * 100;
    fact_month_id.style.width = width_month_percent + '%';

    getColorProgressBar(fact_month_id, fact_month_value, plan_min_month_value);

    // --------------------------------
    // Блок прогресс месяц - конец
    // --------------------------------


    // --------------------------------
    // Блок шкалы год - начало
    // --------------------------------

    let bar_scale_year_id = document.querySelector('#bar_scale_year');

    // Блок "Плана-макс" год
    let block_plan_max_year_id = document.querySelector("#block_plan_max_year");
    let plan_max_year_id = document.querySelector("#plan_max_year");
    let plan_max_year_value = (+plan_max_year_id.innerHTML);


    // Блок "Плана-мин" год
    let block_plan_min_year_id = document.querySelector("#block_plan_min_year");
    let plan_min_year_id = document.querySelector("#plan_min_year");
    let plan_min_year_value = (+plan_min_year_id.innerHTML);


    // --------------------------------
    // Блок отступов год - начало
    // --------------------------------

    // Соотношение пикселей к значению "Плана-макс" для подсчёта отступов слева
    let fit_year_coefficient = (plan_max_year_value > plan_min_year_value) ? bar_scale_year_id.offsetWidth / plan_max_year_value : bar_scale_year_id.offsetWidth / plan_min_year_value;

    // Отступ слева для "Плана-мин"
    let margin_left_block_plan_min_year = (plan_max_year_value > plan_min_year_value) ? (plan_min_year_value - block_plan_min_year_id.offsetWidth / fit_year_coefficient) / plan_max_year_value * 100 : (plan_min_year_value - block_plan_min_year_id.offsetWidth / fit_year_coefficient) / plan_min_year_value * 100;

    // Отступ слева для "Плана-макс"
    let margin_left_block_plan_max_year = (plan_max_year_value > plan_min_year_value) ? (plan_max_year_value - block_plan_max_year_id.offsetWidth / fit_year_coefficient) / plan_max_year_value * 100 : (plan_max_year_value - block_plan_max_year_id.offsetWidth / fit_year_coefficient) / plan_min_year_value * 100;

    block_plan_min_year_id.style.marginLeft = margin_left_block_plan_min_year + '%';
    block_plan_max_year_id.style.marginLeft = margin_left_block_plan_max_year + '%';

    // --------------------------------
    // Блок отступов год - конец
    // --------------------------------


    // --------------------------------
    // Блок шкалы год - конец
    // --------------------------------


    // --------------------------------
    // Блок прогресс год - начало
    // --------------------------------

    // "Факт" год
    let fact_year_id = document.querySelector("#fact_year");
    let fact_year_value = (+fact_year_id.innerHTML);

    // Ширина блока в процентах
    let width_year_percent = fact_year_value / plan_max_year_value * 100;
    fact_year_id.style.width = width_year_percent + '%';

    getColorProgressBar(fact_year_id, fact_year_value, plan_min_year_value);

    // --------------------------------
    // Блок прогресс год - конец
    // --------------------------------


    // Ф-ция для получения ширины цвета фона прогресса
    function getColorProgressBar(fact_id, width, plan_min_value) {
        if (width <= plan_min_value - plan_min_value * 0.20) {
            fact_id.setAttribute('class', 'min-my-bar');
        } else if (plan_min_value - plan_min_value * 0.20 < width && width < plan_min_value) {
            fact_id.setAttribute('class', 'middle-my-bar');
        } else {
            fact_id.setAttribute('class', 'max-my-bar');
        }
    }


});
