// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Asegúrate de tener este archivo para los estilos

import Home from './components/Home';
import Ejercicio from './components/Ejercicio';
import EjercicioLista from './components/EjercicioLista';
// importa otras pantallas necesarias

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
              <header className="App-header">
                <div className="exercise-label">
                  <img src="../public/Logo_canva_compartido_con_mati-removebg-preview 2 (1).png" alt="Logo" className='logo' />
                </div>
                <button className="arrow-button"><img src="../public/volver-removebg-preview 1.png" alt="Arrow" className='arrow' /></button>
              </header>
              <main className="App-content">
                  {/* Contenido principal */}
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ejercicio" element={<Ejercicio />} />
                    <Route path="/lista" element={<EjercicioLista />} />
                      {/* Agrega rutas para otras pantallas aquí */}
                  </Routes>
              </main>
              <footer className="App-footer">
                <div className="footer-section">
                  
                </div>
              </footer>
            </div>
        </Router>
    );
};

export default App;
