 import React, {useId,useState} from 'react';
import "./Coments.css";

import './Details.css';
function Coments(props) {
    const id = useId();
    const[coment,setComent] = useState([]);
  const [input, setInput] = useState(props?.value ?? '');

const handleChange = (newValue) => {
  setComent((coment) => [...coment, input]);
};

  return(
    <div className="coments-wrap">
    <h1>Coments Section</h1>
    {coment.map((komentar)=>(
    
            <p>{komentar}</p>
     

 ))}
 <textarea rows="4" cols="50" placeholder="Enter Your Comment" id={id} value={input} onInput={e => setInput(e.target.value)}/>
 <br></br>
 <button onClick={handleChange}>Add Coment</button>

   
 </div>
  )
}


  export default Coments;