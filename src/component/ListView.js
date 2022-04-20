import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    cursor:pointer;
    display:flex;
    justify-contennt:center;
    align-items:center;
    gap:10px;
    padding: 20px 20px 20px 0px;
    :hover{
        opacity:1;
    }
`;

const ContainerImage = styled.div`
    width: 50px;

`;

const Image = styled.img`
    display:block;
    max-width:100%;
    border-radius:10px;

`;
const ContainerInfor = styled.div`
    opacity:.5;
    flex:1;
    :hover{
        opacity:1;
    }
    align-self:top;
`;
const Name = styled.h4`
    font-weight:bold;
    color:#fff;
    font-size:1.25rem;
    
`;

const Days = styled.span`
    color:#fff;
    font-size:.75rem;
`;
const Albuns = styled.span`
    color:#fff;
    opacity:.5;
`;

export default function ListView({item}) {
  return (
    <Container>
        <ContainerImage>
            <Image  src={item.img}/>
        </ContainerImage>
        <ContainerInfor>
            <Name>
                {item.name}
            </Name>
            <Days>
                {item.days} days ago
            </Days>
        </ContainerInfor>
            <Albuns>
                {item.album} Albuns
            </Albuns>
    </Container>
  )
}
