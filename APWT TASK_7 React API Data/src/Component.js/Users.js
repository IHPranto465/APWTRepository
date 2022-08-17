import Reeact,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from 'react-bootstrap';
export default function Users(){
    const [user, setUser] = useState([]);
 
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/registration").then(response =>{
            setUser(response.data);
        });
        
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