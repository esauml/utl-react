// create the db structure
const DB_NAME = 'todo app';
const db = new Dexie(DB_NAME);
db.version(1).stores({ todos: '++id, todo' });

// elements from the DOM
const form = document.getElementById('new-task-form');
const input = document.getElementById('new-task-input');
const tasks = document.getElementById('tasks');

// add a new task
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = input.value;

    // add to db
    await db.todos.add({ todo: task });
    // render todos on the page
    await getTodos();

    form.reset();
});

// display todo
const getTodos = async () => {
    const todos = await db.todos.reverse().toArray();

    // force inner html from db todos
    tasks.innerHTML = todos.map((todo) => {
        return `
            <div class="task">
                <div class="content">
                    <input id=edit class="text" readonly type="text" value="${todo.todo}">
                </div>
                <div class="actions">
                    <button class="edit" onclick="editTodo(event, ${todo.id})">Edit</button>
                    <button class="delete" onclick="deleteTodo(event, ${todo.id})" >Delete</button>
                </div>
            </div>

        `;
    }).join('');
};

window.onload = getTodos;

// delete todo
const deleteTodo = async (e, id) => {
    await db.todos.delete(id);
    await getTodos();
}

// edit todo
const editTodo = async (e, id) => {
    const todo = await db.todos.get(id);
    const text = e.target.parentElement.parentElement.querySelector('.text');
    text.readOnly = false;
    text.focus();
    text.addEventListener('blur', async () => {
        todo.todo = text.value;
        await db.todos.update(id, todo);
        await getTodos();
    });
}
