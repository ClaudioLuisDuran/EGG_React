import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({mascota}) => {
  return (
    <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={mascota.image} alt=""/>
                  <h3 className="mb-0 text-dark">{mascota.name}</h3>
                  <div className="card-body">
                    <p className="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como una introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                        <Link to={`/details/${mascota.id}`}  className="nav-link">Detalle</Link>
                       </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Editar</button>
                      </div>
                      <small className="text-muted">CLD</small>
                    </div>
                  </div>
                </div>
              </div>
  )
}
