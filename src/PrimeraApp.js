/* Functionals Components */
import React from 'react'

const PrimeraApp = ( {saludo = 'Hola mundo!'}) => {
    // const saludo2 = { name: 'Fernado', age: 24};

    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
            <p>Este es mi primera pagina</p>
        </>
    );
}

export default PrimeraApp;