'use strict';

// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = ([...sumAllСashbox]) => {
    let sum = 0;
    for (let i = 0; i < sumAllСashbox.length; i++) {
        sum += sumAllСashbox[i];
    }
    const average = Math.floor(sum / sumAllСashbox.length);
    return average;
};

getAverageValue(allСashbox);
