function InputTypeTextarea({inputName,placeholder,required,value,setValue}) {
    if(required) {
        inputName = `${inputName} *`
    }
    return ( 
        <>
            <b><span>{inputName}</span></b>
            <textarea class="box" placeholder={placeholder} required={required} id="" value={value} onChange={(e) => setValue(e.target.value)}/>
        </>
     );
}

export default InputTypeTextarea;