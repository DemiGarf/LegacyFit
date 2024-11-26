import React, { useEffect, useState } from 'react';
import { div } from 'three/webgpu';
import '../App.css'; // Asegúrate de tener este archivo para los estilos

const EjercicioLista: React.FC = () => {
    const [ejercicios, setEjercicios] = useState<{ Idejercicios: string; Nombre: string; }[]>([]);

    useEffect(() => {
        const fetchEjercicios = async () => {
            try {
                function getCookie(cname: string) {
                    let name = cname + "=";
                    let decodedCookie = decodeURIComponent(document.cookie);
                    let ca = decodedCookie.split(';');
                    for(let i = 0; i <ca.length; i++) {
                      let c = ca[i];
                      while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                      }
                      if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                      }
                    }
                    return "";
                  }
                const response = await fetch('https://legacy-fit-pp4p.vercel.app/favs/favoritos', {
                    headers: {
                        "authorization": "Bearer " + getCookie("token")
                    }
                });
                const data = await response.json();
                console.log(data)
                setEjercicios(data);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        };
        fetchEjercicios();
    }, []);

    return (
        <div id="ejerciciolista">
            <h2 className="main-title">Favoritos</h2>
            <div className="ejercicios-listado-container row" style={{ maxWidth: "100vw"}}>
                {/* @ts-ignore */}
                {ejercicios.message ? "no hay favoritos" : ejercicios?.map(ejercicio => { 
                    // @ts-ignore
                    let ej = ejercicio?.ejercicio
                    return (
                    <div key={ej.Idejercicios}  className="col-12 col-md-6">
                        <a href={`/ejercicio?id=${ej.Idejercicios}`} className="">
                            <div className="ejercicio-listado-item">
                                {ej.Nombre}
                            </div>
                        </a>
                    </div>
                )})}
            </div>
        </div>
    );
};

export default EjercicioLista;
