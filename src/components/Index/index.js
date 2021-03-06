import React , { Component } from 'react'

import Home from './../Home/home'
import About from './../About/about'
import Portifolio from './../Portifolio/portifolio'
import Profile from './../Profile/profile'
import Work from './../Work/work'
import Footer from './../Footer/footer'
import SocialMedia from './../SocialMedia/socialMedia'


class Index extends Component {
  render() {
  return (
    <div className="App">
    <Home />
    <Work />
    <Portifolio />
    <Profile />
    <About />
    <SocialMedia />
    <Footer />
    </div>
  );
}
}
export default Index;
