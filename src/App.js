import { Component, Fragment} from "react";
import {Card} from './components/Card'
import './App.css';

//Class Base Component
class App extends Component{
  constructor(){
    super();

    this.state = {
      rockets:[]
    }
  }
  //Check If Component Mounter
componentDidMount(){
  //Fetch Data
  fetch("https://api.spacexdata.com/v5/launches")
     .then((response)=>response.json())
     .then(rockets=>this.setState({rockets:rockets}))
}
render(){
  return (
    <Fragment>
       <div className="container">
       <div className="main-container">
          {this.state.rockets.map((rocket)=>(

    <Fragment>
  <Card rocket = {rocket} />


  </Fragment>
 ))}
</div>
   </div>
   </Fragment>
  );
}
}
export default App;
