import { useState } from 'react'
import './App.css'
import { AddTarea } from './Components/AddTarea'
import { InputTarea } from './Components/InputTarea'


function App() {


  let nombres =[
    {id: 1, nombre: 'Orlando'},
    {id: 2, nombre: 'Alfonso'}
  ]

    const [addName, setAddName] = useState (nombres)

    
    const onAddTarea = (val)=>{
      let valor = val.trim()
      if (valor < 1 ) return
      const envio = {
        nombre: valor,
        id: addName.length +1
    }
    setAddName([...addName, envio])
      console.log(val)
    }


  return (
    <>
    <InputTarea agregarTarea = {onAddTarea}/>
    
      {addName.map(x => <AddTarea key={x.id} nombre={x.nombre}></AddTarea>)}

      
    </>
  )
}

export default App
