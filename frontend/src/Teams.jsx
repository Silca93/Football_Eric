import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Teams() {


        const nav = useNavigate();
        

    
        const [country, setCountry] = useState([])
        const [teams, setTeams] = useState([])
        const [continent, setContinent] = useState([])
        // const [player, setPlayers] = useState([])
  
        useEffect(() => {
          axios.get('http://127.0.0.1:8000/teams/')
            .then(res => {
              const { teams, country, continent } = res.data.data; 
              setTeams(teams);
              // setPlayers(player);
              setCountry(country);
              setContinent(continent);
          
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
          'continent': '',
          
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




      const updateTeam = async (e) => {
        e.preventDefault();
    
        const data = new FormData();
        for (const key in formTeam) {
            data.append(key, formTeam[key]);
        }
    
        try {
            
            const response = await axios.post('http://127.0.0.1:8000/team/update/', data, {
    
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






      const change = (e) => {
        const {name, value} = e.target;
        setFormTeam({... formTeam, [name]:value})

    }

    const deleteTeam = async(id)=>{
      await axios.delete('http://127.0.0.1:8000/team/delete/'+ id)
      .then(res=>setTeams(teams.filter(item=>item.id !=id)))
  }
        
      
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className="text-2xl font-bold">All teams: </h1>
        <div className="w-[30rem] h-[4rem] bg-blue-300  rounded-lg flex gap-5 text-white justify-center items-center">
          <Link to="/allteams">
            <button className='text-xl hover:text-orange-400' >All teams</button>
          </Link> 
          <Link to ="/allplayers">
            <button className='text-xl hover:text-orange-400'> All players</button>
          </Link>
          <Link to ="/admin_team">
            <button className='text-xl text-red-400 hover:text-green-300'>Admin Mode</button>
          </Link>


        </div>
        <div className="w-vw   flex gap-4 mx-3 flex-wrap my-3">
            {teams && teams.map((item, key) => (
                <div key={key} className="card w-96 bg-base-200 shadow-xl my-3">
                <figure><img src={item.image} width="150px" height="150px" alt="Shoes" /></figure>
                <div className="card-body h-[15rem]">
                  <h2 className="card-title ">{item.name}</h2>
                  <p className=''>{item.description}</p>
                  <div className='flex gap-5'>
                    
                    <Link to="">
                      <div className="card-actions justify-end">
                          <button className="btn btn-primary">Details</button>
                      </div>
                    </Link>
                      
                  </div>

                
                </div>
              </div>
            ))}

        </div>
        <div className="">
        {/* <form onSubmit={create} className='flex flex-col gap-3 justify-center items-center'>
                <label htmlFor="" className="bg-white">Add new Team</label>
                <input className="input w-[20rem]" placeholder='description' type="text" name='description' value={formTeam.description} onChange={(e) => change(e)} />
                <input className="input w-[20rem]" placeholder='image url' type="" name='image' value={formTeam.image} onChange={(e) => change(e)} />
                <input className="input w-[20rem]" placeholder='name' type="text" name='name' value={formTeam.name} onChange={(e) => change(e)} />
                
                <select className=' w-[20rem]' value={formTeam.category} onChange={(e) => setFormTeam({...formTeam, 'country': parseInt(e.target.value)})}>
                    <option value="">Select country</option>
                    {country ? country.map(col => (
                        <option key={col.id} value={col.id}>{col.name}</option>
                    )) : null}
                </select>
                <select className=' w-[20rem]' value={formTeam.category} onChange={(e) => setFormTeam({...formTeam, 'continent': parseInt(e.target.value)})}>
                    <option value="">Select continent</option>
                    {continent ? continent.map(col => (
                        <option key={col.id} value={col.id}>{col.name}</option>
                    )) : null}
                </select>
                <button   className="input w-[20rem]" type="submit">Create</button>
            </form> */}
        </div>
      
    </div>
  )
}
