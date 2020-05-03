import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: black;
    color:white;
    margin-top: 2rem; 
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 2px solid black;
    background-color: #004e92;
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: white;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {


    return ( 
        (cotizacion === 0) 
                ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
                : 
                    (
                    <ResultadoCotizacion>
                        <TransitionGroup
                            component="p"
                            className="resultado"
                        >
                            <CSSTransition
                                classNames="resultado"
                                key={cotizacion}
                                timeout={{ enter: 500, exit: 500}}
                            >
                            <TextoCotizacion>El total es: {cotizacion}€</TextoCotizacion>
                            </CSSTransition>
                        </TransitionGroup>
                    </ResultadoCotizacion>
                    )
                
     );
}
 
export default Resultado;