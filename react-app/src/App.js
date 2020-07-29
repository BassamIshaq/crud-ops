import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    people: [
      {
        name: 'Ali',
        age: 22
      },
      {
        name: 'Talha',
        age: 23
      }
    ]
  })

  const displayData = () => {
    var people = data.people.map((person) => {
      return <table>
        <tr>
          <td>
            {person.name}
          </td>
          <td>
            {person.age}
          </td>
        </tr>
      </table>
    })
    return people
  }
  return (
    <div className="App">
      <div>
        <button>Display all records</button>
        <div>
          <input placeholder='Enter name of person' />
          <button>Display one record</button>
        </div>
        <div>
          <input placeholder='Enter name of person' />
          <input placeholder='Enter age' />
          <button>Create Record</button>
        </div>
        <div>
          <input placeholder='Enter name of person' />
          <button>Delete record</button>
        </div>
        <div>
          <input placeholder='Enter name of person' />
          <input placeholder='Enter new age' />
          <button>Update Record</button>
        </div>
      </div>
      <div>
        <div>
          {displayData()}
        </div>
      </div>

    </div>
  );
}

export default App;
