function InputTypeFile({setBookImg}) {
    return ( 
        <>
            <b><span>Book Image *</span><br/></b>
            <input type="file" id="img"  accept="image/*" style={{"font-size": "15px"}} onChange = {(e) => setBookImg(e.target.files[0])}/>
        </>
     );
}

export default InputTypeFile;