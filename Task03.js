'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = ([...namesPref], prefix) => {
    let newName = []
    for (let i = 0; i < namesPref.length; i++) {
        newName.push(prefix + ' ' + namesPref[i]);
    }
    return newName;
};

addPrefix(names, 'Mr ');




