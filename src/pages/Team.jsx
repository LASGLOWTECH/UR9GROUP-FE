
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import TeamList from '../components/Team-list';
import { Helmet } from 'react-helmet-async';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


const Team = () => {

   return (
      <><Helmet>
         <title>Meet the Team</title>
         <meta
            name="description"
            content="We are a team of experts dedicated to providing exceptional and high-quality services in all our areas of operation." />

         <link rel="canonical" href="/Team" />
      </Helmet>
         <div className="Blogs"   >

            <Container className='px-4 pt-3' style={{ maxWidth: '1200px' }} >
               <Row>
                  <Col>

                     <div className='d-flex align-items-center flex-column py-5 rounded-3  mt-5'>
                        <h1 className=" fw-bolder display-5 text-center text-warning pt-5  " style={{ color: '' }}> Meet the Team</h1>

                        <p className="textfield pt-2 textfield  pt-6 text-light text-center text-wrap  shadow-sm font-normal text-center  pt-3" style={{ fontSize: '20px', color: 'white' }}>We are team of experts united by one goal.<br /> To provide excellent and quality services in our areas of operation.</p>
                     </div>

                  </Col>


               </Row>






               <ResponsiveMasonry
                  columnsCountBreakPoint={{ 350: 1, 750: 2, 900: 4 }}
                  gutter='5px' >

                  <Masonry>


                     {TeamList.map(Teams => {
                        return (
                           <div className='px-2 ' key={Teams.id}>
                              {/* <Col lg={4} md={6} key={Teams.id}> */}

                              <div className='Team-item   my-2 rounded-4' style={{ boxShadoW: '9px 20px white ', backgroundColor: 'white' }} >
                                 <div className='d-flex flex-row justify-between align-items-center ' style={{ boxShadoW: '9px 20px white ', backgroundColor: '#aa8305fe' }} >
                                    <div className='img-ito d-flex bg-light m-2 justify-content-center align-items-center' style={{ width: '', height: '', borderRadius: '100%' }}><img className="icon-im " src={Teams.Avatar} alt="house" style={{ width: '150px', height: '150px', borderRadius: '100%', border: '3px solid white' }} ></img></div>
                                    <h3 className=" fw-medium fs-5 ps-2 text-right py-4 service-title" style={{ color: 'white' }}>{Teams.Name}</h3>

                                 </div>

                                 <div className="Rating-icon m-2 py-1 px-2 text-warning ">
                                    <i className={Teams.icon}></i>
                                    <i className={Teams.icon}></i>
                                    <i className={Teams.icon}></i>
                                    <i className={Teams.icon}></i>
                                    <i className={Teams.icon}></i>

                                 </div>


                                 <p className=" px-3 fw-bolder  service-title" style={{ color: '#404145' }}>{Teams.Position}</p>
                                 <p className=" px-3 fw-bold P-text service-title" style={{ color: '#404145' }}>{Teams.member}</p>
                                 <p className=" pro-text px-3 pb-3 text  " style={{ fontSize: '15px', color: 'black' }}>{Teams.About}</p>
                                 
                                
                                 



                              </div>
                           </div>


                        )

                     })}

                  </Masonry>


               </ResponsiveMasonry>



            </Container>

         </div>



      </>


   );
}

export default Team;