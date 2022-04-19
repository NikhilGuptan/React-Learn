
import { useState } from 'react';
import './App.css';
import { Event } from './Components/Event';
import { Props } from './Components/Props';
import { ConditionalRendring } from './Components/ConditionalRendring';
import { List } from './Components/List';
import { Todo } from './Components/Todo';
import { Portals } from './Components/Portals';
import { Http } from './Components/Http';
import { Fragment } from './Components/Fragment';
import { LearnUseEffect } from './Components/LearnUseEffect';

function App() {
  const [counter,setCounter] = useState(0)

  const handfleCounter= () =>{
    setCounter(counter+1)
  }
  return (
    <div className="App">
      {/* <Event counter={counter}/>
      <Props handfleCounter = {handfleCounter}/> */}
      {/* <ConditionalRendring/> */}
      {/* <List/> */}
      {/* <Todo/> */}
      {/* <Portals/> */}
      <Http/>
      {/* <Fragment/> */}
      {/* <LearnUseEffect/> */}
    </div>
  );
}

export default App;
