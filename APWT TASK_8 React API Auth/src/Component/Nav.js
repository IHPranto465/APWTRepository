import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import styles from "./Style/button.module.css";
export default function Nav(){
    return(
        <div>
         <Link className={styles.button} to="/home">Home</Link>
          <Link className={styles.button} to="/profile">Profile</Link> 
          <Link className={styles.button} to="/user">Users</Link>
          <Link className={styles.button} to="/logout">Logout</Link>
        </div>
    );
}