import React, { useState } from 'react';
import './Encuestas.css';

function Encuestas({ encuestas }) {
    const [selecciones, setSelecciones] = useState({});

    const handleSeleccion = (encuestaId, opcionIndex) => {
        if (selecciones[encuestaId] === opcionIndex) {
            setSelecciones({
                ...selecciones,
                [encuestaId]: null,
            });
        } else {
            setSelecciones({
                ...selecciones,
                [encuestaId]: opcionIndex,
            });
        }
    };

    return (
        <div className="encuestas-container">
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <li key={encuesta.id}>
                        <h3>{encuesta.pregunta}</h3>
                        <ul>
                            {encuesta.opciones.map((opcion, index) => (
                                <li
                                    key={index}
                                    className={`opcion ${selecciones[encuesta.id] === index ? 'opcion-seleccionada' : ''}`}
                                    onClick={() => handleSeleccion(encuesta.id, index)}
                                >
                                    {opcion}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;