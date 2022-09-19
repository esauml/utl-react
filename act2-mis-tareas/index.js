// create the db structure
const DB_NAME = 'todo app';
const db = new Dexie(DB_NAME);
db.version(1).stores({ contactos: '++id, nombre, telefono' });

// mexican phone number regex
const mexicanPhoneRegex = /^(\+?52)? ?(\d{3}) ?(\d{3}) ?(\d{4})$/;

// elements from the DOM
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const list = document.getElementById('list');

// add a new task
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const contacto = { nombre: nombre.value, telefono: telefono.value };

    // add to db
    await db.contactos.add({ ...contacto });
    // render todos on the page
    await getContactos();

    form.reset();
});

// display todo
const getContactos = async () => {
    const dbRetrieve = await db.contactos.reverse().toArray();

    console.log(dbRetrieve);

    list.innerHTML = dbRetrieve.map(({ id, nombre, telefono }) => {
        console.log(id, nombre, telefono);
        return `
            <div class="item">
                <div class="content">
                    <input id=edit class="text" readonly type="text" value="${nombre} - ${telefono}">
                </div>
                <div class="actions">
                    <button class="delete" onclick="deleteContacto(event, ${id})" >Delete</button>
                </div>
            </div>

        `;
    }).join('');
};

window.onload = getContactos;

// delete todo
const deleteContacto = async (e, id) => {
    await db.contactos.delete(id);
    await getContactos();
}
