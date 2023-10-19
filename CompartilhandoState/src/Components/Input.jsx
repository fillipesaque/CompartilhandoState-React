function Input (props){
    return(
        <input 
        type="text"
        id="Input"
        placeholder="Digite Aqui..."
        min={1}
        onChange={(ev) => props.setTextValue(ev.target.value)}
        />
    )
}

export default Input