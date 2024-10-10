import React, { useState } from 'react';
import "../App.css";

const InicioSession: React.FC = () => {
    // Crear estado para manejar los valores del formulario
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Mail, setMail] = useState('');
    const [Contrasena, setContrasena] = useState('');

    // Manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Evitar que el formulario recargue la página

        const userData = {
            Nombre,
            Apellido,
            Mail,
            Contrasena,
        };

        try {
            const response = await fetch('/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Usuario registrado exitosamente');
                // Puedes redirigir o mostrar un mensaje de éxito
            } else {
                console.error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error en la petición:', error);
        }
    };

    return (
        <div className="home">
            <h2 className="main-title">Inicio Sesion</h2>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="Nombre">Nombre</label>
                        <input
                            type="text"
                            id="Nombre"
                            value={Nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Mail">Mail</label>
                        <input
                            type="email"
                            id="Mail"
                            value={Mail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="Tu mail"
                        />
                    </div>
                    <button type="submit" className="submit-button">Crear Cuenta</button>
                </form>
            </div>
            <div>
                <p className="login-desc">¿Nuevo en Legacy Fit? &nbsp; &nbsp; <a href="/">Iniciar Sesión</a></p>
            </div>
        </div>
    );
};

export default InicioSession;
