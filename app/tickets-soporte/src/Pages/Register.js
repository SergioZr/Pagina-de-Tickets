import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

import './styleRestiger.css';


export function Register(){
    const { singup } = useAuth();
    const navigate = useNavigate();
    const [setError] = useState();

    const [user, setUser] = useState({
        email: "",
        password: "",
    }); 
    const handelChange = ({target: {name,value}}) => {
        setUser({...user, [name]: value})
    }


    async function sendSingUp( e ){
        e.preventDefault()
        try {
            await singup({
                ...user,
                passwordConfirm: user.password
            });
            console.log(user);
            navigate("/createtickets");    
        } catch (error) {
            setError(error.message);
        }
         
    }
 
      
    return(
        <div className='contenedor'>
        <h2>Resgistro</h2>
        <form onSubmit={sendSingUp}>
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