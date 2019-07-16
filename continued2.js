//Exercise 1
let getCountdownIterator = function*() {
	let i = 10;
	while (i > 1) {
		yield --i;
	}
};

console.log([ ...getCountdownIterator() ]);

//Exercise 2
let todoList = {
	todoItems: [],
	*[Symbol.iterator]() {
		yield* this.todoItems;
	},
	addItem(description) {
		this.todoItems.push({ description, done: false });
		return this;
	},
	crossOutItem(index) {
		if (index < this.todoItems.length) {
			this.todoItems[index].done = true;
		}
		return this;
	}
};

let iterableTodoList = todoList;

//Exercise 3
let errorDemo = function*() {
	yield 1;
	throw 'Error yielding the next result';
	yield 2;
};

let it = errorDemo();

for (let element of errorDemo()) {
	console.log(element);
}
