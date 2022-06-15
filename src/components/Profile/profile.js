import React , {useState , useEffect} from 'react'
import axios from 'axios';
import { MainProfile , FirProfile , Title , TitleSpan ,   Ul , Li , LiSpan , WebSpan , Skills , PSkills , Bar , BarTitle , BarPerc , BarParent , HSkills ,HSpan , ParentSpan} from './profilesty';

const Profile = () => {

  const [lang , setLang] = useState([]);
  useEffect( () => {
    axios.get("js/data.json").then(res => setLang(res.data.profile))},[])
  

    const LangProg = lang.map( (langItem) => {
      return (
        <Bar key={langItem.id}>
        <BarTitle>{langItem.lang}</BarTitle>
        <BarPerc>{langItem.prog}</BarPerc>
        <BarParent>
            <ParentSpan width={langItem.id}></ParentSpan>
        </BarParent>
    </Bar>
      )
    } )
  
  
  
  return (
    <MainProfile>
            <div className="container">
                <FirProfile>
                    <Title><TitleSpan>Our </TitleSpan>Profile</Title>
                    <Ul>
                        <Li>
                            <LiSpan>Name</LiSpan>
                            Syrian Judo Federation
                        </Li>
                        <Li>
                            <LiSpan>Start Date</LiSpan>
                            21/1/1996
                        </Li>
                        <Li>
                            <LiSpan>Address</LiSpan>
                            Al-faihaa Damascus
                        </Li>
                        <Li>
                            <LiSpan>Phone</LiSpan>
                            +963 9346485465
                        </Li>
                        <Li>
                            <LiSpan>Email</LiSpan>
                            syrianJudo@gmail.com
                        </Li>
                        <Li>
                            <LiSpan>Website</LiSpan>
                            <WebSpan>www.google.com</WebSpan>
                        </Li>
                    </Ul>
                </FirProfile>
                
                <Skills>
                    <HSkills>Some <HSpan>skills</HSpan></HSkills>
                    <PSkills>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </PSkills>
                    {LangProg}
                
                   
                </Skills>
                
            </div>
        </MainProfile>
  );
}

export default Profile;
