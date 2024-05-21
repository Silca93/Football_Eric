import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function Details() {

 const {id} = useParams();

    
  const [player, setPlayers] = useState([])
  const [team, setTeams] = useState([])
  const [role, setRole] = useState([])
  const [country, setCountry] = useState([])
  const [continent, setContinent] = useState([])




  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/player_details/${id}`)
      .then(res => {
        console.log(res.data);
        const { players, teams, country, continent, role } = res.data.data; 
        setPlayers(players);
        setTeams(teams);
        setCountry(country);
        setContinent(continent);
        setRole(role);
        const selectedPlayer = player.filter((item) => item.id == id)
        setPlayers(selectedPlayer)

      })
      .catch(error => console.error(error));

  }, []);
  // console.log(player);
  console.log(player);
  



  return (
    <div>
    <div className="flex flex-col gap-3 justify-center items-center">
   <h1 className='text-2xl font-bold'>Player details: </h1>
  
   <div className="w-vw   flex gap-4 mx-3 flex-wrap my-3">
       {player && player.map((item, key) => {
        //  const equipeJoueur = team.find((equipe) => equipe.id === item.team);
        //  const paysJoueur = country.find((p) => p.id === item.country);
        //  const playerRole = role.find((p) => p.id === item.role);
         return (
           
           <div key={key} className="card border-[2px] border-green-300 w-96 bg-base-200 shadow-xl my-3">
           <figure><img src={`http://127.0.0.1:8000/${item.image}`} width="150px" height="150px" alt={player.name} /></figure>
           <div className="card-body h-[15rem]">
             {/* <h2 className="card-title ">{item.name}</h2>
             {equipeJoueur  && <p> <span className='font-bold'>Team:</span> {equipeJoueur.name}</p>}
             {paysJoueur && <p className=''><span className='font-bold'>Country of origin:</span>  {paysJoueur.name} </p>}
             {playerRole && <p className=''><span className='font-bold'>Role:</span> {playerRole.name} </p>} */}
             {item.continent}
             <p>{item.name}</p>
             <p>{item.role}</p>
             <div className='flex gap-5'>
             
               
               <Link to="">
                 <div className="card-actions justify-end">
                   
                 </div>
               </Link>
                 <button className='btn btn-secondary w-[3rem]' onClick={(id) => deletePlayer(item.id)}>Delete</button>
             </div>
       
           </div>
         </div>
         )
       }
     )
       
     }

   </div>

   
 
</div>
 
</div>
   
    
  )
}
