'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

// Результат функции: массив из всех студентов, которые сдали экзамен.

const filterS = ([...cloneAll], [...cloneFailed]) => {
    for (let i = 0; i < cloneFailed.length; i++) {
        cloneAll.splice(cloneAll.indexOf(cloneFailed[i]), 1);
    }
    return cloneAll;
};

filterS(allStudents, failedStudents);

