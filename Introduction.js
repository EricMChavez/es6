function Animal(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
}
Animal.prototype.name = function() {
	return `${this.firstName} ${this.lastName}`;
};

function Human(first, last, age) {
	Animal.apply(this, arguments);
	this.genus = 'homo';
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function() {
	return `My name is ${this.name()}`;
};

function Dog(first, alst, age) {
	Animal.apply(this, arguments);
	this.genus = 'canis';
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() {
	return 'woof woof woof';
};
