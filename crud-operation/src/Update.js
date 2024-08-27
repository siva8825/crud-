import React,{ useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

const {id} = useParams()

    const [inputData , setInputData] = useState({
        id:id,
        name:'',
        email:'',
    })
const navigate =useNavigate()
 
useEffect(()=>{
axios.get('http://localhost:3006/Users/'+id)
.then(res=> setInputData(res.data))
.catch(err=> console.log(err))

}, [])

    const handleSubmit =(event)=>{
        event.preventDefault('')
        axios.put('http://localhost:3006/Users/'+id, inputData)
        .then(res =>{
            alert("Data updated successfully")
            navigate('/')
          
        })
    }


  return (
    <>

<div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-secondary text-white p-5">
            <form onSubmit={handleSubmit}>

            <div className=''>
                <label htmlFor="name">ID:</label><br />
                <input type="number" disabled name='id' className='form-control' value={inputData.id} 
               
                />
                </div>


                <div className=''>
                <label htmlFor="name">Name:</label><br />
                <input type="text" name='name' className='form-control' value={inputData.name} 
                onChange={e=>setInputData({...inputData, name: e.target.value})}
                />
                </div>
<div className='mt-3'>
<label htmlFor="email">Email:</label><br />
<input type="text" name='name' className='form-control' value={inputData.email}
  onChange={e=>setInputData({...inputData, email: e.target.value})}
/>
</div><br />
<button className='btn btn-info'>Update</button>

            </form>
        </div>
    </div>

    </>
  )
}

export default Update