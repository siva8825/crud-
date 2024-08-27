
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
const [data,setData] = useState([])

const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3006/Users/')
        .then(res=> setData(res.data))
        .catch(err => console.log(err))
               
    },[])


  return (
    <div className='container'>
        
        <div className="head">
        <h2 className=' mt-3'>CRUD App with JSON Server</h2>
        <Link to="/Create"   className='btn  btn-success mb-3'>Create +</Link>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>

<tbody>
    {
        data.map((d,i)=>{
           
            return(
            <tr key={i}>
                
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                    <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                    <button className='text-decoration-none btn btn-sm btn-danger'  onClick={e =>handleDelete(d.id)}>Delete</button>
                    <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>

                </td>
            </tr>
            )

        })
    }
</tbody>

        </table> 

    </div>
  )


function handleDelete(id){
  const confirm= window.confirm("Do you like to delete?")
  if(confirm){
    axios.delete('http://localhost:3006/Users/'+id)
    .then(res =>{
        alert("Record deleted")
        navigate('/')
        window.location.reload()
    })
    
  }

}


}

export default Home