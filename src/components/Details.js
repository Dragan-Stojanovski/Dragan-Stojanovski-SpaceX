import {useParams,} from "react-router-dom";
import React, {useEffect,useState} from 'react';
import dateFormat from 'dateformat';
import Coments from './Coments';
import './Details.css';
function Users() {
  //Set State
  const[rocket,setRocket] = useState({});
  const [isLoaded, setIsLoaded] = useState(false)

  // 👇️ get ID from url
  const params = useParams();

  //Fetch Data
  const fetchDetails = () => {
    fetch(`https://api.spacexdata.com/v5/launches/${params.userId}`)
    .then(res=>res.json())
    .then(data => { 
      setRocket(data)
      setIsLoaded(true)
    })  
    .catch(error => {
      console.log(error);
    })
  }
  
  useEffect(()=>{
    fetchDetails();
  },);
//Check If Data Is Loaded
if(isLoaded){
  
  return (
    <div className="rocket-details-wrap">
      <div className="rocket-details" key={rocket.id}>
 
       <img src={rocket.links.patch.large} alt={rocket.name}/>
       <p>Launch Time:{dateFormat(rocket.date_local)}</p>
       <h2>Name Of Rocket:{rocket.name}</h2>
       <h3>Details:{rocket.details}</h3>
       <a href={rocket.links.article} target="blank">Read More About This Launch </a>
     </div>
    <div className="rocket-coments">
      <Coments />
    
    </div>
  </div>
)
  }else
  //If Its not Loaded
  {
    return<h2>Loading...</h2>
  }
}
        export default Users;