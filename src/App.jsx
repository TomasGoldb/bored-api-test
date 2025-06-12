import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [idea, setIdea] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    generarAleatorio()
  }, [])

  const generarAleatorio = () => {
    setLoading(true)
    axios.get('https://api.adviceslip.com/advice')
      .then(response => {
        setIdea(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }

  return (
    <div className="container">
      <h1>Consejitos</h1>

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p className="loading-text">Cargando consejo sabio...</p>
        </div>
      ) : (
        <p className="advice">"{idea.slip.advice}"</p>
      )}

      <button className="btn" onClick={generarAleatorio}>Generar nuevo</button>
    </div>
  )
}

export default App
