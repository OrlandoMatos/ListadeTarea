import { useState } from "react"


export const InputTarea = ({agregarTarea}) => {

    const [addTarea, setAddTarea] = useState('')

    const add = (value)=>{
       setAddTarea(value.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        agregarTarea(addTarea)
        
    }

  return (
    <>
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Add Tarea"
        value={addTarea}
        onChange={add}
        />

    </form>

    <button onClick={onSubmit}>add</button>
    
    </>
  )
}
