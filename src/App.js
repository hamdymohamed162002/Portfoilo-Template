import React from 'react';
import './App.css';
import Clients from './containers/clients/clients';
import ContactUs from './containers/Contactus/contactUs';
import FeedBack from './containers/FeedBack/feedback';
import Home from './containers/HomeBanner/HomeBanner';

import Projects from './containers/Projects/Projets';
import Services from './containers/service/sevice';
import Layout from './hoc/layout/layout';



function App() {
  return (
    <Layout>
      <Home/>
  
    <Projects/>
    <Clients/>
    <Services/>
    <FeedBack/>
    <ContactUs/>
    </Layout>
    
  );
}

export default App;
