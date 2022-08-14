import { useState } from "react";
import { useAuth } from "../context/authContext";
import "./stylesCreateTickets.css";

export function TicketsUser() {
  const { login } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handelChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };
  async function sendlogin(e) {
    e.preventDefault();
    try {
      await login(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="contenedor">
      <h2>¡Crea tu ticket!</h2>
      <form onSubmit={sendlogin}>
        <div className="usuario">
          <input type="tel" name="telefono" required onChange={handelChange} />
          <label>Ingresa tu número de teléfono</label>
        </div>
        <div className="consulta">
          <legend>¿Desea soporte remoto?</legend>
          <br></br>
          <label>Si, por favor  
          <input type="radio" name="consulta" onChange={handelChange} />
          </label>
          <br></br>
          <br></br>
          <label>No, gracias 
          <input type="radio" name="consulta" onChange={handelChange} />
          </label>
        </div>
        <button className="iniciar">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ¡Crear Ticket!
        </button>
      </form>
    </div>
  );
}
