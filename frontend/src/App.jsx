
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [country, setCountry] = useState([])
  const [continent, setContinent] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(res => {
        const { country, continent } = res.data.data; 
        setCountry(country);
        setContinent(continent);
      })
      .catch(error => console.error(error));

  }, []);
  console.log(continent);
  console.log(country);

  return (
    <>
      <div className='text-orange-400'>
        <h1>League of Legends</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Continent</th>
                <th>Country</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {country? country.map((item) => (
              <tr>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              ))
              :""
            }
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  )
}

export default App
