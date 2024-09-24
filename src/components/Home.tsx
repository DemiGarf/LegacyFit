import React from 'react';
import "../App.css"

const Home: React.FC = () => {
    return (
        <div className="home">
            <h2 className="main-title">Inicio de sesión</h2> {/* Título fuera del contenedor del formulario */}
            <div className="login-container">
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id="apellido" placeholder="Ingresa tu apellido" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Ingresa tu email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" placeholder="Ingresa tu contraseña" />
                    </div>
                    <button type="submit" className="submit-button">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
