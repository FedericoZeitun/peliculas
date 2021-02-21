import React, {useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import ListadoPeliculas from './Components/ListadoPeliculas';

function App() {

    const [busqueda, guardarBusqueda] = useState('')
    const [peliculas, guardarPeliculas] = useState([])

    useEffect(() => {
        const consultarApi = async () =>{
            if (busqueda === '') return;
            const key = 'b63bd708'
            const url = `http://www.omdbapi.com/?s=${busqueda}&apikey=${key}`

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            guardarPeliculas(resultado.Search)
            console.log(resultado)
        }
        consultarApi()

    }, [busqueda])

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Busque su película o serie favorita!</p>
                    <Formulario
                        guardarBusqueda= {guardarBusqueda}
                    />
            </div>
            <div className="row justify-content-center">
                <ListadoPeliculas
                    peliculas={peliculas}
                />
            </div>
        </div>
    );
}

export default App;
