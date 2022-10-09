import { NavLink } from "react-router-dom";
import './styleHome.css'
export function Home(){
    return (

    <ul>
        <li style={{"--clr":"#03e9f4"}}>
          <NavLink to='/login' data-text="&nbsp;Crear Ticket">&nbsp;Crear Ticket&nbsp;</NavLink>
         </li>
        <li style={{"--clr":"#03e9f4"}}>
          <NavLink to="/register" data-text="&nbsp;¡Registrate!">&nbsp;¡Registrate!&nbsp;</NavLink>
        </li>
        <li style={{"--clr":"#03e9f4"}}>
          <NavLink to="/login" data-text="&nbsp;Administradores">&nbsp;Administradores&nbsp;</NavLink>
        </li>
    </ul>
    );

}