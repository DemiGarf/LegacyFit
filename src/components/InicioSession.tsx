import { useState } from 'react';
import React from 'react';
import "../App.css"


const InicioSession: React.FC = () => {
    const [Mail, setMail] = useState('');
    const [Contrasena, setContrasena] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            Mail,
            Contrasena,
        };

        try {
            const response = await fetch('https://legacy-fit-pp4p.vercel.app/user/Create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                console.log('Usuario registrado con éxito');
                // Redireccionar o mostrar mensaje de éxito
                // ejercicioLista
                window.location.href = "/lista"
            } else {
                console.error('Error al registrar el usuario');
            }
        } catch (error) {
            console.error('Error en la petición:', error);
        }
    };
    return (
        <div className="home">
            <h2 className="main-title">Inicio Sesion</h2> {/* Título fuera del contenedor del formulario */}
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        value={Mail}
                            onChange={(e) => setMail(e.target.value)}
                         id="email" placeholder='email o telefono'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input value={Contrasena} onChange={(e) => setContrasena(e.target.value)}
                         type="password" id="password" placeholder="Ingresa tu contraseña" />
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