import styled from "styled-components";
import {CgMenuRight} from 'react-icons/cg';
import {AiOutlineClose} from 'react-icons/ai';

export const Container = styled.aside`
    width: 25%;background-color:rgb(32, 15, 86);
    height:100%;
    padding: 20px 40px ;
    display flex;

    flex-direction:column;

    @media (max-width:738px){
        overflow:auto;
        z-index:1000;
        height:100%;
        width:100%;

        display:flex;
        justify-content:center;
        align-items:center;

        position: fixed;
        left:0px;
        right:0px;
        bottom:0px;
        top:0px;
        transition: .3s;
        transform:translateY(${({opned})=> opned ? '0%': '80%'});
        overflow:hidden;
    }
`;



export const  Person = styled.div`
    display:flex;
    gap:10px;
    margin-top:50px;
    flex-wrap:wrap;
    overflow:hidden;

    @media (max-width:738px){
        flex:1;
        height:100%;
        margin:0pc;
        align-self:start;
        ${props=> props.opned ? 'display:none;' : 'display:flex;'}
     
    }


`;

export const IconMenu = styled(CgMenuRight)`
    position: absolute;
    top: 30px;
    right:20px;
    font-size:1.75rem;
    color:#fff;
    display:none;

    @media (max-width:738px){
        display:block;

    }

`;

export const IconMenuClose = styled(AiOutlineClose)`
    position: absolute;
    top: 30px;
    right:20px;
    font-size:1.75rem;
    color:#fff;

    @media (max-width:738px){
        display:block;

    }

`;
export const  ContainerImage = styled.div`
    width:80px ; 
     margin-bottom: 80px;



    @media (max-width:738px){
        width:50px;   
    }

`;

export const Image = styled.img`
    border-radius:10px;

`;

export const ContainerProfile = styled.div`
    padding:20px 0px ;   


 


`;
export const  TextName = styled.h5`
    color: #e5e5e5e7;
    margin-bottom: 10px;
    font-size:1em;

`;
export const  EditPerson = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    opacity: .5 ; 
    flex-wrap : wrap;
    :hover{
        opacity: 1;
    }

`;
export const  EditPersonText = styled.div`
    color: #e5e5e5e7;
    opacity: .5;
    cursor : pointer;   
`;
export const  EditPersonIcon = styled.div`
    

`;



// menus


export const ContainerMenu = styled.div`
@media (max-width:738px){
    flex:1;
    display:${props => !props.opned ? 'flex': 'none'};
    flex-direction:column;
    justify-content:center;
    align-items:center;
    display:${({opned})=> opned ?  'flex' : 'none'};
    
}
`;
export const SpaceSepaetor = styled.div`

    height: 1px ;
    width 200px;

    background-color: #fff;
    opacity: .5;
    margin: 0 auto 20px auto;
    
`;
export const BodyMenu = styled.div`
    padding: 0px 20px;
    display:flex;
    justify-content; center;
    align-items:center;
    gap: 10px;
    width:200px;
    color: #e5e5e5e7;
    opacity: .5;
    cursor:pointer;
    margin: 0 auto 20px auto;
    :hover{
        opacity: 1;
    }

`;

  
export const BodyText = styled.span`
    color: #e5e5e5e7;


`;