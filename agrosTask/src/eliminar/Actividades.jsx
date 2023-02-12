export default function ActividadesD({arrayActividades,setArrayActividades}) {
  const handleDeleteA = (id) => {
    const listItems = arrayActividades.filter((i)=>i.ID!==id)
    setArrayActividades(listItems) 
  }
  return (
    <div style={{marginInline: '2rem'}}>
        {arrayActividades.length?(<h4>Actividades Clave</h4>):(<span></span>)}
        {arrayActividades.map((i)=>(
        <div key={i.ID}>
            <p>{i.titulo}</p>
            <button onClick={()=>handleDeleteA(i.ID)}>Eliminar</button>
        </div>
        ))}
    </div>
  )
}
