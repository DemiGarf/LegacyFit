// Pantalla1.tsx
import React from 'react';

const Home: React.FC = () => {
    return (
        <div id="home">
            <h2 className="main-title">HOME</h2>
            <div>
                <ul>
                    <li><a href="/lista" className="">LIsTA</a></li>

                    <li><a href="/ejercicio" className="">EJERCICIO</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
