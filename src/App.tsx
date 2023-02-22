import React from 'react';
import './App.css';
import { someInvoke1 } from './ipc/ipcRenderer';


function App () {

  someInvoke1().then((data) => {
    console.log(data)
  })

  return (
    <div className="App">
    </div>
  );
}

export default App;
