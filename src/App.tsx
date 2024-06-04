import React, { useState } from 'react';
import './App.css';


const App: React.FC = () => {
  const [isExplicationModalOpen, setIsExplicationModalOpen] = useState(false);
  const [isAlternativesModalOpen, setIsAlternativesModalOpen] = useState(false);

  const handleOpenExplicationModal = () => {
    if (isExplicationModalOpen) {
      setIsExplicationModalOpen(false);
    } else{
      setIsExplicationModalOpen(true)
    }
  };
  
  const handleCloseExplicationModal = () => {
    setIsExplicationModalOpen(false);
  };
  const handleOpenAlternativesModal = () => {
    if (isAlternativesModalOpen) {
      setIsAlternativesModalOpen(false);
    } else{
      setIsAlternativesModalOpen(true)
    }
  };

  const handleCloseAlternativesModal = () => {
    setIsAlternativesModalOpen(false);
  };

  const modalContent = (
    <>
      <h2>Correct Technique:</h2>
      <p>Lie on a flat bench with feet planted firmly on the ground.</p>
      <p>Grip the barbell slightly wider than shoulder-width apart.</p>
      <p>Lower the barbell to the lower chest, then press it upward without locking elbows.</p>
      <p>Maintain a slight arch in the lower back for stability.</p>
      <p>Make sure your elbows are at a 45-degree angle to your shoulders.</p>
    </>
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="exercise-label">
          <img src="../public\Logo_canva_compartido_con_mati-removebg-preview 2 (1).png" alt="Logo" className='logo' />
        </div>
        <button className="arrow-button"><img src="../public\volver-removebg-preview 1.png" alt="Arrow" className='arrow' /></button>
      </header>
      <main className="App-content">
        <h1>Bienvenido a tu ejercicio de press banca</h1>
      </main>
      <footer className="App-footer">
        <div className="footer-section">
          <div>
              <button className="footer-button" onClick={handleOpenExplicationModal} >Explication</button>
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
          <button className="footer-button" onClick={handleOpenAlternativesModal}>Alternatives</button>
          {isAlternativesModalOpen && (
            <div className="modal" onClick={handleCloseAlternativesModal}>
              <div className="modal-content sombra-2" onClick={e => e.stopPropagation()}>
                {modalContent}
              </div>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;
