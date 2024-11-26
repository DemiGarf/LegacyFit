import React, { useEffect, useState, useRef } from 'react';
import Modelo3DViewer from './Modelo3DViewer';

const Ejercicio: React.FC = () => {
  const [isExplicationModalOpen, setIsExplicationModalOpen] = useState(false);
  const [isAlternativesModalOpen, setIsAlternativesModalOpen] = useState(false);
  const [ejercicio, setEjercicio] = useState<{ Id: string; Nombre: string; Descripcion: string; Alternative: string } | null>(null);
  const [videoLink, setVideoLink] = useState<string | null>(null); // Variable para guardar el link del video
  const [error, setError] = useState<string | null>(null);
  const [fav, setFav] = useState<boolean | null>(false)
  const modelo="/cubo.fbx";
  let rutamodelo="";
  // Usamos useRef para almacenar la referencia del video en cuestión
  const videoEnCuestion1 = useRef<string | undefined>(undefined)

  let abc=videoLink;
  let ar=abc;
  abc=ar;

  useEffect(() => {
    const fetchEjercicio = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('id');

      if (!id) {
        setError('No se proporcionó un ID válido');
        return;
      }

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
        const res = await fetch('https://legacy-fit-pp4p.vercel.app/favs/favoritos', {
          headers: {
              "authorization": "Bearer " + getCookie("token")
          }
      });
      const d = await res.json();
      for(let i = 0; i < d.length; i++) {
        // @ts-ignore
        let ej = d[i].ejercicio
        if(ej.Idejercicios == id) {
          setFav(true)
          break;
        }
      }
        const response = await fetch(`https://legacy-fit-pp4p.vercel.app/ejercicios/descripcion/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos del ejercicio');
        }
        const data = await response.json();
        setEjercicio(data);

        // Guardar el link del video en la variable videoLink
        if (data.Videos && data.Videos.length > 0) {
          setVideoLink(data.Videos[0]); 
        }

        // Guardar el video en cuestión en la referencia
        videoEnCuestion1.current = data.Videos;

        console.log("dufgudf", videoEnCuestion1.current);
        console.log('Video Link:', data.Videos); // Mostrar el link del video en la consola
      } catch (error) {
        console.error('Error fetching exercise:', error);
        setError('Error fetching exercise');
      }
    };

    fetchEjercicio();
    
  }, []);

  const handleOpenExplicationModal = () => {
    setIsExplicationModalOpen(!isExplicationModalOpen);
  };

  const handleCloseExplicationModal = () => {
    setIsExplicationModalOpen(false);
  };

  const handleOpenAlternativesModal = () => {
    setIsAlternativesModalOpen(!isAlternativesModalOpen);
  };

  const handleCloseAlternativesModal = () => {
    setIsAlternativesModalOpen(false);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!ejercicio) {
    return <div>Cargando...</div>;
  }
  rutamodelo="/"+ejercicio?.Nombre+".glb"
  console.log("la ruta es"+rutamodelo);
  console.log("modelo:", modelo);
  const favClick = async (e: any) => {
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
    e.preventDefault();
    if(fav) {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('id');
      const res = await fetch("https://legacy-fit-pp4p.vercel.app/favs/favoritos/remove/" + id, {
        method: "PATCH",
        headers: {
          "authorization": "Bearer " + getCookie("token")
        }
      })
      const d = await res.json()
      console.log(d)
      e.target.classList.remove("toggled")
      setFav(false)
    } else {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('id');
      const res = await fetch("https://legacy-fit-pp4p.vercel.app/favs/favoritos/" + id, {
        method: "PATCH",
        headers: {
          "authorization": "Bearer " + getCookie("token")
        }
      })
      console.log(res)
      const data = await res.json()
      console.log(data)
      e.target.classList.add("toggled")
      setFav(true)
    }
  }

  return (
    <div id="ejercicio">
      <a href="#" onClick={favClick} className={"heart "+ (fav ? "toggled" : "")}>&#9829;</a>
      <div style={{ width: '100vw', height: '10vh' }}>
        <div className='modeladoeint'>
        <Modelo3DViewer modeloPath={rutamodelo} />

        </div>
    </div>
      <h2 className="titulo_ej">{ejercicio.Nombre}</h2>
      <div className="informacion-container">
        <button className="guardar-button">Add to your <br/> training routine</button>
       
      </div>
      <div className="ejercicio-footer">
        <div className="footer-section">
          <div>
            <button className="footer-button" onClick={handleOpenExplicationModal}>Explication</button>
          </div>
          {isExplicationModalOpen && (
            <div className="modal" onClick={handleCloseExplicationModal}>
              <div className="modal-content sombra-2" onClick={e => e.stopPropagation()}>
                <p>{ejercicio.Descripcion}</p>
              </div>
            </div>
          )}
        </div>
        <div className="footer-section">
          <div>
            <button className="footer-button" onClick={handleOpenAlternativesModal}>Alternatives</button>
          </div>
          {isAlternativesModalOpen && (
            <div className="modal" onClick={handleCloseAlternativesModal}>
              <div className="modal-content sombra-2" onClick={e => e.stopPropagation()}>
                {ejercicio.Alternative}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ejercicio;
