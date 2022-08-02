import { useState } from 'react';
import './stylesLogin.css';



export function Login(){
    const [user, setUser] = useState({
        usuario: "",
        password: "",
    }); 
    const handelChange = ({target: {name,value}}) => {
        setUser({...user, [name]: value})
    }
    const handelSubmit = e => {
        e.preventDefault()
        console.log(user);
    }

    return(
        <div className='contenedor'>
        <h2>Incia Sesion</h2>
        <form onSubmit={handelSubmit}>
            <div className="usuario">
                <input type="usuario" 
                  name='usuario'
                  required 
                  onChange={handelChange}     
                  />
                <label>Nombre de usuario</label>
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
                Iniciar!
            </button>
      
        </form>
      </div>
          )
  }