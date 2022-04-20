import React, {useState} from 'react'
import { Container, 
  Person, 
  ContainerImage, 
  TextName, 
  EditPerson, 
  EditPersonText, 
  EditPersonIcon, 
  ContainerProfile,
  Image,
  ContainerMenu,
  SpaceSepaetor,
  BodyMenu,
  BodyText,
  IconMenu,
  IconMenuClose
} from './style'


import { AiFillTool, } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { GiOverdrive } from "react-icons/gi";
import { FaMusic} from 'react-icons/fa';
import {RiCompassDiscoverFill, RiDashboardFill, } from 'react-icons/ri';
import { FiMessageCircle} from 'react-icons/fi';
import { IoIosNotifications} from 'react-icons/io';
import { BiUser} from 'react-icons/bi';


import Profile from '../../assets/profile.jpg';


export const SideBar = () => {
  const [opened, setOpened] = useState(false);
  const handleOPened = () =>{
    setOpened(!opened)

  }

  return (
    <Container opned={opened} >
      { opened ?   <IconMenuClose onClick={handleOPened}/>: <IconMenu onClick={handleOPened} /> 
       }
    
     <Person  opned={opened}>
        <ContainerImage>
            <Image src={Profile}/>
        </ContainerImage>
        <ContainerProfile>
          <TextName>
            Tiago dos Santos 
          </TextName>
          <EditPerson>
            <EditPersonText>
              Edit Profile
            </EditPersonText>
            <EditPersonIcon>
              <AiFillTool  style={{color:'  #fff', opacity: 0.5, fontSize: 20, cursor: 'pointer'}} />
            </EditPersonIcon>
          </EditPerson>
        </ContainerProfile>
      </Person>
      
    <ContainerMenu opned={opened}>
      <SpaceSepaetor/>

      <BodyMenu>
          <GiOverdrive style={{ fontSize: 20}}/>
        <BodyText>
            Overview
        </BodyText>
      </BodyMenu>

      <BodyMenu>
          <BiNews style={{ fontSize: 20}}/>
        <BodyText>
            News
        </BodyText>
      </BodyMenu>

      <BodyMenu>
          <FaMusic style={{ fontSize: 20}}/>
        <BodyText>
            Playlist
        </BodyText>
      </BodyMenu>
      <BodyMenu>
          <RiCompassDiscoverFill style={{ fontSize: 20}}/>
        <BodyText>
            Discover
        </BodyText>
      </BodyMenu>

      <SpaceSepaetor/>


      <BodyMenu>
          <RiDashboardFill style={{ fontSize: 20}}/>
        <BodyText>
            Dashboard
        </BodyText>
      </BodyMenu>

      <BodyMenu>
          <FiMessageCircle style={{ fontSize: 20}}/>
        <BodyText>
            Message
        </BodyText>
      </BodyMenu>

      <BodyMenu>
          <IoIosNotifications style={{ fontSize: 20}}/>
        <BodyText>
            Notifications
        </BodyText>
      </BodyMenu>
      <BodyMenu>
          <BiUser style={{ fontSize: 20}}/>
        <BodyText>
            Account
        </BodyText>
      </BodyMenu>

    </ContainerMenu>

    </Container>
  )
}

