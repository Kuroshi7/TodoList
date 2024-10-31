/* eslint-disable react/prop-types */


const Todo = ({todo, removeTodo,completeTodo}) => { //recebe a tarefa 'todo' como prop que vem do map do componente principal
  return (
    <div
    className="todo"
    style={{
        textDecoration: todo.isCompleted ? "line-through":"",
        backgroundColor: todo.isCompleted ? "#a0e99f": "",

    }}>
    <div className="content">
            <p>{todo.text}</p> {/*passa as tags "p's" o texto e categorias armazenadas na prop "todo" passada pelo map no componente principal*/}
            <p>{todo.description}</p>
            <p className='category'>({todo.category})</p> {/*exibe a categoria da tarefa */}

    </div>
        <div>
            <button className='complete'onClick={()=> completeTodo(todo.id)}>Completar</button>
            <button className='remove' onClick={()=> removeTodo(todo.id)}>X</button> {/* quando usado dispara a funçao checando qual id foi enviado a funçao */}
        </div>
    </div>
  )
}

export default Todo

