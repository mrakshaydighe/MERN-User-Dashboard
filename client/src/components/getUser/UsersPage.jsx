import React, { useState ,useEffect } from 'react';
import "./usersPage.css"
import { Link } from 'react-router-dom';
import axios from 'axios';


const UsersPage = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:4000/api/users');
            setUsers(response.data);
        };

        fetchData();
    }, []);

    const deletHandler = async(userID)=>{
        await axios.delete(`http://localhost:4000/api/users/${userID}`)
        .then((response)=>{
            console.log(response)
            setUsers((prevUser)=>prevUser.filter((user)=>user._id !== userID))
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='userTable'>
            <Link to={"/add"} className='addButton'> Add user</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return(
                                <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className='actionButtons'>
                                    <button onClick={()=>deletHandler(user._id)}>Delete</button>
                                    <Link to={`/update/`+user._id}>Update</Link>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsersPage;
