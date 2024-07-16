
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import ourPartners from '../components/partners3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Partners = () => {

   useEffect(() => {
      AOS.init({ duration: 2000 });

   }, []);

   return (

      <div className="Blogs"   >

         <Container className='px-4 '>



            <div className=' pt-5 text-center '  >
               <h5 className=" fw-bolder display-6 text-warning text-center pt-5 " style={{ color: '' }}>Our Banking Partners</h5>

               <p className=" pt-2  text-center  text-light pt-3" style={{ fontSize: '20px', color: 'white' }}>Our banking partners are</p>
            </div>








            <Row className=' mx-5 py-4  '  >






               {ourPartners.map(Teams => {
                  return (


                     <Col lg={3} md={6} key={Teams.id} className='  d-flex justify-content-center align-items-center gx-1 py-2 ' style={{ backgroundColor: '#DADDE4' }} data-aos="zoom-up">
                        <img src={Teams.Banklog} className=' bimage  images w-75  p-2 ' alt="bank logs" />

                     </Col>


                  )

               })}



            </Row>

         </Container>

      </div>






   );
}

export default Partners;