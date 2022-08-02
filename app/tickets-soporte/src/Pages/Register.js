//import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
//import { useNavigate } from 'react-router-dom';
import './styleRestiger.css';


//const client = new PocketBase('http://localhost:8090');



export function Register(){
    const { singup } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
    }); 
    const handelChange = ({target: {name,value}}) => {
        setUser({...user, [name]: value})
    }


    async function sendlogin( e ){
        e.preventDefault()
        await singup({
            ...user,
            passwordConfirm: user.password
        }); 
    }
 
      
    return(
        <div className='contenedor'>
        <h2>Resgistro</h2>
        <form onSubmit={sendlogin}>
            <div className="usuario">
                <input type="email" 
                  name='email'
                  required 
                  onChange={handelChange}
                  />
                <label>Correo</label>
            </div>  

            <div className="usuario">
                <input type="password" 
                  name='password'
                  required 
                  onChange={handelChange}
                  />
                <label>Contraseña</label>
            </div>
            <button className="iniciar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Registrame!
            </button>
      
        </form>
      </div>
          )
  }