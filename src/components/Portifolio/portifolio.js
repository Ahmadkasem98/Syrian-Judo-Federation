import React , { useState , useEffect } from 'react'
import axios from 'axios';
import { Portfolio , H2 , Ul , Li , Box , DivBox , Img , Overlay , OverlaySpan } from './portifolioSty';


const Portifolio = () => {

  const [ Images , setImages ] = useState([])

  useEffect( () => {
    axios.get("js/data.json").then( res => setImages(res.data.portfolio))
  } , [])
  
  const PortifolioItem = Images.map( (imageItem) => {
    return (
      <DivBox key={imageItem.id}>
                    <Img src={imageItem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </DivBox>
    )
  })

  return (
    <Portfolio>
            <H2>Gallery</H2>
            <Ul>
                <Li active>All</Li>
                <Li>Competition</Li>
                <Li>Interviews</Li>
                <Li>Champoins</Li>
                <Li>Training</Li>
            </Ul>
            
            <Box>
                
               {PortifolioItem}
                
            </Box>
            
        </Portfolio>
  );
}

export default Portifolio;
