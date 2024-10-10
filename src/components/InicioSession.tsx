

import React from 'react';
import "../App.css"


const InicioSession: React.FC = () => {
    return (
        <div className="home">
            <h2 className="main-title">Inicio Sesion</h2> {/* Título fuera del contenedor del formulario */}
            <div className="login-container">
                <form action='/lista' method='GET' className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder='email o telefono'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" placeholder="Ingresa tu contraseña" />
                    </div>
                    <button type="submit" className="submit-button">Iniciar Sesion</button>
                </form>
            </div>
            <div>
                <p className="login-desc">nuevo en legacy fit? &nbsp; &nbsp; <a href="/">Crear Cuenta</a></p>
            </div>
        </div>
    );
};


export default InicioSession;