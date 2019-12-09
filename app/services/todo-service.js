import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/LoganG/todos/",
  timeout: 8000
});

class TodoService {
  constructor() {
    this.getTodos();
  }

  async getTodos() {
    let res = await todoApi.get("");
    store.commit(
      "todos",
      res.data.data.map(t => new Todo(t))
    );
  }

  async addTodoAsync(todo) {
    let res = await todoApi.post("", todo).then(res => {
      this.getTodos();
    });
    // debugger;
    // store.State.count += 1;
    // console.log("COUNT", store.State.count);
  }

  async toggleTodoStatusAsync(todoId) {
    let todoToUpdate = store.State.todos.find(t => t.id == todoId);
    console.log("Todo BEFORE THE BOOL SWITCH", todoToUpdate);

    if (todoToUpdate.completed == true) {
      todoToUpdate.completed = !todoToUpdate.completed;
    } else if (todoToUpdate.completed == false) {
      todoToUpdate.completed = !todoToUpdate.completed;
    }
    console.log("Todo AFTER THE BOOL SWITCH", todoToUpdate);

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await todoApi.put(todoId, todoToUpdate).then(res => {
      this.getTodos();
    });
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    let todoToRemove = store.State.todos.find(t => t.id == todoId);
    todoApi.delete(`/${todoId}`, todoToRemove).then(res => {
      this.getTodos();
    });
    // store.State.count -= 1;
    // console.log("COUNT", store.State.count);
  }
}

const todoService = new TodoService();
export default todoService;
