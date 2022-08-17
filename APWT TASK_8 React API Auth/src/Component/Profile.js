import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from './axiosConfig';
import { Table } from 'react-bootstrap';
export default function Profile({props}){
    const [user, setUser] = useState([]);
    const navigate = useNavigate('');
 
    useEffect(()=>{

       if (localStorage.getItem('user')){
        axiosConfig.get("registration")
        .then(resp=>{
          setUser(resp.data);
         }).catch(err=>{
          console.log(err);
         }
        );

    }else{
        alert("You are not logged in. Login or registration first");
        navigate('/user');
    }

    },[]);
    return(
        <div>
          <Table>
          <thead>
          <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>

            </tr>
          </thead>
           {
             user.map(p=>(
                <tr>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.phone}</td>
                    <td><Link to={`/details${p.id}`}>Details</Link></td>
                </tr>
            ))
           }
          </Table>
        </div>
    );
}