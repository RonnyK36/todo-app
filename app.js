const form = document.getElementById('form')
const input = document.getElementById('input')
const todoList = document.getElementById('todos')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    addTodo()
})

function addTodo() {
    const todo = input.value

    if (todo) {
        const todoEl = document.createElement('li')
        todoEl.innerText = todo

        todoList.appendChild(todoEl)

        input.value = ''

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
        })
        todoEl.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            todoEl.remove()
        })
    }
}