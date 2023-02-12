export default function TalentoD({arrayTalento, setArrayTalento}) {
  const handleDeleteT = (id) => {
    const listItems = arrayTalento.filter((i)=>i.ID!==id)
    setArrayTalento(listItems) 
  }
  return (
    <div style={{marginInline: '2rem'}}>
        {arrayTalento.length?(<h4>Talento Humano</h4>):(<span></span>)}
        {arrayTalento.map((i)=>(
        <div key={i.ID}>
            <p>{i.titulo}</p>
            <button onClick={()=>handleDeleteT(i.ID)}>Eliminar</button>
        </div>
        ))}
    </div>
  )
}
