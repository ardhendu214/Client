import axios from 'axios';
function TestHeader() {
    const x = async()=>{
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/verify-Login`)
        console.log(data)
    }
    return ( 
        <div>

            <button onClick={x}>GetHead</button>
            
        </div>
     );
}

export default TestHeader;