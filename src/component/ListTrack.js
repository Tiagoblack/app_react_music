import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
  width:200px;
  height:170px;
  display:flex;
  flex-direction:column;


`;
const ContainerImage = styled.div`
  width:200px;
  height: 100px;
  overflow:hidden;

  position:relative;

  &::after{
    content: '';
    height:100%;
    width:100%;
    position: absolute;
    top:0px;
    right:0px;
    left:0px;
    bottom: 0px;

    background-color:rgba(0, 0,0 , .5);

    cursor: pointer;

    :hover{
      bachground-color:red;
    }
 
  }




`;
const Image = styled.img`
  :hover{
    bachground-color:red;
  }

`;


const Name = styled.strong`
  margin-top:10px;

  color:#fff;

`;
const Legend = styled.span`
  margin-top:10px;
  color:#fff;
  opacity:.5;
`;



export default function ListTrack({item}) {
  return (
    <Container>
        <ContainerImage>
          <Image src={item.img}/>
        </ContainerImage>
        <Name>
          {item.name}
        </Name>

        <Legend>
          {item.title}
        </Legend>
    </Container> 
  )
}
