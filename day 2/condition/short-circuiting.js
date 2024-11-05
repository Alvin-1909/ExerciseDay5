"use strict";
//operator &&
const value = 100;
const result = value && 'Truthy Falsy' && "hore";
//operator && akan mengambil nilai falsy pertama
//opertator && akan mengambil nilai terakhir apabila tidak ada value yg falsy
console.log(result);
//opertator ||
const name = "";
const displayName = name || 0 || false;
//operator || akan mengambil nilai truthy pertama
//opertator || akan mengambil nilai paling terakhir
console.log(displayName);
