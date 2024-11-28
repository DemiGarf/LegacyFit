import { useState } from 'react';
import React from 'react';
import "../App.css"
// /user/login
// /user/create

const InicioSession: React.FC = () => {
    const [Mail, setMail] = useState('');
    const [Contrasena, setContrasena] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Nuevo estado para el mensaje de error

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            Mail,
            Contrasena,
        };

        try {
            const response = await fetch('https://legacy-fit-pp4p.vercel.app/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            }).then(res => {console.log(res); return res.json();});

            if (response?.token?.length > 0) {
                console.log('Usuario registrado con éxito');
                // Redireccionar o mostrar mensaje de éxito
                function setCookie(cname:string, cvalue: string, exdays:number) {
                    const d = new Date();
                    d.setTime(d.getTime() + (exdays*24*60*60*1000));
                    let expires = "expires="+ d.toUTCString();
                    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                  }
                  setCookie("token", response.token, 7)
                window.location.href = "/lista";
            } else {
                console.error('Error al registrar el usuario');
                setErrorMessage('Contraseña o mail incorrectos'); // Establecer mensaje de error si la contraseña es incorrecta
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
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            value={Mail}
                            onChange={(e) => setMail(e.target.value)}
                            id="email" placeholder='Ingrese su email'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            value={Contrasena} 
                            onChange={(e) => setContrasena(e.target.value)}
                            type="password" 
                            id="password" 
                            placeholder="Ingresa tu contraseña" />
                    </div>
                    <button type="submit" className="submit-button">Iniciar Sesion</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mostrar el mensaje de error si existe */}
            </div>
            <div>
                <p className="login-desc">nuevo en legacy fit? &nbsp; &nbsp; <a href="/">Crear Cuenta</a></p>
            </div>
        </div>
    );
};

export default InicioSession;
