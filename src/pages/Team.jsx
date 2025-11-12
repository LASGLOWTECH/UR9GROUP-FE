
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import TeamList from '../components/Team-list';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';


const Team = () => {
   const [expandedCards, setExpandedCards] = useState({});

   const toggleExpand = (index) => {
      setExpandedCards(prev => ({
         ...prev,
         [index]: !prev[index]
      }));
   };

   const truncateText = (text, maxLength = 120) => {
      if (!text) return '';
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
   };

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




               <Row className='g-4'>
                  {TeamList.map((Teams, index) => {
                     const isExpanded = expandedCards[index];
                     return (
                        <Col key={index} xs={12} sm={6} lg={4}>
                           <div className='Team-item rounded-4 overflow-hidden d-flex flex-column' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: 'white', height: '600px' }} >
                              
                              {/* Image Card */}
                              <div className='position-relative' style={{ width: '100%', height: '350px', overflow: 'hidden', flexShrink: 0 }}>
                                 <img 
                                    className="w-100 h-100" 
                                    src={Teams.Avatar} 
                                    alt={Teams.Name}
                                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                 />
                              </div>

                              {/* Content Section */}
                              <div className='p-3 d-flex flex-column flex-grow-1' style={{ height: '250px', overflow: 'hidden' }}>
                                 {/* Name */}
                                 <h3 className="fw-bold fs-5 mb-2" style={{ color: '#15172f', flexShrink: 0 }}>
                                    {Teams.Name}
                                 </h3>

                                 {/* Position/Title */}
                                 <p className="fw-semibold mb-2" style={{ color: '#aa8305fe', fontSize: '14px', flexShrink: 0 }}>
                                    {Teams.Position}
                                 </p>

                                 {/* Member credentials if available */}
                                 {Teams.member && (
                                    <p className="fw-normal mb-2" style={{ color: '#666', fontSize: '13px', flexShrink: 0 }}>
                                       {Teams.member}
                                    </p>
                                 )}

                                 {/* Description with expand/collapse */}
                                 <div className='d-flex flex-column flex-grow-1' style={{ minHeight: '0' }}>
                                    <div style={{ flexGrow: 1, overflowY: isExpanded ? 'auto' : 'hidden' }}>
                                       <p 
                                          className="mb-0" 
                                          style={{ 
                                             fontSize: '14px', 
                                             color: '#404145',
                                             lineHeight: '1.6',
                                             transition: 'all 0.3s ease'
                                          }}
                                       >
                                          {isExpanded ? (
                                             <>
                                                {Teams.About}
                                                {Teams.About && Teams.About.length > 120 && (
                                                   <span> </span>
                                                )}
                                             </>
                                          ) : (
                                             <>
                                                {truncateText(Teams.About)}
                                                {Teams.About && Teams.About.length > 120 && (
                                                   <button
                                                      onClick={() => toggleExpand(index)}
                                                      className='btn p-0 border-0 bg-transparent ms-1'
                                                      style={{ 
                                                         color: '#aa8305fe',
                                                         cursor: 'pointer',
                                                         fontSize: '14px',
                                                         textDecoration: 'underline',
                                                         fontWeight: '500'
                                                      }}
                                                      aria-label="See more"
                                                   >
                                                      See more
                                                   </button>
                                                )}
                                             </>
                                          )}
                                       </p>
                                       {isExpanded && Teams.About && Teams.About.length > 120 && (
                                          <button
                                             onClick={() => toggleExpand(index)}
                                             className='btn p-0 border-0 bg-transparent mt-1'
                                             style={{ 
                                                color: '#aa8305fe',
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                textDecoration: 'underline',
                                                fontWeight: '500'
                                             }}
                                             aria-label="See less"
                                          >
                                             See less
                                          </button>
                                       )}
                                    </div>
                                 </div>

                              </div>

                           </div>
                        </Col>
                     )
                  })}
               </Row>



            </Container>

         </div>



      </>


   );
}

export default Team;
