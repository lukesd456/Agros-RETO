import { useState, useEffect } from "react"
import uuid from "react-uuid"
import TalentoD from "./eliminar/TalentoD"
import ActividadesD from "./eliminar/Actividades"
import CultivoD from "./eliminar/CultivoD"

export default function Crear() {
  const [informe, setInforme] = useState({})
  const [informeEXP, setInformeEXP] = useState({})

  const handleInform = (e) => {
    setInforme({
      ...informe,
      [e.target.name] : e.target.value
    })
  }

  const [objTitulo, setObjTitulo] = useState('')
  const [validator, setValidator] = useState('Cultivo')

  const [arrayActividades, setArrayActividades] = useState([])
  const [arrayTalento, setArrayTalento] = useState([])
  const [arrayCultivo, setArrayCultivo] = useState([])

  const handleCultivo = () => {
    const newItem={titulo: objTitulo, ID:uuid()}
    const newList = [...arrayCultivo,newItem]
    setArrayCultivo(newList)
  }
  const handleTalento = () => {
    const newItem={titulo: objTitulo, ID:uuid()}
    const newList = [...arrayTalento,newItem]
    setArrayTalento(newList)
  }
  const handleActividades = () => {
    const newItem={titulo: objTitulo, ID:uuid()}
    const newList=[...arrayActividades,newItem]
    setArrayActividades(newList)
  }

  const form = () => {
    if (validator==='Cultivo') {
      return (<button onClick={(e)=>{
        e.preventDefault()
        handleCultivo()
      }} style={styleButtons} >Añadir Cultivo</button>)
    }
    else if (validator==='Talento') {
      return (<button onClick={(e)=>{
        e.preventDefault()
        handleTalento()
      }} style={styleButtons} >Añadir Talento</button>)
    }
    else if (validator==='Actividades') {
      return (<button onClick={(e)=>{
        e.preventDefault()
        handleActividades()
      }} style={styleButtons} >Añadir Actividad</button>)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const finalOBJ = {
      ...informe,
      tipoCultivo: {data: arrayCultivo},
      talentoHumano: {data: arrayTalento},
      actividadesClave: {data: arrayActividades}
    }
    setInformeEXP(finalOBJ)
    console.log(informeEXP)
  }

  const styleInputs = {
    maxWidth: '30rem',
    margin: '10px',
    minHeight: '2em'
  }

  const styleButtons = {
    minHeight: '3%',
    maxWidth:'10em',
    margin: '5px'
  }

  return (
    <form onSubmit={e=>handleSubmit(e)} style={{display:"flex",flexDirection: 'column', justifyContent: 'center'}}>
      <h1>Formulario para registrar Informes</h1>
      <h2>Titulo</h2>
      <input name="title" style={styleInputs} onChange={(e)=>handleInform(e)}></input>
      <h2>Resumen</h2>
      <input name="resumen" style={styleInputs} onChange={(e)=>handleInform(e)}></input>
      <h2>Descripcion</h2>
      <input name="descripcion" style={styleInputs} type='number' onChange={(e)=>handleInform(e)}></input>
      <h2>Dinero Invertido</h2>
      <input name="dineroInvertido" style={styleInputs} onChange={(e)=>handleInform(e)}></input>
      <h2>Selecciona para añadir cultivo, colaboradores o actividades</h2>
      <div onChange={(e)=>setValidator(e.target.value)} style={{display: 'flex', justifyContent: 'center', fontSize: '1.5rem'}}>
          <input type="radio" value="Cultivo" style={{margin: '0.5rem'}} name="g" defaultChecked /> Cultivo
          <input type="radio" value="Talento" style={{margin: '0.5rem'}} name="g" /> Talento
          <input type="radio" value="Actividades" style={{margin: '0.5rem'}} name="g" /> Actividades
      </div>
      <h2>Añadir {validator}</h2>
      <input style={styleInputs} type='text' onChange={(e)=>setObjTitulo(e.target.value)}></input>
      {form()}
      <div style={{display:'flex', justifyContent: 'center'}}>
      <CultivoD arrayCultivo={arrayCultivo} setArrayCultivo={setArrayCultivo} />
      <TalentoD arrayTalento={arrayTalento} setArrayTalento={setArrayTalento}/>
      <ActividadesD arrayActividades={arrayActividades} setArrayActividades={setArrayActividades}/>
      </div>
      <h2>Conclusiones</h2>
      <input style={styleInputs} name="conclusiones" onChange={(e)=>handleInform(e)}></input>
      <button onClick={e=>e.preventDefault()} type="submit" style={{maxWidth: '8rem', fontSize:'2rem'}}>Enviar</button>
    </form>
  )
}
