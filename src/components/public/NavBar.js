import React from 'react'

export const NavBar = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
          <img className="App-logo" height="52" src="homero.png" alt="" />
        
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">Inicio</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Características</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Precios</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Acerca</a></li>
          </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark" placeholder="Buscar..." aria-label="Buscar"></input>
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Ingresar</button>
            <button type="button" className="btn btn-warning">Registrarse</button>
          </div>
        </div>
      </div>
    </header>

  )
}
