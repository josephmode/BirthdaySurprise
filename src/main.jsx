import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Boton from './assets/BotonComponent/Boton.jsx'
import './App.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Feliz cumpleaños Noe</h1>
    <Boton />
    <p>Que la pases muy hermoso te quieroo muuuucho hasta el infinito y más alla❤️</p>
  </StrictMode>,
)
