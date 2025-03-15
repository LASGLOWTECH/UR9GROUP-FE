import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import TawkToWidget from './components/tawkit';
import './App.css';
import Uriel from './pages/Aboutceo';
import Ur9Lin from './pages/ur9lin';
import 'bootstrap/dist/css/bootstrap.min.css'

import About from './pages/About'
import Team from './pages/Team';
import Partners from './pages/partners';
import ContactUs from './pages/Contact';
import Footer from './components/Footer';
import React, { lazy, Suspense } from 'react';
import Blog from './pages/Blog';
// import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Prodetails from './pages/prodetails';
import FullBlogs from './components/fullblogs';
import Privacy from './pages/privacypol';
import Ethics from './pages/Ethics';
import Failurepage from './failure'
import ScrollTop from './components/scroll';
import { RotateLoader } from "react-spinners";
// import Popup from './components/popup';
import Services from './pages/Ourbusiness';
import Sustainability from './pages/sustainability';
import Createblog from './components/createblog';
const Projects = lazy(() => import('./pages/Project'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);



    setTimeout(() => {
      setLoading(false)
    }, 500);




  }, [])

  return (

    <div className="App ">
      {loading ? <div className='load-val bg-dark 
     d-flex flex-column justify-content-center align-items-center'
        style={{ height: '100vh', width: '100%' }}>

        <img src='/hem.png' className="load-img" alt='hem' style={{ height: '100px', width: '100px' }}></img>

        <p className='text-light fs-6 fw-light '>UR9 Group</p></div> :

        <Router>
    <Suspense fallback={<div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      
      
     
  <RotateLoader color='#000000b3' loading={loading} size='150'/></div>}>
          <div>
            {/* <Popup /> */}

            <Navbar />

            <div className='items '>
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/"> <Home /></Route>
                <Route path="/Aboutceo"> <Uriel/>  </Route>
                <Route path="/About"> <About />  </Route>
                <Route path="/Team"> <Team /> </Route>
                <Route path="/Ourbusiness"> <Services /> </Route>
                <Route path="/partners"> <Partners /> </Route>
                <Route path="/Contact"> <ContactUs />  </Route>
                <Route path="/Project"> <Projects />  </Route>
                <Route path="/privacypols"> <Privacy />  </Route>
                <Route path="/Ethics"> <Ethics />  </Route>
                <Route path="/Blog"> <Blog />  </Route>
                {/* <Route path="/blogdetails/:id"> <BlogDetails />  </Route> */}
                <Route path="/Projectlisting/:id"> <Prodetails /> </Route>
                <Route path="/fullblogs/:id"> <FullBlogs /> </Route>
                <Route path="/sustainability"> <Sustainability /> </Route>
                <Route path="/createblog"> <Createblog /> </Route>
                <Route path="/ur9lin"> <Ur9Lin/>  </Route>
                <Route path="*"> <Failurepage /> </Route>
              
               
              </Switch>


            </div>
            <ScrollTop />

            <TawkToWidget />
         

            <Footer />

          </div>
          </Suspense>
        </Router>


      }


    </div>
  );
}







export default App;

