import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Details(){
    const {id} =useParams();
    const [user, setUser] = useState([]);

    useEffect(()=>{

        axios.get(`http://127.0.0.1:8000/api/profile/${id}`).then(response =>{
            setUser(response.data);
            console.log(response.data);
        });
        
    },[]);
    return(
       <div>
        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
        <h1>Phone: {user.phone}</h1>
       
        
       </div>
    )
}