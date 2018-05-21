class View {
  constructor() {
    this.form = document.getElemetById('todo-form');
    this.input = document.getElemetById('add-input');
    this.list = document.getElemetById('todo-list');
  }

  findListItem(id) {
    return this.list.querySelector(`[data-id='${id}']`);
  }

  addItem(todo) {
    const listItem = this.createElement(todo);

    this.input.value = '';
    this.list.appendChild(listItem);
  }

  toggleItem(todo) {
    const listItem = this.findListItem(todo.id);
    const checkbox = listItem.querySelector('.checkbox');

    checkbox.checked = todo.completed;

    if(todo.completed) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  }

  editItem(todo) {
    const listItem = this.findListItem(todo.id);
    const label = listItem.querySelector('.title');
    const input = listItem.querySelector('.textfield');
    const editButton = listItem.querySelector('button.edit');

    label.textContent = todo.title;
    editButton.textContent = 'Изменить';
    listItem.classList.remove('editing');
  }

  removeItem(id) {
    const listItem = this.findListItem(todo.id)

    this.list.removeChild(listItem);
  }
}

export default View;
