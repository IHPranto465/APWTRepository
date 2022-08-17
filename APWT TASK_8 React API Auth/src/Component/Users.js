import Reeact,{ useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Users(){
    const [user, setUser] = useState([]);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[token, setToken]= useState("");
    const navigate  = useNavigate("");
 
  

    const loginSubmit= () =>{
        var obj = {email: email, password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            console.log("hell-------------")
            var user = {userId: token.u_id, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            if(token === "No user found"){
                navigate('/user');
            }else{
                navigate('/profile');
            }
            // console.log(localStorage.getItem('user'));
        }).catch(err=>{
            console.log(err);
        });

    }
    return(
        <div>
             <br/>
            <h3>LOGIN</h3>
           
          <form>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" /> <br /> 
          <br/>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
          </form>
          <br />
          <button onClick={loginSubmit}>Login</button>
          
        </div>
    );
}