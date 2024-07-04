import React, { useEffect, useState } from 'react';

const EjercicioLista: React.FC = () => {
    const [ejercicios, setEjercicios] = useState<{ Id: string; Nombre: string; }[]>([]);

    useEffect(() => {
        const fetchEjercicios = async () => {
            try {
                const response = await fetch('http://localhost:3000/ejercicios/nombres');
                const data = await response.json();
                setEjercicios(data);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        };

        fetchEjercicios();
    }, []);

    return (
        <div id="ejerciciolista">
            <h2 className="main-title">Exercises</h2>
            <div className="ejercicios-listado-container row">
                {ejercicios.map(ejercicio => (
                    <div key={ejercicio.Id} className="col-12 col-md-6">
                        <a href={`/ejercicio?id=${ejercicio.Nombre}`} className="">
                            <div className="ejercicio-listado-item">
                                {ejercicio.Nombre}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EjercicioLista;
