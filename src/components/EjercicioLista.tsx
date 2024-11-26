import React, { useEffect, useState } from 'react';
// import { div } from 'three/webgpu';

const EjercicioLista: React.FC = () => {
    const [ejercicios, setEjercicios] = useState<{ Idejercicios: string; Nombre: string; }[]>([]);

    useEffect(() => {
        const fetchEjercicios = async () => {
            try {
                const response = await fetch('https://legacy-fit-pp4p.vercel.app/ejercicios/');
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
            <h2 className="main-title">Ejercicios</h2>
            <div className="ejercicios-listado-container row" style={{ maxWidth: "100vw"}}>
                {ejercicios.map(ejercicio => (
                    <div key={ejercicio.Idejercicios}  className="col-12 col-md-6">
                        <a href={`/ejercicio?id=${ejercicio.Idejercicios}`} className="">
                            <div className="ejercicio-listado-item">
                                {ejercicio.Nombre}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <a className='favoritos-btn' href="/favoritos">Favoritos</a>
        </div>
    );
};

export default EjercicioLista;
