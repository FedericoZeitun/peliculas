import React from 'react';
import Pelicula from './Pelicula'

const ListadoPeliculas = ({peliculas}) => {
    return ( 
        <div className="col-12 p-5 row">
            {peliculas.map(pelicula =>(
                <Pelicula 
                    key={pelicula.imdbID}
                    pelicula={pelicula}
                />
            ))}
        </div>
    );
}
 
export default ListadoPeliculas;