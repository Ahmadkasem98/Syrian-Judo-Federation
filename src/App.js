import React , { Component } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Navbar from './components/Navbar/navbar'
import Contact from './components/Contact/contact'
import Index from './components/Index/index'




class App extends Component {
  
  render() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Index />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
   
   
    </BrowserRouter>
  );
}
}
export default App;
