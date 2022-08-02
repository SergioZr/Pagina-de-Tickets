import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Tickets } from './Pages/Ticekts';
import {AuthProvider} from './context/authContext'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/tickets" element={<Tickets/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
    );
}

export default App;
