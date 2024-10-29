/* eslint-disable react/prop-types */


const Search = ({search, setSearch}) => {//props do estado de search
  return <div className='search'>
    <h2>Pesquisar:</h2>
    <input type='text' value={search}
    onChange={(ev)=>setSearch(ev.target.value)}
    placeholder='Digite para pesquisar...'>
    </input>{/* value recebe o estado de search e no change captura o evento e atualiza o estado de setSearch com o valor inserido/passado */}
  </div>
}

export default Search
