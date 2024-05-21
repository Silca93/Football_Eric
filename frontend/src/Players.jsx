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
    'image':null,
    'team': '',
    'country':'',
    'continent':'',
    'role':'',
    
})

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/players/')
      .then(res => {
        console.log(res.data);
        const { players, teams, country, continent, role } = res.data.data; 
        setPlayers(players);
        setTeams(teams);
        setCountry(country);
        setContinent(continent);
        setRole(role);

      })
      .catch(error => console.error(error));

  }, []);
  // console.log(player);
  console.log(role);
  




  const create = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formPlayer) {
        data.append(key, formPlayer[key]);
    }

    try {
        
        const response = await axios.post('http://127.0.0.1:8000/players/create/', data, {

          headers: {
            'Content-Type': 'multipart/form-data'
        }

      });
      console.log('Player Created:', response.data);
            setFormPlayer({
                name: '',
                image: null,
                team: '',
                country: '',
                continent: '',
                role: '',
                
            });

    
      

    } catch (error) {
      console.log(error);
    }
    // nav("/allteams")
}




const [fetchPlayers, setFetchPlayers] = useState([])
const [fetchTeams, setFetchTeams] = useState([])




useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await axios.get('http://127.0.0.1:8000/players/');
          setFetchPlayers(response.data);

          const equipe = await axios.get('http://127.0.0.1:8000/teams/');
          setFetchTeams(equipe.data);

      } catch (error) {
          console.error(error);
      }
  };
  fetchData();
  
}, []);

console.log(fetchPlayers);



const deletePlayer = async(id)=>{
  await axios.delete('http://127.0.0.1:8000/players/delete/'+ id)
  .then(res=>setPlayers(player.filter(item=>item.id !=id)))
}



const change = (e) => {
  // const {name, value} = e.target;
  // setFormPlayer({... formPlayer, [name]:value})
  const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setFormPlayer({
            ...formPlayer,
            [e.target.name]: value
        });

}





        
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className='text-2xl font-bold'>All players: </h1>
        <div className="w-[30rem] h-[4rem] bg-blue-300  rounded-lg flex gap-5 text-white justify-center items-center">
          <Link to="/allteams">
            <button className='text-xl hover:text-orange-400'>All teams</button>
          </Link> 
          <Link to ="/allplayers">
            <button className='text-xl hover:text-orange-400'>All players</button>
          </Link>
          <Link to="/admin_players">
            <button className='text-xl text-red-400 hover:text-green-300'>Admin Mode</button>
          </Link>

          
        </div>
        <div className="w-vw   flex gap-4 mx-3 flex-wrap my-3">
            {player && player.map((item, key) => {
              const equipeJoueur = team.find((equipe) => equipe.id === item.team);
              const paysJoueur = country.find((p) => p.id === item.country);
              const playerRole = role.find((p) => p.id === item.role);
              return (
                
                <div key={key} className="card w-96 bg-base-200 shadow-xl my-3">
                <figure><img src={`http://127.0.0.1:8000/${item.image}`} width="150px" height="150px" alt={player.name} /></figure>
                <div className="card-body h-[15rem]">
                  <h2 className="card-title ">{item.name}</h2>
                  {equipeJoueur  && <p> <span className='font-bold'>Team:</span> {equipeJoueur.name}</p>}
                  {paysJoueur && <p className=''><span className='font-bold'>Country of origin:</span>  {paysJoueur.name} </p>}
                  {playerRole && <p className=''><span className='font-bold'>Role:</span> {playerRole.name} </p>}
                  <div className='flex gap-5'>
                  
                    
                      <div className="card-actions justify-end">
                    <Link to={`/player_details/${item.id}`}>
                          <button className="btn btn-primary">Details</button>
                    </Link>
                      </div>
                      
                  </div>
            
                </div>
              </div>
              )
            }
          )
            
          }

        </div>

        <div className="">
        {/* <form onSubmit={create}>
                <label htmlFor="">Name</label>
                <input className="input" placeholder='name' type="text" name='name' value={formPlayer.name} onChange={(e) => change(e)} />
                <input className="input" placeholder='image' type="file" name='image'  onChange={(e) => change(e)} />
               
                <select value={formPlayer.category} onChange={(e) => setFormPlayer({...formPlayer, 'team': parseInt(e.target.value)})}>
                    <option value="">Select team</option>
                    {team ? team.map(col => (
                        <option key={col.id} value={col.id}>{col.name}</option>
                    )) : null}
                </select>
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
            </form> */}
        </div>
      
    </div>
  )
}
