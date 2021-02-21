import React from 'react';

const Pelicula = ({pelicula}) => {

    const {Poster, Title, Year, Type} = pelicula;
    const poster = (Poster !== 'N/A') ? <img src={Poster} className="card-img-top"/> : "<Sin poster>"
    const tipo = () => {if (Type === 'series'){
        return 'Serie'
    } else if (Type === 'movie') {
        return 'Pelicula'
    } else if (Type === 'game'){
        return 'Videojuego'
    }}

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                {poster}
                <div className="card-body ml-2">
                    <p className="card-text mb-1">Título: {Title}</p>
                    <p className="card-text">Año: {Year}</p>
                </div>
                <div className="card-footer pl-2"> Tipo: {tipo()}
                </div>
            </div>
        </div>
    );
}
 
export default Pelicula;