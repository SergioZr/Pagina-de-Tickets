import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "./stylesLogin.css";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

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
      await login( user );
      navigate("/createtickets");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="contenedor">
      <h2>Incia Sesion</h2>
      <form onSubmit={sendlogin}>
        <div className="usuario">
          <input type="email" name="email" required onChange={handelChange} />
          <label>Correo Electronico</label>
        </div>
        <div className="usuario">
          <input
            type="password"
            name="password"
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
  );
}
