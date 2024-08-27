import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [inputData , setInputData] = useState({
        id:'',
        name:'',
        email:'',
    })
const navigate =useNavigate()

const handleSubmit =(event)=>{
        event.preventDefault('')
        axios.post('http://localhost:3006/Users' , inputData)
        .then(res =>{
         
            alert("Data posted successfully")
            navigate('/')
            
        })
    
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-secondary text-white p-5">
            <form onSubmit={handleSubmit}>

            <div className=''>
                <label htmlFor="name">ID:</label><br />
                <input type="text" name='name' className='form-control' 
                onChange={e=>setInputData({...inputData, id: e.target.value})}
                />
                </div>



                <div className=''>
                <label htmlFor="name">Name:</label><br />
                <input type="text" name='name' className='form-control' 
                onChange={e=>setInputData({...inputData, name: e.target.value})}
                />
                </div>
<div className='mt-3'>
<label htmlFor="email">Email:</label><br />
<input type="text" name='name' className='form-control'
  onChange={e=>setInputData({...inputData, email: e.target.value})}
/>
</div><br />
<button className='btn btn-info'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Create