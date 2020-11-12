import styled from "styled-components";
import bolsaUm from '../../assets/images/bolsa_um.png'

export const Body = styled.body`
    background: #E5E5E5;
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    height: 100vh;
    padding-top: 15px;
`

export const CardPrincipal = styled.div`
    background-color: white;
    width:75vw;
    height:45vh;
    margin-left: auto;
    margin-right: auto;
    display: flex;
`;

export const ImagPrincipal = styled.div`
    width: 45vw;
    height: 45vh;
    background-size: contain;
    background-image:url(${bolsaUm}); 
    background-position: cover;
    background-repeat: no-repeat;
`;

export const DetailsProduto = styled.div`
    width: 60vw;
    height: 20vh;
    margin-bottom: 10px;
    padding-bottom: 10px;
`;

export const TituloProduto = styled.p`
    font-size:30px;
    font-weight: bold;
    text-align: justify;
`;

export const SpanPreco = styled.span`
    color:red;
`;

export const ButtonAdd = styled.button`
    background-color:#F62F5E;
    width: 150px;
    height: 40px;
    border-radius: 50px;
    border: none;
    color: white;
`;



