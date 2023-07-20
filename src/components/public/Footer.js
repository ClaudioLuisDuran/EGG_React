import React, { useState } from 'react';

export const Footer = () => {
// previo al return se pueden trabajar variables

  const [clicks, setclicks] = useState(0)
 
  const year = new Date().getFullYear();
  const companyName = "Claudio Durán";

/* //handle...+ evento que esta escuchando */
  function handleClick() {
    setclicks(clicks + 1);

  }

  return (
    
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  
          <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} Clicks={clicks}, Inc</p>

        <span
        onClick={handleClick}
        >
          <img className="App-logo" 
          height="52" 
          src="homero.png" 
          alt="giratorio" 
          />
        </span>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Inicio</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Características</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Precios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Acerca</a></li>
          </ul>
        </footer>
      </div> 
    
  )
}
