import React, {useState} from 'react';
import Error from './Error'

const Formulario = ({guardarBusqueda}) => {

    const [pelicula, guardarPelicula] = useState('')
    const [error, guardarError] = useState(false)

    const buscarPelicula = e =>{
        e.preventDefault()

        if(pelicula.trim() === ''){
            guardarError(true);
            return; 
        }
        guardarError(false)
        guardarBusqueda(pelicula)
    }

    return ( 
        <form
            onSubmit={buscarPelicula}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Ingrese el título de la película"
                        onChange={e => guardarPelicula(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Ups! Debes agregar una letra"/> : null}

        </form>
    );
}
 
export default Formulario;