const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}]; 

renderTodoList(); 

function renderTodoList() { 
  let todoListHTML = '';
  //using .forEach method instead of for loop
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; 
     const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button  js-delete-todo-button">Delete</button> 
    `; /*here's
  two problems here first is that at this point in the code this is just a string
  we haven't actually put this button on the page yet we do that down here in
  this line of code we put the HTML that we generated onto the page so in order
  to add an event listener we need to put the HTML on the page first */
    todoListHTML += html;
  });
  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   //const name = todoObject.name;
  //   //const dueDate = todoObject.dueDate;
  //   const { name, dueDate } = todoObject; 

  //    const html = `
  //     <div>${name}</div>
  //     <div>${dueDate}</div>
  //     <button onclick="
  //       todoList.splice(${i}, 1);
  //       renderTodoList();
  //     " class="delete-todo-button">Delete</button> 
  //   `;

  //   todoListHTML += html;
  // }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button') //there's also a second problem here which is we're going to have multiple delete buttons and query selector only gives us the first one 
  //select all the buttons on the page that match this criteria instead of just the first one to do that the document object has another method called query selector all so query selector all will give us all the elements on the page
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        //console.log(index);
        /*closure
         if a function has access to a value it
        will always have access to that value the value like index gets packaged
        together or enclosed with the function that's why we call it a closure
        */
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });
  //console.log(todoList);
  inputElement.value = '';

  renderTodoList();
}
