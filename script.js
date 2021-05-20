'use strict';

const temps = [12, 5, -5, 0, 4];

const printForecast = function(arr){
    let finalString = '...';
    for(let i=0; i<temps.length; i++){
        finalString += ` ${temps[i]}C in ${i+1} days ...`;
    }
    return finalString;
}

console.log(printForecast(temps));
