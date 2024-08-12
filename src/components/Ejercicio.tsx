import React, { useEffect, useState } from 'react';

const Ejercicio: React.FC = () => {
  const [isExplicationModalOpen, setIsExplicationModalOpen] = useState(false);
  const [isAlternativesModalOpen, setIsAlternativesModalOpen] = useState(false);
  const [ejercicio, setEjercicio] = useState<{ Id: string; Nombre: string; Descripcion: string; } | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const modalContent = (
    <>
      <h3>Correct Technique:</h3>
      <p>Lie on a flat bench with feet planted firmly on the ground.</p>
      <p>Grip the barbell slightly wider than shoulder-width apart.</p>
      <p>Lower the barbell to the lower chest, then press it upward without locking elbows.</p>
      <p>Maintain a slight arch in the lower back for stability.</p>
      <p>Make sure your elbows are at a 45-degree angle to your shoulders.</p>
    </>
  );

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
                {modalContent}
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
                {modalContent}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ejercicio;
