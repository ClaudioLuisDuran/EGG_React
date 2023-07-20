import React, { Component } from 'react'
 import { Cards } from './Cards'; 
/* import RandMservices from '../../services/RandMservices'; */


export default class Main extends Component {
constructor(props){
super(props);
this.state={mascotas: []}
}

componentDidMount(){
    /*  RandMservices.getAllCharacters()
    .then((data) => this.setState({mascotas: data.results}))
    .catch((error) => console.log(error));  */
}

  render() {
    
    return (
        <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-10 col-md-8 mx-auto">
             {/*  <h1 className="fw-light">Ejemplo de album</h1>
              <p className="lead text-muted">Algo corto y principal sobre la colección a continuación: su contenido, el creador, etc. Hágalo breve y agradable, pero no demasiado corto para que la gente no lo pase por alto por completo.</p>
              <p>
                <a href="www.yo.com" className="btn btn-primary my-2">Llamada a la acción principal</a>
                <a href="www.yo.com" className="btn btn-secondary my-2">Acción secundaria</a>
              </p> */}
              
              <Cards /> 

            </div>
          </div>
        </section>
     {/*  <Cards mascotas={this.state.mascotas} />  */}
    
   
      </main>
    )
  }
}

