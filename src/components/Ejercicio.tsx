import React, { useEffect, useState } from 'react';

const Ejercicio: React.FC = () => {
  const [isExplicationModalOpen, setIsExplicationModalOpen] = useState(false);
  const [isAlternativesModalOpen, setIsAlternativesModalOpen] = useState(false);
  const [ejercicio, setEjercicio] = useState<{ Id: string; Nombre: string; Descripcion: string; Alternative: string } | null>(null);
  const [videoLink, setVideoLink] = useState<string | null>(null); // Variable para guardar el link del video
  const [error, setError] = useState<string | null>(null);

  let videoEnCuestion1;

  useEffect(() => {
    const fetchEjercicio = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('id');

      if (!id) {
        setError('No se proporcionó un ID válido');
        return;
      }
    

      try {
        const response = await fetch(`http://localhost:3000/ejercicios/descripcion/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos del ejercicio');
        }
        const data = await response.json();
        setEjercicio(data);

        // Guardar el link del video en la variable videoLink
        if (data.Videos && data.Videos.length > 0) {
          setVideoLink(data.Videos[0]); // Asumiendo que quieres guardar el primer video
        }

        let videoEnCuestion=data.Videos;
        videoEnCuestion1=videoEnCuestion;

        console.log("dufgudf",videoEnCuestion1);
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

  console.log("sjd",videoEnCuestion1);

  return (
    <div id="ejercicio">
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
