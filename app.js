function get_todos() {
    //grab data from local storage
    var todos = new Array();
    var todosString = localStorage.getItem('todos');
    // convert to JSON
    if (todosString !== null) 
    {
        todos = JSON.parse(todosString); 
    }
    return todos;
}

function add() {
    var todos = get_todos();
    var textBoxContent = document.getElementById('itemToAdd').value;
    todos.push(textBoxContent);
    localStorage.setItem("todos", JSON.stringify(todos));
   
    show();
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem("todos", JSON.stringify(todos));

    show();
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    // add each todo item to the string and a <li>
    for(var i = 0; i < todos.length; i++)
    {
       // html += '<li>' + todos[i] + '<button>x</button></li>';
        html += '<li>' + todos[i] + ' <button class="remove" id="' + i + '"> Delete Item</button></li>';
    }    
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for(var k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener('click', remove);
    }

}


document.getElementById('addTodo').addEventListener('click', add);