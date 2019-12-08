export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description;
  }

  get taskTemplate() {
    let notCheckedTemplate = `<dt class="task-list"><input type="checkbox" class="check" id="complete" onclick="app.todoController.toggleStatus('${this.id}')"/>`;
    let checkedTemplate = `<dt class="task-list"><input type="checkbox" class="check" id="complete" onclick="app.todoController.toggleStatus('${this.id}')" checked/>`;
    let template = `${this.description}<button class="btn btn-outline remove-task" onclick="app.todoController.removeTodo('${this.id}')">Remove</button></dt>`;
    if (this.completed == false) {
      notCheckedTemplate += template;
      return notCheckedTemplate;
    } else if (this.completed == true) {
      checkedTemplate += template;
      return checkedTemplate;
    }
  }
}
