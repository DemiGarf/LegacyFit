// Pantalla1.tsx
import React from 'react';
import "../App.css"

const Home: React.FC = () => {
    return (
        <div id="home">
            <h2 className="main-title">HOME</h2>
            <div>
                <ul>
                    <li><a href="/lista" className="lista-button">LISTA</a></li>

                    <li><a href="/ejercicio" className="ejercicio-button">EJERCICIO</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
