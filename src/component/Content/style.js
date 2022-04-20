import styled from "styled-components";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';



export const Container = styled.section `
    flex:1;
    background: linear-gradient(to left, #17002B, #1D002E);
    padding-left:60px;
    padding-top: 20px;
    height:100%;
    overflow-x: hidden;


     @media (max-width:738px){
        padding-left: 20px;
        padding-bottom:100px;
     }
`;


export const ContainerInput = styled.div `
    padding: 10px ;
    display: flex;
    align-items: center;
    color: #e5e5e5e7;
    font-size: 1.25rem;
    gap 10px;
    opacity:.5;
    
    border-radius: 10px;
    max-width: 420px;


    :hover{
        opacity:1;
        
    }

    // @media (max-width: 738px){
    //         padding:10px;
    //         gap: 0px;
    //         width:300px;
    // }

`;
export const Input = styled.input `
    border:none;
    background: transparent;
    color: #e5e5e5e7;
    font-size:1.25rem;
    outline:none;
    width:50%;
    :focus{
        opacity: 1;
    }
    
`;
export const Body = styled.div `
    margin-left: 10px;
    margin-top:20px;

`;
export const BodyTitle = styled.div `
    color: #e5e5e5e7;
    font-size:1.5rem;
    font-weight:bold;

`;
export const ContainerScroll = styled.div `
    position:relative;
    overflow:hidden;
`;
export const Scroll = styled.div `
    padding: 10px 0px;
    display:flex;
    gap: 10px;
    transition:.4s;

`;

export const Image = styled.img `
    max-width: 100%;
    display:block;
    flex:1;
`;


// tracks

export const ContainerTracks = styled.div `
    display:flex;
    flex-wrap:wrap;
    //background-color:red;
    @media (max-width: 738px){
        gap: 0px;
        flex-direction:column;
    }

`;
export const ProfileTracks = styled.div `

    flex:1;
`;
export const Tracks = styled.div`
    flex:1;
    overflow:hidden;
    padding-right:20px;

`;

export const TracksMusic = styled.div`
    margin-top:20px;
    display:flex;
    gap:10px;
    overflow: auto;

    scrollbar-width: thin;
    scrollbar-color: #500D69  #121212;


    @media (max-width: 738px){
            
        gap: 0px;
        flex-direction:column;
    }

`;

export const IconRight = styled(AiOutlineArrowRight)`
    position: absolute;
    right: 10px;
    top:30%;
    font-size:2rem;
    z-index:100;
    color:#fff;
    cursor:pointer;


`;
export const IconLeft = styled(AiOutlineArrowLeft)`
    position: absolute;
    left:10px;        
    top:30%;
    font-size: 2rem;
    z-index:100;
    color:#fff;
    cursor:pointer;
`;
