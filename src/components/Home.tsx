// Pantalla1.tsx
import React from 'react';
import "../App.css"

const Home: React.FC = () => {
    return (
        <div className="home">
            <div>
                <h2 className="main-title">HOME</h2>
            </div>
            <div>
                <ul>
                    <li><a href="/lista" className="lista-button">LISTA</a></li>
                </ul>
            </div>
        </div>
    );  
};

export default Home;
