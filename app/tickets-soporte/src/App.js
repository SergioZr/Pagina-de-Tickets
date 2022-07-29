import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <ul>
    <li style={{"--clr":"#03e9f4"}}>
      <a href="Pages/tickets.html" data-text="&nbsp;Ticket">&nbsp;Ticket&nbsp;</a>
  </li>
  <li style={{"--clr":"#03e9f4"}}>
      <a href="Pages/Contact.html" data-text="&nbsp;Contacto">&nbsp;Contacto&nbsp;</a>
  </li>
  <li style={{"--clr":"#03e9f4"}}>
      <a href="Pages/User.html" data-text="&nbsp;Técnicos">&nbsp;Técnicos&nbsp;</a>
  </li>
  </ul>
  )
}

export default App;
