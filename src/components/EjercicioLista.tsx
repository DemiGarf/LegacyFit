//
import React from 'react';
//import ejerciciosRoutes from './Routes/ejercicios.js'

/*
const [ejercicios, setEjercicios] = useState([]);

useEffect(() => {
    const obtenerNombresEjercicios = async () => {
        try {
            const response = await fetch('/api/ejercicios/nombres');
            if (!response.ok) {
                throw new Error('Error al obtener los nombres de los ejercicios');
            }
            const data = await response.json();
            console.log(data);
            setEjercicios(data);
        } catch (error) {
            console.error('Error al obtener los nombres de los ejercicios:', error);
        }
    };

    obtenerNombresEjercicios();
}, []);
*/

//TODO: REEMPLAZAR POR API
const ejercicios = [
    {
        Id: "1",
        Nombre: "Bench press"
    },
    {
        Id: "2",
        Nombre: "Curl biceps"    
    },
    {
        Id: "3",
        Nombre: "Curl triceps"
    },
    {
        Id: "4",
        Nombre: "Polea triceps"
    }
];

const EjercicioLista: React.FC = () => {
    return (
        <div id="ejerciciolista">
            <h2 className="main-title">Exercises</h2>
            <div className="ejercicios-listado-container row">
                {ejercicios.map(ejercicio => (
                    <div key={ejercicio.Id} className="col-12 col-md-6">
                        <a href={`/ejercicio?id=${ejercicio.Id}`} className="">
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
