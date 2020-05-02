import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: black;
    color:white;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const Resultado = ({cotizacion}) => {


    return ( 
        (cotizacion === 0) 
                ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
                : <p>El total es: {cotizacion}€</p>
                
                
     );
}
 
export default Resultado;