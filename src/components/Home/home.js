import React from 'react'

import {HomePape , Overlay , HomeInformation , HomeTitle ,Span, HomeInfo , HomeBtn} from './homestyle'

const Home = () => {
  
  return (
    <HomePape>
        <Overlay>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>KEEP <Span>CALM</Span> AND DO JUDO</HomeTitle>
                    <HomeInfo>"being funny in life is a lot more like judo it's using  the energy"</HomeInfo>
                    
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
            </Overlay>
        </HomePape>
  );
}

export default Home;
