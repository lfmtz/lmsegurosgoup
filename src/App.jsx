import React from 'react';
import './styles/App.css'; // Asegúrate de tener este archivo para los estilos (si lo vas a usar)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a nuestra Landing Page</h1>
        <p>¡Pronto más contenido y opciones disponibles!</p>
      </header>
      <section className="App-body">
        <p>Este es un sitio de prueba para mostrar los primeros pasos en React.</p>
        <button onClick={() => alert('¡Gracias por visitar!')}>Haz clic aquí</button>
      </section>
    </div>
  );
}

export default App;
