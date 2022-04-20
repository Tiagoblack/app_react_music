import React, {useState, forwardRef, useImperativeHandle} from 'react'
import { 
  Container, 
  ContainerInput, 
  Input, 
  Body, 
  BodyTitle, 
  ContainerScroll, 
  Scroll, 
  ProfileTracks,
  ContainerTracks,
  Tracks,
  TracksMusic,
  IconLeft,
  IconRight
 } from './style';



import { BiSearch} from 'react-icons/bi';


import ListMusic from '../ListMusic';
import ListView from '../ListView';
import ListTrack from '../../component/ListTrack';


import img1 from '../../assets/playlist1.jpg';
import img2 from '../../assets/playlist2.jpg';
import img3 from '../../assets/playlist3.jpg';
import img4 from '../../assets/playlist4.jpg';

// image profile

import view1 from '../../assets/view1.jpg';
import view2 from '../../assets/view2.jpg';
import view3 from '../../assets/view3.jpg';


// tracks images

import track1 from '../../assets/track1.jpg';
import track2 from '../../assets/track2.jpg';
import track3 from '../../assets/track3.jpg';
import track4 from '../../assets/track4.jpg';
import track5 from '../../assets/track5.jpg';
import track6 from '../../assets/track6.jpg';
import track7 from '../../assets/track7.jpg';



const Content = () => {

    const [arrowX, setArrowX] = useState(0);

    let music = [
      {img: img1, name: 'only stardust', tracks: 22},
      {img: img2, name: 'Mike vella', tracks: 32},
      {img: img3, name: 'the best singles s2', tracks: 11},
      {img: img4, name: 'Indie', tracks: 34},
    ]

    let view = [
      {img: view1, name:'Jenny villa', days: 1, album: 3},
      {img: view2, name:'Aquila', days: 3, album: 5},
      {img: view3, name:'This  is War', days: 4, album: 10},

    ]

    let tracks = [
        {img:track1, name: 'Mahara Bom', title: 'In Paris'},
        {img:track2, name: 'Mahara Bom', title: 'In Paris'},
        {img:track3, name: 'Mahara Bom', title: 'In Paris'},
        {img:track4, name: 'Mahara Bom', title: 'In Paris'},
        {img:track5, name: 'Mahara Bom', title: 'In Paris'},
        {img:track6, name: 'Mahara Bom', title: 'In Paris'},
        {img:track7, name: 'Mahara Bom', title: 'In Paris'},
    ]
  
    const handleArrowLeft = () =>{
      if(arrowX > 2)return;
      setArrowX(arrowX + 1);
      console.log(arrowX);
    }

    const handleArrowRight = () =>{
      setArrowX(arrowX - 1);
      if(arrowX == 0){
        setArrowX(0);
      }
      console.log(arrowX);
    }
  

  return (
    <Container>
      <ContainerInput>
        <BiSearch style={{cursor: 'pointer'}}/>
        <Input  placeholder='Search artist, Tracks'/>
      </ContainerInput>
      <Body>
        <BodyTitle>
            Fatured Playlists
        </BodyTitle>
        <ContainerScroll>
          <IconLeft onClick={handleArrowLeft}/>
          <IconRight onClick={handleArrowRight}/>
          <Scroll style={{width: music.length * 260, marginLeft: arrowX * -260}}>
            {music?.map((item, )=> <ListMusic key={item.name}   item={item}/>)}
          </Scroll>
        </ContainerScroll>
        <ContainerTracks>
          <ProfileTracks>
            <BodyTitle style={{marginTop: 30}}>
              Profile Views
            </BodyTitle>
              {view?.map((item)=> <ListView item={item}/>)}     
          </ProfileTracks>
          <Tracks>
            <BodyTitle style={{marginTop: 30}}>
               Tracks
            </BodyTitle>
            <TracksMusic>
              {tracks.map((item)=> <ListTrack item={item}/>)}
            </TracksMusic>
          </Tracks>
        </ContainerTracks>
      </Body>
    </Container>
  )
}

export default Content;