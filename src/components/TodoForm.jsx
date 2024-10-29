/* eslint-disable react/prop-types */

import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("") //definindo variaveis de estado inicais como vazias
    const[category, setCategory] = useState("")

    const handleSubmit = (ev) =>{ //capturando evento
        ev.preventDefault();//previnindo comportamento evento padrao do browser de recarregar a pagina ao enviar o formulario
        if(!value||!category) return //validando se value e categoria da lista existem senao, retorna nada
        addTodo(value,category);//chamada a funçao para enviar as informaçoes preenchidas
        setValue ("");//limpando o campo apos envio
        setCategory("");//limpando o campo apos envio
        console.log(value,category)
    }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}> {/*no evento de submit executando a funçao handle submit */}
            <input
            type='text'
            placeholder='Digite o titulo'
            value={value} /* mantendo o valor do campo atualizado com estado*/
            onChange={(ev)=>setValue(ev.target.value)}/>
            {/* capturando evento e passando valor como categoria e onChange setando categoria como o valor slecionado, atualizando o estado category ao selecionar */}
            <select value={category} onChange={(ev)=>setCategory(ev.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>

            </select>
            <button type='submit'>Criar tarefa</button>{/*executando o submit de enviar tarefas disparando handleSubmit */}
        </form>
    </div>
  )
}

export default TodoForm
