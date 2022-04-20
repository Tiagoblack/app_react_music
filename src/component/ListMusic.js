import React from 'react'

import styled from 'styled-components';
import logo from '../assets/playlist1.jpg';

const Container = styled.div`
  width: 250px;

`;

const ContainerImage = styled.div`
  flex: 1;
  height: 150px;
  overflow:hidden;
  border-radius: 10px;
  transition all esse .2s;


`;
const Image = styled.img`
  display: block;
  max-width: 100%;
  transition all .2s;
  :hover{
    transform:scale(1.5);
  }

`;
const Name = styled.h3`
  font-weight: bold;
  margin-top: 10px;
  color: #fff;  
  font-size:1.5rem;
`;
const Tracks = styled.span`
  color: #fff;
  opacity: .5;
  margin-top: 10px;
  display:block;

`;

export default function ListMusic({item}) {

  return (
    <Container>
      <ContainerImage>
        <Image src={item.img}/>
      </ContainerImage>
        <Name>
            {item.name}
        </Name>

        <Tracks>
            {item.tracks}  tracks      
        </Tracks>

    </Container>
  )
}
