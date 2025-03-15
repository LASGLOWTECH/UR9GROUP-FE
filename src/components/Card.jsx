
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import {useState} from "react"


const Card = ({ item }) => {
  
const  [img, setImg]=useState(false)

const handleClose=()=>{
  setImg(img=>!img)
 }
 const handleclick=()=>{
  setImg(img=>!img)
 }
 const toggleI=  img? 'active': '';
 return (
   <>
   {item.map(Val => {
 return (
     <Col lg={4} md={6}
         key={Val.id} className='dred pt-4  gx-4  ' >
       
       <div className="BUTTON bg-light  fw-bold P-text position-absolute mt-0 p-1 " >For Sale</div>
       
             <img className="project-im w-100 " src={Val.pics[0]}  alt="house" style={{ height:'250px' }}/>

           


             <div className="box bg-white justify-content-start d-flex flex-column">

             <p className=" P-text pt-3  ps-3 text-dark fw-normal " style={{ fontSize: '12px' }}>{Val.Residence}</p>
             <Link to={`/Projectlisting/${Val.id}`}>
       
             <button class="btn btn-warning mb-4  ms-3 fw-bold d-flex  text-dark "  style={{ fontSize: '14px' }} > View Details </button>  
             </Link> 
             
          

             </div>
             
                                   
     </Col>


     
 )
})}

<div className="galery bg-lights">

<div className='listing-title mt-4 mx-2 text-dark'>

    <h3 className="text-center pt-3 display-5 fs-2 fw-bold"> View more listings</h3>
    <p className='text-center P-text text-wrap mt-3 text-dark  fs-6'>Below are selected master piece of Our Properties</p>
</div>
<div className="btnos my-3 d-flex justify-content-center align-items-center">
{!img && <button class="btn btn-warning fw-bold my-2 d-flex px-2 text-dark fs-6"  onClick={handleclick}> View Listings </button>}
{img &&<button class="btn btn-light fw-bold my-2 d-flex pb-3 px-2 text-dark fs-6"  onClick={handleClose}> Unview Listings </button>  





}</div>




{/* {!loading && <input type="submit" className="  fs-4  rounded-2 px-2 sub-btn mt-2 bg-warning text-black" value="Send" />}
                            {loading && <input type="submit" className=" px-2 sub-btn mt-2 bg-success  text-light" disabled value="Sending" />}
                        */}

{item.map(img => {
 return (
     <div lg={2} md={6} key={img.id} 
        className={ `all-features${toggleI}`} >
       <Row>
        {img.pics.map(all=>{
          return(
<Col lg={4} className="py-2">  <img className="project-im "   style={{ borderTopLeftRadius:'20px ', borderBottomRightRadius:'20px ',height:'250px' }} src={all}  alt="ouse"></img>

</Col>
)})}

       


       </Row>

           

           

  </div>
)})}

</div>

     
   </>
 );
};

export default Card;


