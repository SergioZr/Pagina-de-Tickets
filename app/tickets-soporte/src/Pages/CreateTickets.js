import { useState } from "react";
import { usePocket } from "../context/authContext";
import "./stylesCreateTickets.css";

export function TicketsUser() {

  const {pocketClient: client, user} = usePocket();

  const [ticket, setTicket] = useState({
    telefon: "",
    consulta: "",
    description: "",
    anyDeskId: "",
    users: user.email,
  });
  const handelChange = ({ target: { name, value } }) => {
    setTicket({ ...ticket, [name]: value });
    console.log(name, value);
  };

  async function createTicket(e) {
    e.preventDefault();
    console.log(ticket);
    try {
      await client.Records.create("tickets", ticket);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="contenedor">
        <h2>¡Crea tu ticket!</h2>
        <form onSubmit={createTicket}>
          <h2>Información de Contacto</h2>

          <div className="usuario">
            <input type="tel" name="telefon" required onChange={handelChange} />
            <label>Ingresa tu número de teléfono</label>
          </div>

          <div className="consulta">
            <legend>¿Desea soporte remoto?</legend>
            <br></br>
            <label>
              Si, por favor
              <input type="radio" name="consulta" onChange={handelChange} />
            </label>
            <br></br>
            <br></br>
            <label>
              No, gracias
              <input type="radio" name="consulta" onChange={handelChange} />
            </label>
          </div>

          <br></br>

          <div className="usuario">
            <input
              type="text"
              name="anyDeskId"
              required
              onChange={handelChange} />
            <label>Ingresa tu ID de AnyDesk    (Opcional)</label>
          </div>

          <h2>¿Cúal es el problema?</h2>

          <textarea
            name="description"
            onChange={handelChange}
            placeholder="Describe el problema, se lo más detallado posible por favor." />

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