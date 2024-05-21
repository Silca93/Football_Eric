
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
      <div className='text-orange-400 flex flex-col gap-3 justify-center items-center'>
        <h1 className='m-[4rem]'>League of Legends</h1>
        <div className="w-[30rem] h-[4rem] bg-blue-300  rounded-lg flex gap-5 text-white justify-center items-center">
         <Link to="allteams">
          <button className='text-xl hover:text-orange-400' >All teams</button>
         </Link> 
         <Link to ="allplayers">
         <button className='text-xl hover:text-orange-400'> All players</button>
         </Link>
         <Link>
             <button className='text-xl text-red-400 hover:text-green-300'>Admin Mode</button>
         </Link>


        </div>
      </div>
      
    </>
  )
}

export default App
