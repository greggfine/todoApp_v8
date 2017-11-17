var toDoList = {
	todos: [],
	displayTodos: function() {
		console.log('My todos: ')
		if (!(this.todos.length)) console.log('no todos');
		else {
			for (var i = 0; i < this.todos.length; i++) {
				var todo = this.todos[i];
				todo.completed? console.log('(x)', todo.todoText): console.log('( )', todo.todoText);
			}
		}
	},
	addTodo: function(todoText, completed=false) {
		this.todos.push({todoText, completed});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(index) {
		this.todos.splice(index, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !(todo.completed);
		this.displayTodos();
	},
	toggleAll: function() {
		var completed = 0;
		for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].completed === true) {
				completed += 1;
			}
		}
		if (this.todos.length === completed) {
			this.todos.forEach(function(todo) {
				todo.completed = false;
			})
		} else {
				this.todos.forEach(function(todo) {
				todo.completed = true;
			}) 
		}
		this.displayTodos();
	}
}


// console.log(toDoList.todos)
toDoList.addTodo('drink milk', true);
toDoList.addTodo('gym', true);
// console.log(toDoList.displayTodos())
// console.log(toDoList.changeTodo(1, 'practice'));
// console.log(toDoList.displayTodos())
// console.log(toDoList.toggleAll())


var handlers = {
	buttonDisplay: () => toDoList.displayTodos(),
	buttonAddTodo: function(){
		var addTodoInput = document.getElementById("addTodoInput");
		if (addTodoInput.value.length === 0) {
			let error = document.querySelector('#error');
			error.innerHTML = '<h3>Please enter a Todo!</h3>';
			error.style.color = 'red';
		} else {
			toDoList.addTodo(addTodoInput.value);
			error.innerHTML = '';
			addTodoInput.value = '';
		}
	} ,
	buttonChangeTodo: function() {
		var todoNumber = document.getElementById("Todo Number");
		var newTodo = document.getElementById("New Todo");
		toDoList.changeTodo(todoNumber.valueAsNumber, newTodo.value);
		todoNumber.value = '';
		newTodo.value = '';
	},
	buttonDeleteTodo: function() {
		var deletePosition = document.getElementById("deletePosition");
		toDoList.deleteTodo(deletePosition.valueAsNumber);
		deletePosition.value = '';
	},
	buttonToggleAll: () => toDoList.toggleAll(),
	buttonToggleCompleted: function() {
		// debugger;
		var toggleNumber = document.getElementById("toggleNumber")
		toDoList.toggleCompleted(toggleNumber.valueAsNumber);
		toggleNumber.value = '';
	}
}



