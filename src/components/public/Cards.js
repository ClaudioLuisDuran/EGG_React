import React, { useEffect, useState } from 'react'
import RandMservices from '../../services/RandMservices';
import { Card } from './Card'

export const Cards = () => {

 const [mascotas, setmascotas] = useState([]);

 // el hook useEfect hace una escucha activa del cambio de alguna variable
useEffect(() => {
   RandMservices.getAllCharacters()
    .then((data) => setmascotas(data.results))
    .catch((error) => console.log(error)); 
}, [])

  const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />)


  return (
    <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {cardList}

            </div>
          </div>
        </div>
  )
}
