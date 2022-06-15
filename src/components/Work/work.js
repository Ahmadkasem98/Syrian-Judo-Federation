import axios from 'axios';
import React , {Component} from 'react'

import { WorkPage , H2 , Span , WorkPart , Icone , PartTitle , Hr , PartDesc } from "./workstyle"

class Work extends Component {

  state = {
    works : [] 
  }

  componentDidMount() {
    axios.get("js/data.json").then(res => this.setState({ works : res.data.works}))
  }

  render(){

    const works = this.state.works;

    const workList = works.map( workItem => {

      return (
        <WorkPart first={workItem.id} key={workItem.id}>
                    <Icone className={workItem.icon_name}></Icone>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Hr />
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </WorkPart>
      )
    })
  return (
    <WorkPage>
            <div className="container">
                <H2><Span>Judo</Span> News</H2>
               {workList}
                
            </div>
        </WorkPage>
  );
  }
}

export default Work;
