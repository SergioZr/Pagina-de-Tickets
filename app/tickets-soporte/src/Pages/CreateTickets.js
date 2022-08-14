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
        <h2>Información de Contacto</h2>

        <div className="usuario">
          <input type="tel" name="telefono" required onChange={handelChange} />
          <label>Ingresa tu número de teléfono</label>
        </div>

        <div className="consulta">
          <legend>¿Desea soporte remoto?</legend>
          <br></br>
          <label>
            Si, por favor
            <input type="radio" name="consulta" />
          </label>
          <br></br>
          <br></br>
          <label>
            No, gracias
            <input type="radio" name="consulta" />
          </label>
        </div>

        <br></br>

        <div className="usuario">
          <input
            type="text"
            name="AnyDeskID"
            required
            onChange={handelChange}
          />
          <label>Ingresa tu ID de AnyDesk    (Opcional)</label>
        </div>

        <h2>¿Cúal es el problema?</h2>
        

        <textarea
          name="descripcion"
          placeholder="Describe el problema, se lo más detallado posible por favor."
        />
    
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
 /*
         <div className="consulta">
          <legend>Nivel de prioridad</legend>
          <select>
            <option>Bajo</option>
            <option>Medio</option>
            <option>Alto</option>
          </select>
        </div>
        <br></br>
 */