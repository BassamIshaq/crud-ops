import React, { useState, useEffect } from 'react';
import axios from 'axios'
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

  const [person, setPerson] = useState({
    people: [
      {
        name: 'Ali',
        age: 22
      }
    ]
  })

  const [serverPath, setServerPath] = useState('http://localhost:5000/')

  useEffect(() => {
    const fetchdata = async () => {
      await axios.get(serverPath)
    }
    const result = fetchdata()
    result.then((res) => {
      setData(res.data)
    })
  }, [serverPath])

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

  const displaySingleData = () => {
    var people = person.people.map((singleRecord) => {
      return <table>
        <tr>
          <td>
            {singleRecord.name}
          </td>
          <td>
            {singleRecord.age}
          </td>
        </tr>
      </table>
    })
    return people
  }


  return (
    <div className="App">
      <div>
        <button onClick={() => { setServerPath('http://localhost:5000/GetData') }}>Display all records</button>
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
          {data.people.map((person) => {
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
          })}
        </div>
        <div>
          {displaySingleData()}
        </div>
      </div>

    </div>
  );
}

export default App;
