import React from 'react';
import "./usersPage.css"
import { Link } from 'react-router-dom';


const UsersPage = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Akshay</td>
                        <td>akdjsh</td>
                        <td className='actionButtons'>
                            <button>Delete</button>
                            <Link to={"/update"}>Update</Link>
                        </td>
                    </tr>
                </tbody>
            </table>           
        </div>
    );
}

export default UsersPage;
