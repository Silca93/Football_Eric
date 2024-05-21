import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// export default function UpdateTeam() {



//     const [country, setCountry] = useState([])
//     const [teams, setTeams] = useState([])
//     const [continent, setContinent] = useState([])
//     const [editTeamId, setEditTeamId] = useState([])
//     // const [player, setPlayers] = useState([])

//     useEffect(() => {
//       axios.get('http://127.0.0.1:8000/teams/')
//         .then(res => {
//           const { teams, country, continent } = res.data.data; 
//           setTeams(teams);
//           // setPlayers(player);
//           setCountry(country);
//           setContinent(continent);
//           setEditTeamId()
      
//         })
//         .catch(error => console.error(error));
  
//     }, []);






//     const [editFormData, setEditFormData] = useState({
        
//         name: '',
//         description: '',
//         image: null,
//         country: '',
//         continent: '',
        
//     });

//     const updateTeam = async (e) => {
//         e.preventDefault();
    
//         try {
            
//             const response = await axios.put(`http://127.0.0.1:8000/team/update/`, editFormData, {
    
//           });
//           console.log('Player Created:', response.data);
//                 setFormPlayer({
//                     name: '',
//                     image: null,
//                     team: '',
//                     country: '',
//                     continent: '',
//                     role: '',
                    
//                 });
    
        

    
//         } catch (error) {
//           console.log(error);
//         }
//         // nav("/allteams")
//     }






//       const change = (e) => {
//         const {name, value} = e.target;
//         setEditFormData({... editFormData, [name]:value})

//     }
//   return (
//     <div>
//         Update Team:
//         <div className="w-vw h-[20rem] bg-gray-200 ">
//         <form onSubmit={updateTeam} className='flex flex-col gap-3 justify-center items-center'>
//                 <label htmlFor="">update</label>
//                 <input className="input w-[20rem]" placeholder='description' type="text" name='description' value={editFormData.description} onChange={(e) => change(e)} />
//                 <input className="input w-[20rem]" placeholder='image url' type="" name='image' value={editFormData.image} onChange={(e) => change(e)} />
//                 <input className="input w-[20rem]" placeholder='name' type="text" name='name' value={editFormData.name} onChange={(e) => change(e)} />
//                 {/* <input className="input" placeholder='country' type="number" name='country' value={formTeam.country} onChange={(e) => change(e)} /> */}
                
//                 <select className=' w-[20rem]' value={editFormData.category} onChange={(e) => setEditFormData({...editFormData, 'country': parseInt(e.target.value)})}>
//                     <option value="">Select country</option>
//                     {country ? country.map(col => (
//                         <option key={col.id} value={col.id}>{col.name}</option>
//                     )) : null}
//                 </select>
//                 <select className=' w-[20rem]' value={editFormData.category} onChange={(e) => setEditFormData({...editFormData, 'continent': parseInt(e.target.value)})}>
//                     <option value="">Select continent</option>
//                     {continent ? continent.map(col => (
//                         <option key={col.id} value={col.id}>{col.name}</option>
//                     )) : null}
//                 </select>
//                 <button   className="input w-[20rem]" type="submit">Create</button>
//             </form>
//         </div>

      
//     </div>
//   )
// }


function UpdateTeam() {
    const [teams, setTeams] = useState([]);
    const [country, setCountry] = useState([])
    const [editTeamId, setEditTeamId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        description: '',
        image: null,
        country: '',
        continent: ""
    });


    useEffect(() => {
        axios.get('http://localhost:8000/teams/')
            .then(response => {
                console.log(response.data); 
                setTeams(response.data);
                setCountry(response.data)
            })
            .catch(error => console.error('Error fetching teams:', error));
    }, []);


    const handleEdit = (team) => {
        setEditTeamId(team.id);
        setEditFormData(team);
    };

    const handleCancel = () => {
        setEditTeamId(null);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setEditFormData({ ...editFormData, [name]: value });
    };
   

    console.log(teams);


    const handleSave = (event) => {
        event.preventDefault();
    
        //! Création d'un objet FormData pour l'envoi des fichiers et des données
        const formData = new FormData();
        formData.append('name', editFormData.name);
        formData.append('description', editFormData.description);
        formData.append('image', editFormData.image);
        formData.append('country', editFormData.country);  
        formData.append('continent', editFormData.continent)
    
        axios.put(`http://localhost:8000/teams/${editTeamId}/`, formData, {
        })
        .then(() => {
            const updatedTeams = teams.map(team => {
                if (team.id === editTeamId) {
                    return { ...team, ...editFormData };
                }
                return team;
            });
            setTeams(updatedTeams);
            setEditTeamId(null);
        })
        .catch(error => {
            console.error('Error updating team:', error);
            console.log(error.response.data);  
        });
    };
    

    return (
        <div className='text-white w-[100vw] h-[100vh] p-4 flex flex-col justify-center items-center'>
            <h1 className='mb-10 text-5xl font-bold underline'> TEAMS </h1>
            <Link to="/teams/create" className='mb-14 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Add New Team
            </Link>
            <div className='w-full flex flex-wrap justify-center items-center gap-16 p-2'>
                {teams && teams.map(team => (
                    <div key={team.id} className='flex flex-col justify-center items-center gap-4'>
                        {editTeamId === team.id ? (
                            <form onSubmit={handleSave} className='flex flex-col gap-3 text-black'>
                                <input type="text" name="name" value={editFormData.name} onChange={handleFormChange} />
                                <input type="text" name="description" value={editFormData.description} onChange={handleFormChange} />
                                <input type="number" name="image" value={editFormData.image} onChange={handleFormChange} />
                                <input type="text" name="country" value={editFormData.country} onChange={handleFormChange} />
                                <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Save</button>
                                <button type="button" onClick={handleCancel} className='bg-gray-500 text-white p-2 rounded'>Cancel</button>
                            </form>
                        ) : (
                            <div>
                                <div class="card-container">
                                    <div class="card">
                                        <div class="img-content">
                                            <img className='w-[230px] h-[180px]' src={`http://localhost:8000/${team.image}`} alt={team.name}></img>
                                        </div>
                                        <div class="content">
                                            <p className='text-3xl font-bold'>{team.nom_team}</p>
                                            <p> {team.ville} </p>
                                            <p> Joueurs : {team.joueur_count}/{team.max_joueurs} max </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3 justify-center p-4 mt-3'>
                                    <Link to={`/teams/${team.id}`} className='bg-[#0b0e27] text-white p-1 px-4 rounded-xl'>View</Link>
                                    <button onClick={() => handleEdit(team)} className='bg-[#07180e] text-white p-1 px-4 rounded-xl'>Edit</button>
                                    <button onClick={() => deleteTeam(team.id)} className='bg-[#471414] text-white p-1 px-4 rounded-xl'>Delete</button>
                                </div>

                            </div>
                            
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpdateTeam;
