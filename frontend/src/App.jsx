import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="status-badge">Despliegue Exitoso</div>
        <h1>¡Hola desde Hostinger!</h1>
        <p className="subtitle">Aplicación funcionando correctamente.</p>
      </header>

      <main className="main-content">
        <div className="card">
          <h3>Detalles del Entorno</h3>
          <ul>
            <li><strong>Frontend:</strong> React + Vite</li>
            <li><strong>Backend:</strong> Express.js</li>
            <li><strong>Servidor:</strong> Hostinger VPS / Hosting</li>
          </ul>
        </div>

        <div className="card">
          <h3>Próximos Pasos</h3>
          <p>Ahora puedes empezar a construir tu aplicación real editando <code>src/App.jsx</code>.</p>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} - Panel de Control de Despliegue</p>
      </footer>
    </div>
  )
}

export default App
