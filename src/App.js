
import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './context/Counter';
import DarkTheme from './components/DarkTheme';

function App() {
  const counterState = useContext(CounterContext);
  console.log(counterState)
  return (
    <div className="App"> 
   
    
     
     <h1 style={{color:"red"}}>Count is {counterState.count}</h1>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
     <DarkTheme/>
     
  
    
    </div>
  );
}

export default App;
