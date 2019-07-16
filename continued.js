class Animal {
	constructor(first, last, age) {
		this.firstname = first;
		this.lastname = last;
		this.age = age;
		this.name = function() {
			return this.firstname + ' ' + this.lastname;
		};
	}
}
class Human extends Animal {
	constructor(first, last, age) {
		super(first, last, age);
		this.genus = 'homo';
		this.speak = function() {
			return `My name is ${this.firstname} ${this.lastname}`;
		};
	}
}
class Dog extends Animal {
	constructor(first, last, age) {
		super(first, last, age);
		this.genus = 'canis';
		this.speak = function() {
			return `woof woof woof`;
		};
	}
}
