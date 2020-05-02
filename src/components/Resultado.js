import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: black;
    color:white;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const TextoCotizacion = styled.p`
    color: #004e92;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {


    return ( 
        (cotizacion === 0) 
                ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
                : <TextoCotizacion>El total es: {cotizacion}€</TextoCotizacion>
                
                
     );
}
 
export default Resultado;