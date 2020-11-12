import styled from "styled-components";
import bolsaUm from '../../assets/images/bolsa_um.png'

export const CardPrincipal = styled.div`
    background-color: white;
    width:60vw;
    height:30vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    display: flex;
`;

export const ImagPrincipal = styled.div`
    width: 30vw;
    height: 30vh;
    background-size: contain;
    background-image:url(${bolsaUm}); 
    background-position: cover;
    background-repeat: no-repeat;
`;

export const DetailsProduto = styled.div`
    width: 60vw;
    height: 20vh;
    
`;


