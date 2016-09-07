/**
 * Created by naga- on 9/7/2016.
 */

var fs = require('fs');

// open and read food list

var food = fs.readFileSync('food.txt', 'utf8');

// print food list
console.log('FOOD:');
console.log(food);

//open and read drinks list

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log('DRINKS: ');
console.log(drinks);