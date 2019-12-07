export default class Todo {
  constructor(data) {
    this.id = data.data._id;
    this.completed = data.data.completed;
    this.user = data.data.user;
    this.description = data.data.description;
  }

  get taskTemplate() {
    return `
    <dt class="task-list"><input type="checkbox" class="check" id="complete" onclick=""> ${this.description}<button class="btn btn-outline remove-task" onclick=""></button></dt>
    `;
  }
}
