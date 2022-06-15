import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { SocialMedian , Social , Icon , P , Span , Info } from './socialStyle'

const SocialMedia = () => {

  const [ socialM , setSocial ] = useState([]);
  useEffect( () => {
    axios.get("js/data.json").then(res => setSocial(res.data.social))
  } , [])

  const socialItem = socialM.map( (item) => {
    return(

            
            <Social item={item.id} key={item.id}>
                <Icon className={item.icon}></Icon>
                <P>
                    <Span>{item.title}</Span>
                    <Info>{item.body}</Info>
                </P>
            </Social>
        
   
    )
  })
  
  return (
    <SocialMedian>
        {socialItem}
        
        </SocialMedian>
  );
}

export default SocialMedia;
