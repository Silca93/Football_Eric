import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Teams() {


        const nav = useNavigate();
        

     
        const [country, setCountry] = useState([])
        const [teams, setTeams] = useState([])
        // const [player, setPlayers] = useState([])
   
        useEffect(() => {
          axios.get('http://127.0.0.1:8000/teams/')
            .then(res => {
              const { teams, country } = res.data.data; 
              setTeams(teams);
              // setPlayers(player);
              setCountry(country);
           
            })
            .catch(error => console.error(error));
      
        }, []);
        // console.log(players);
        // console.log(teams);
        // console.log(country);



        const [formTeam, setFormTeam] = useState({
          'name' : '',
          'description': '',
          'image':'',
          'country':'',
          
      })

        const create = async (e) => {
          e.preventDefault();
          try {
              
              const res = await axios.post('http://127.0.0.1:8000/team/create/', formTeam);

              console.log(res);
            

          } catch (error) {
            console.log(error);
          }
          // nav("/allteams")
      }

      const change = (e) => {
        const {name, value} = e.target;
        setFormTeam({... formTeam, [name]:value})

    }

    const deleteTeam = async(id)=>{
      await axios.delete('http://127.0.0.1:8000/team/delete/'+ id)
      .then(res=>setTeams(teams.filter(item=>item.id !=id)))
  }
        
      
  return (
    <div>
        <h1 className="text-2xl font-bold">All teams: </h1>
        <div className="w-vw   flex gap-4 mx-3 flex-wrap my-3">
            {teams && teams.map((item, key) => (
                <div key={key} className="card w-96 bg-base-200 shadow-xl my-3">
                <figure><img src={item.image} width="150px" height="150px" alt="Shoes" /></figure>
                <div className="card-body h-[15rem]">
                  <h2 className="card-title ">{item.name}</h2>
                  <p className=''>{item.description}</p>
                  <Link to="">
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                  </Link>
                    <button className='btn btn-secondary w-[3rem]' onClick={(id) => deleteTeam(item.id)}>X</button>

                
                </div>
              </div>
            ))}

        </div>
        <div className="w-vw h-[20rem] bg-gray-200 ">
        <form onSubmit={create} className='flex flex-col gap-3 justify-center items-center'>
                <label htmlFor="">Add new Team</label>
                <input className="input w-[20rem]" placeholder='description' type="text" name='description' value={formTeam.description} onChange={(e) => change(e)} />
                <input className="input w-[20rem]" placeholder='image url' type="" name='image' value={formTeam.image} onChange={(e) => change(e)} />
                <input className="input w-[20rem]" placeholder='name' type="text" name='name' value={formTeam.name} onChange={(e) => change(e)} />
                {/* <input className="input" placeholder='country' type="number" name='country' value={formTeam.country} onChange={(e) => change(e)} /> */}
                
                <select className=' w-[20rem]' value={formTeam.category} onChange={(e) => setFormTeam({...formTeam, 'country': parseInt(e.target.value)})}>
                    <option value="">Select country</option>
                    {country ? country.map(col => (
                        <option key={col.id} value={col.id}>{col.name}</option>
                    )) : null}
                </select>
                <button   className="input w-[20rem]" type="submit">Create</button>
            </form>
        </div>
      
    </div>
  )
}
