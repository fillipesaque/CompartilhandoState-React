import { useState } from "react"
import Input from "./Components/Input"


function App() {
  
 const [textvalue , setTextValue] = useState('')

  return (
    <>
      <div>
        <h1>Compartilhando estado entre componentes</h1>
        <label htmlFor="Input">Input </label>
        <Input setTextValue={setTextValue}/>
        <p>{textvalue}</p>
      </div>
    </>
  )
}

export default App
