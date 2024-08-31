
import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './context/Counter';
import DarkTheme from './components/DarkTheme';
import List from './components/List';
import Cart from './components/Cart';

function App() {
  const counterState = useContext(CounterContext);
  console.log(counterState)
  return (
    <div className="App"> 
     
    
     
     <h1 style={{color:"red",fontSize:"2rem"}}>Count is {counterState.count}</h1>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
     <List id="1" name="Iphone" price="1200"   />
     <List id="2" name="Ipad" price="800"   />
     <List id="3"  name="Tv" price="1000" />
     <Cart/>
     <DarkTheme/>
   
     
  
    
    </div>
  );
}

export default App;
