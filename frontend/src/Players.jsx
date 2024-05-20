import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Players() {
  const nav = useNavigate();

  const [player, setPlayers] = useState([])
  const [team, setTeams] = useState([])
  const [role, setRole] = useState([])
  const [country, setCountry] = useState([])
  const [continent, setContinent] = useState([])


  const [formPlayer, setFormPlayer] = useState({
    'name' : '',
    'image':'',
    'team': '',
    'country':'',
    'continent':'',
    'role':'',
    
})

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/players/')
      .then(res => {
        const { players, teams, country, continent, role } = res.data.data; 
        setPlayers(players);
        setTeams(teams);
        setCountry(country);
        setContinent(continent);
        setRole(role);

      })
      .catch(error => console.error(error));

  }, []);
  console.log(player);
  console.log(team);




  const create = async (e) => {
    e.preventDefault();
    try {
        
        const res = await axios.post('http://127.0.0.1:8000/players/create/', formPlayer);

        console.log(res);
      

    } catch (error) {
      console.log(error);
    }
    // nav("/allteams")
}



const deletePlayer = async(id)=>{
  await axios.delete('http://127.0.0.1:8000/players/delete/'+ id)
  .then(res=>setPlayers(player.filter(item=>item.id !=id)))
}



const change = (e) => {
  const {name, value} = e.target;
  setFormPlayer({... formPlayer, [name]:value})

}





        
  return (
    <div>
        <h1>All players: </h1>
        <div className="w-vw   flex gap-4 mx-3 flex-wrap my-3">
            {player? player.map((item, key) => (
                <div key={key} className="card w-96 bg-base-200 shadow-xl my-3">
                <figure><img src={item.image} width="150px" height="150px" alt="" /></figure>
                <div className="card-body h-[15rem]">
                  <h2 className="card-title ">{item.name}</h2>
                  <p>Team: {item.team? item.team : "no data found"}</p>
                  <p className=''>Country of origin : {item.country}</p>
                  <p className=''>Role: {item.role}</p>
                  <Link to="">
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                  </Link>
                    <button className='btn btn-secondary w-[3rem]' onClick={(id) => deletePlayer(item.id)}>X</button>

                
                </div>
              </div>
            ))
            : "failed to fetch data"
          }

        </div>

        <div className="w-vw h-[20rem] bg-green-400 flex">
        <form onSubmit={create}>
                <label htmlFor="">Name</label>
                <input className="input" placeholder='name' type="text" name='name' value={formPlayer.name} onChange={(e) => change(e)} />
                <input className="input" placeholder='image url' type="" name='image' value={formPlayer.image} onChange={(e) => change(e)} />
                <input className="input" placeholder='team' type="text" name='team' value={formPlayer.team} onChange={(e) => change(e)} />
                {/* <input className="input" placeholder='country' type="number" name='country' value={formTeam.country} onChange={(e) => change(e)} /> */}
                
                <select value={formPlayer.category} onChange={(e) => setFormPlayer({...formPlayer, 'country': parseInt(e.target.value)})}>
                    <option value="">Select country</option>
                    {country ? country.map(col => (
                        <option key={col.id} value={col.id}>{col.name}</option>
                    )) : null}
                </select>
                <select value={formPlayer.category} onChange={(e) => setFormPlayer({...formPlayer, 'continent': parseInt(e.target.value)})}>
                    <option value="">Select continent</option>
                    {continent ? continent.map(col => (
                        <option key={col.id} value={col.id}>{col.name}</option>
                    )) : null}
                </select>
                <select value={formPlayer.category} onChange={(e) => setFormPlayer({...formPlayer, 'role': parseInt(e.target.value)})}>
                    <option value="">Select role</option>
                    {role ? role.map(col => (
                        <option key={col.id} value={col.id}>{col.name}</option>
                    )) : null}
                </select>
                <button  className="input" type="submit">Create</button>
            </form>
        </div>
      
    </div>
  )
}
