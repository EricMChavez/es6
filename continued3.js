// 1)
let value1 = '"Andrew", "Siemer", 42, "andy@inventive.io", 78621';
let value2 = '"James", "Shaw", 45, "james@inventive.io", 78754';
let value3 = '"Miguel", "Gonzalez", 44, "miguel@inventive.io, 78745';

function arrayConverter(string) {
	return string.split(',');
}
let arr1 = arrayConverter(value1);
let arr2 = arrayConverter(value2);
let arr3 = arrayConverter(value3);

//2)
function objConverter(string) {
	let values = string.split(',');
	return { 'First Name': values[0], 'Last Name': values[1], Age: values[2], Email: values[3], 'Zip Code': values[4] };
}
let obj1 = objConverter(value1);
let obj2 = objConverter(value2);
let obj3 = objConverter(value3);

//3)
let arr = [
	{ FirstName: 'Andrew', LastName: 'Siemer', Age: 42, Email: 'andy@inventive.io', ZipCode: 78621 },

	{ FirstName: 'James', LastName: 'Shaw', Age: 45, Email: 'james@inventive.io', ZipCode: 78754 },

	{ FirstName: 'Miguel', LastName: 'Gonzalez', Age: 44, Email: 'miguel@inventive.io', ZipCode: 78745 }
];

function commaConverter(array) {
	let csv = '';
	let titles = Object.getOwnPropertyNames(array[0]);
	for (let title of titles) {
		csv += title + ',';
	}
	for (let obj of array) {
		for (let property in obj) {
			csv += obj[property] + ',';
		}
	}
	return csv;
}
let csv = commaConverter(arr);
// 4)
('error 404');
// 5)
function hexcode() {
	let code = '#';
	let choices = '0123456789ABCDEF';
	for (let i = 0; i < 6; i++) {
		code += choices[Math.floor(Math.random() * choices.length)];
	}
	return code;
}
let hex = hexcode();
// 6)
let fruits = [
	{ name: 'apple', color: 'red', price: 1.25 },
	{ name: 'banana', color: 'yellow', price: 1.1 },
	{ name: 'tomato', color: 'red', price: 0.5 }
];
function getValuesByPropertyName() {
	let names = [];
	for (let fruit of fruits) {
		names.push(fruit.name);
	}
	return names;
}

let fruitNames = getValuesByPropertyName();

// 7)
arr1 = [ 'one', 'two', 'three', 'four', 'one', 'four', 'three' ];
function getUnique() {
	let unique = [];
	for (let value of arr1) {
		if (arr1.filter((item) => item == value).length == 1) {
			unique.push(value);
		}
	}
	return unique;
}
arr2 = getUnique(arr1);
console.log(arr2);
