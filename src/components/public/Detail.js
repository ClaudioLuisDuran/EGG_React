import React, { useEffect, useState } from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import RandMservices from '../../services/RandMservices';

export const Detail =  () => {

  const [mascota, setMascota] = useState({});
  const {id} = useParams();
 const {pathname} = useLocation();
 console.log(pathname)
  useEffect(() => {
      
       RandMservices.getCharactersById(id)
    .then((data) => setMascota(data))
  }, [id])
   
  const detailCard = {
    width: '80%',
    margin: 'auto',
    background: 'white'
   }

  return (
  
    <div className="card mb-3" style={{'background': 'gainsboro'}}>
    <div className="row g-0 mt-4 mb-4" style={detailCard}>
      <div className="col-md-8 detallePersonaje">
        <div className="btn-group" style={{'marginLeft': '15px'}}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
     <div className="row m-3">
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
        <img
          className="h-100 d-inline-block rounded card-im-right flex-auto d-none d-md-block m-4"
          height="auto"
          src={mascota.image}
          alt=""
          />  
        <strong className= "d-inline-block mb-2 text-success">
          {mascota.species} / {mascota.status}  /  {mascota.gender}
          </strong>
          <h3 className="mb-0 text-dark">{mascota.name}</h3>
          <div className="mb-1 text-muted">
            {new Date(mascota.created).toLocaleDateString()}
          </div>
          <div className="mb-1 text-muted">
            <p className="card-text mb-auto">
              Esta es una descripción agregada en Detail.
              Si te gusta bien, y sino...
              a llorar a la plaza.
            </p> 
            </div>
      </div>
    </div>
    </div> 

            <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
              Volver
            </Link>
            </button>
          </div>        
         
        </div>
      </div>
    </div>
    
  )
}
