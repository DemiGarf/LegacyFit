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
      </header>
      <main className="App-content">
        <h1>Bienvenido a tu rutina de press banca</h1>
        {/* Aquí puedes agregar más contenido relacionado con los ejercicios */}
      </main>
      <footer className="App-footer">
        <p>
          The bench press is a fundamental exercise for upper body strength training. It primarily targets the chest (pectoralis major), shoulders (anterior deltoids), and triceps. The exercise enhances muscle size, strength, and endurance in these areas.
        </p>
        <p><strong>Correct Technique:</strong></p>
        <ul>
          <li>Lie on a flat bench with feet planted firmly on the ground.</li>
          <li>Grip the barbell slightly wider than shoulder-width apart.</li>
          <li>Lower the barbell to the lower chest, then press it upward without locking elbows.</li>
          <li>Maintain a slight arch in the lower back for stability.</li>
          <li>Make sure your elbows are at a 45-degree angle to your shoulders.</li>
        </ul>
      </footer>
    </div>


  )
}

export default App
