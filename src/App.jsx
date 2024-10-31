// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react'
import'./App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

import Filter from './components/Filter';

function App() {
    const [todos, setTodos] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")
    const [sort, setSort] = useState("Asc")

//Carregar tarefas no local sotrage ao montar componente

    useEffect(()=>{
        const savedTodos = JSON.parse(localStorage.getItem('todos'))
        if(savedTodos && Array.isArray(savedTodos)){
            setTodos(savedTodos)
        }
    },[])

    //Atualiza o localStorage com as tarefas ao mudar
    useEffect(()=>{
        if(todos.length > 0){
            localStorage.setItem('todos',JSON.stringify(todos))
        }else{
            localStorage.removeItem('todos')
        }

    },[todos])

    //Adiciona uma nova tarefa na lista

    const addTodo= (text, category,description) =>{
        const newTodos = [...todos,{//cria uma nova lista com todas as tarefas existentes em "todos" e adiciona nova tarefa ao final
            id: Math.floor(Math.random()*10000), //atribui uma propriedade id aleatoria
            text,//o texto da tarefa passado como argumento
            category, //a categoria da tarefa passada como argumento

            isCompleted: false, //status definida como nao concluida
            description,

        },
    ];
    setTodos(newTodos)//seta a variavel de estados 'todos' com novo array de tarefas
};

//Removendo tarefas
const removeTodo = (id)=>{
    const newTodos = [...todos] //cria uma copia da lista de todas as tarefas no array atual
    const filteredTodos = newTodos.filter(todo => //filtrando todos criando uma nova lista
        todo.id !== id ? todo:null //mantem os itens cujo id é diferente do fornecido, exclui os com id correspondente
    )
    setTodos(filteredTodos);//atualiza o estado "todo" com "filteredTodos" nova lista filtrada
}

//Completando tarefas

const completeTodo=(id) =>{
    const newTodos = [...todos]
    newTodos.map((todo)=> todo.id === id ? todo.isCompleted = !todo.isCompleted: todo
    );
    setTodos(newTodos);
}


    //renderiza a interface dfa lista de tarefas
return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="todo-list">
    <TodoForm addTodo={addTodo}/>
        {todos
            .filter((todo)=> filter ==="All"
                ? true
                : filter ==="Completed"
                ? todo.isCompleted
                : !todo.isCompleted

        )
        .filter((todo)=>//filtrando o array
        todo.text.toLowerCase().includes(search.toLowerCase())//logica de filtragem de pesquisa, se incluir o caractere, retorna no filtro
        )
        .sort((a,b)=>sort ==="Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
        )
        .map((todo)=> (//mapeia o array de tarefas "todos" armazenando os valores como "todo"

            <Todo
                key={todo.id}//passa uma 'key' unica sendo o 'id' da tarefa para o React identificar cada item
                todo = {todo}
                removeTodo={removeTodo}// passa a tarefa atual como prop "todo" para o componente "todo"
                completeTodo={completeTodo}
            />

        ))}
    </div>

</div>
// passa ao componente TodoForm a funçao "addTodo" como prop "addTodo" permitindo adicionar novas tarefas
}

export default App
