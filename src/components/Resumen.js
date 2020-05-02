import React, { Fragment } from 'react';

const Resumen = ({datos}) => {

    // Extraer de datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '' ) return null;

    return ( 
        <Fragment>
            <h2>Resumen de la cotización</h2>
            <ul>
                <li>Marca:</li>
                <li>Plan:</li>
                <li>Año del auto:</li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;