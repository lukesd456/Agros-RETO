export default function CultivoD({arrayCultivo, setArrayCultivo}) {
  const handleDeleteC = (id) => {
    const listItems = arrayCultivo.filter((i)=>i.ID!==id)
    setArrayCultivo(listItems) 
  }
  return (
    <div style={{marginInline: '2rem'}}>
        {arrayCultivo.length?(<h4>Cultivo</h4>):(<span></span>)}
        {arrayCultivo.map((i)=>(
        <div key={i.ID}>
            <p>{i.titulo}</p>
            <button onClick={()=>handleDeleteC(i.ID)}>Eliminar</button>
        </div>
        ))}
    </div>
    )
}
