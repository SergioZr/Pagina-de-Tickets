import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { TicketsUser } from './pages/CreateTickets';
import {AuthProvider} from './context/authContext'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/createtickets" element={<TicketsUser/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    );
}

export default App;
