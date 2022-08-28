import './App.css';
import { useEffect, useState } from 'react';
import { Mycircle } from './component/circle'
import { Text } from './component/text'
function App() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);
  const colors = ["red", "blue", "gray", "yellow", "black"];

  const calIndex = (value) => {
    if (value !== 0) {
      if (value % 5 === 0) {
        setIndex((prv) => prv + 1);
      }
    }
  };
  return (
    <div className='container' style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      gap: '10px',
    }}>
      <h1>
        value {value} = {index} = {colors[index]}
      </h1>
      <div className='circle' style={{
          backgroundColor: colors[index],
          width: '100px',
          height: '100px',
          color: colors[index],
          borderRadius: '50px',
          transition: 'transform 100ms ease-in'
        }}
        onClick={() => {
          setValue((prv) => {
            calIndex(prv);
            if(index === 4 && (value % 5) === 0){
              setIndex(0);
            }
            return prv + 1;
          });
        }}></div>
      <p>change color every 5th clicks</p>
    </div>
  );
}

export default App;
