// import logo from './logo.svg';
import React,{ useState } from 'react';
import UseContext from './Components/UseContext';

export const ToggleTheme = React.createContext()
export const text = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  const [name,set] = useState(false)

  const handle = ()=>{
    set(name=>!name)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <text.Provider value={name}>
        <div className='center'>
          <div>
      <button  onClick={handleToggle}>Toggle</button>
      </div>
      <div className='para'>
      <button  onClick={handle}>Context</button>
      </div>
      </div>
      <UseContext/>
      </text.Provider>
    </ToggleTheme.Provider>
  );
}

export default App;