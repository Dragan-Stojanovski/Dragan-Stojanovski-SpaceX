import { Link } from "react-router-dom";
import dateFormat from 'dateformat';
import './Card.css';
export const Card =(prop)=>(
  <Link className="link-to" to={`/users/${prop.rocket.id}`}>
    <div className="card-wrap">
  
      <div className="card" key={prop.rocket.id} >
          <img src={prop.rocket.links.patch.small} alt={prop.rocket.name}/>
          <p>{dateFormat(prop.rocket.date_local)}</p>
          <div className="card-body">
             <h3>{prop.rocket.name}</h3>
             <p>{prop.rocket.details}</p>
          </div>
      </div>
    </div>
  </Link>
)