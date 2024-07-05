'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

// Результат функции: массив из всех студентов, которые сдали экзамен.

const filterS = ([...cloneAll], [...cloneFailed]) => {
    const [stud1, stud2, stud3] = cloneFailed;
    cloneAll.splice(cloneAll.indexOf(stud1), 1);
    cloneAll.splice(cloneAll.indexOf(stud2), 1);
    cloneAll.splice(cloneAll.indexOf(stud3), 1);
    return cloneAll;

};

filterS(allStudents, failedStudents);
