import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <header className="App-header">
      <div className="exercise-label">
        Ejercicio: Press en banca
      </div>
      <button className="arrow-button">➔</button>
    </header>
    <main className="App-content">
      <h1>Bienvenido a tu rutina de press banca</h1>
      {/* Aquí puedes agregar más contenido relacionado con los ejercicios */}
    </main>
    <footer className="App-footer">
      <button className="footer-button">Explication</button>
      <button className="footer-button">Alternatives</button>
    </footer>
  </div>



  );
}

export default App
