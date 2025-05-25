//1. save the data
// To group the name and due date together we create an object
const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}]; 

renderTodoList(); // to display todolist on page

function renderTodoList() { // render is used to display anything on the screen
  //2. generate the HTML
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; //destructuring 

     const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;

    //after apply the css we see that the <p> is consuming space above and below and to deal we that we will be using div 
    
    // <p>
    // ${todo}
    // <button onclick="
    //   todoList.splice(${i}, 1); //splice is used to remove value.
    //   //splice uses two number first one being the index and the second one being how many values you want to remove
    //   renderTodoList(); //display updated todo list
    // ">Delete</button>
    // </p>
    // //generating the html using js

    todoListHTML += html;
  }
  //console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    //when the object and the property name are same you can just type out once also called as the shorthand property syntax
    name,
    dueDate,
  });
  //console.log(todoList);

  // Clear the input field after adding the todo
  inputElement.value = '';

  renderTodoList(); //display list after adding new todo
}
