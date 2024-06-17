import React, { useEffect, useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'

import "./Update.css"

const Update = () => {

    const {id} = useParams();
    const navigate = useNavigate()

    const [user ,setUser] = useState({
        fanme:"",
        lanme:"",
        email:""
    })

    const inputeChangeHandler = (e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
        console.log(user)
    }

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/users/${id}`)
        .then((response)=>{
            setUser(response.data)
        })
    },[id])

    const submitHandler = async(e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:4000/api/users/${id}`,user)
        .then((response)=>{
            navigate("/")

        }).catch((error)=>{
           console.log(error)
        })
    }
    return (
        <div className='updateUser'>

            <Link to={"/"}>Back</Link>
            <h3>Update User</h3> 

            <form className='updateUserForm' onSubmit={submitHandler}>
                <div className='inputGroup'>
                    <label htmlFor='fname'>First Name</label>
                    <input type="text" onChange={inputeChangeHandler} value={user.fname} id='fname' name='fname' autoComplete='off' placeholder='First Name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type="text" onChange={inputeChangeHandler} value={user.lname} id='lname' name='lname' autoComplete='off' placeholder='Last Name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" onChange={inputeChangeHandler} value={user.email} id='email' name='email' autoComplete='off' placeholder='Email' />
                </div>
                <div className='inputGroup'>
                    <button type="submit">Update USER</button>
                </div>
            </form>
        </div>
    );
}

export default Update;
