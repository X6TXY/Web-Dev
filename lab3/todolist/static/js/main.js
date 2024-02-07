let todos = [];
let inputvalue = '';

function handleInputValue(event) {
    inputvalue = event.target.value;
}

function handleAddTodo() {
    todos.push(inputvalue);
    renderTodoList();
    inputvalue = '';
}

function handleDeleteTodo(index) {
    todos = todos.filter((_, i) => i !== index);
    renderTodoList();
}
function renderTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = 'text-xl';
      li.innerText = `${todo} `;
      
      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button'; 
      deleteButton.innerHTML = ' Delete <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="svgdelete"><path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path></svg> '; 
      deleteButton.onclick = () => handleDeleteTodo(index);
      
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
  }
  
