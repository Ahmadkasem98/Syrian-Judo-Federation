import React from 'react'
import { Link } from 'react-router-dom';
import { Creative , Info , Title , SpanTitle  , Desc ,Overlay} from './aboutsty'

const About = () => {
  
  return (
    <Creative>
        <Overlay>
    <div className="container">
        <Info>
            <Title><SpanTitle>This is</SpanTitle> JUDO</Title>
            <Desc>
            Beyond being one of the most prestigious and universal Olympic disciplines, Judo is more than sport - it is also an acknowledged educational tool and a way of life enriched by a moral code and ethic values that have firmly withstood the trial of life. <Link className='CreativeLink' to="#">explicabo</Link>  Owing to those values and ethical approach that are inscribed in the DNA of the sport, the International Judo Federation is fully committed to fight against any kind of cheating. A clean and fair play sport is important to promote a better society, which can offer a direction in life to the young generations.
            </Desc>
            
        </Info>
    </div>
    </Overlay>
</Creative>
  );
}

export default About;
