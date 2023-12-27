import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Heloo from './components/Heloo'
import React, { Component } from 'react';
import Message from './components/message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

class App extends Component{
  render(){ 
    return(
      
     <div className='App'>
      {<Message/>}
      {<Counter/>}
      {<FunctionClick/>}
      {<ClassClick/>}
      {<EventBind/>}
      
    /* //   <Greet name="Bruce" heroname="bat"></Greet>
    {/* //   <Greet name="ama" heroname="iron" ><p> this is childern </p> </Greet>
    //   <Greet name="diana" heroname="captain"><button> action</button></Greet>
    {/* //   <Welcome name="diana" heroname="sandep"/>
    //   <Welcome name="ddsfna" heroname="sandep"/>
    //   <Welcome name="diadsfsdfna" heroname="sandep"/> */}
      */

     </div>
    )
    
  }
}
// function App() {
//   return (
//     <div className="App">
//       {/* <Greet/>
//       <Welcome/> */}

//       <Heloo/>
      
//     </div>
//   );
// }

 export default App;
