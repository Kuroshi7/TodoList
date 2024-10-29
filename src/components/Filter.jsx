

const Filter = ({filter, setFilter,setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(ev)=> setFilter(ev.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incompleted</option>
                </select>
            </div>
            <div>
                <p>Oredem alfábetica</p>
                <button onClick={()=> setSort("Asc")}>Asc</button>
                <button onClick={()=> setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter
