import TodoService from "../services/todo-service.js";
import store from "../store.js";
let countElem = document.getElementById("count");
function _drawTodos() {
  let template = "";

  let todos = store.State.todos;
  todos.forEach(t => (template += t.taskTemplate));
  document.getElementById("todos").innerHTML = template;
}
function _drawCount() {
  countElem.innerText = store.State.todos.length.toString();
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    _drawCount();
    store.subscribe("todos", _drawTodos);
    store.subscribe("todos", _drawCount);
  }

  async addTodo(e) {
    e.preventDefault();
    let formData = e.target;
    let newTodo = {
      description: formData.description.value
    };
    try {
      await TodoService.addTodoAsync(newTodo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
