import React, { useState } from 'react';
import "../App.css"

const Home: React.FC = () => {
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Mail, setMail] = useState('');
    const [Contrasena, setContrasena] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            Nombre,
            Apellido,
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
            }).then(res => res.json());

            if (response.token) {
                console.log('Usuario registrado con éxito');
                // Redireccionar o mostrar mensaje de éxito
                // ejercicioLista
                function setCookie(cname:string, cvalue: string, exdays:number) {
                    const d = new Date();
                    d.setTime(d.getTime() + (exdays*24*60*60*1000));
                    let expires = "expires="+ d.toUTCString();
                    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                  }
                  setCookie("token", response.token, 7)
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
            <h2 className="main-title">Registrarse</h2>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Ingresa tu Nombre"
                            value={Nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            placeholder="Ingresa tu Apellido"
                            value={Apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Mail</label>
                        <input
                            type="email"
                            id="mail"
                            placeholder="Ingresa tu Mail"
                            value={Mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contrasena">Contrasena</label>
                        <input
                            type="password"
                            id="contrasena"
                            placeholder="Ingresa tu Contrasena"
                            value={Contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-button">Registrarse</button>
                </form>
            </div>
            <div>
                <p className="login-desc">¿Ya tienes cuenta? &nbsp; &nbsp; <a href="/iniciar-session">Inicia Sesión</a></p>
            </div>
        </div>
    );
};

export default Home;
