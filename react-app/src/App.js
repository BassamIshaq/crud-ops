import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button>Display all records</button>
      <div>
        <input placeholder='Enter name of person'/>
        <button>Display one record</button>
      </div>
      <div>
        <input placeholder='Enter name of person'/>
        <input placeholder='Enter age'/>
        <button>Create Record</button>
      </div>
      <div>
        <input placeholder='Enter name of person'/>
        <button>Delete record</button>
      </div>
      <div>
        <input placeholder='Enter name of person'/>
        <input placeholder='Enter new age'/>
        <button>Update Record</button>
      </div>

    </div>
  );
}

export default App;
