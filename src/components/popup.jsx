import { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup () {

  const [lgShow, setLgShow] = useState(true);


useEffect(()=>{

const interval= setInterval(() => {
    handleClick()
    
  }, 50000);

return ()=>{
  clearInterval(interval)
}
  
},[])


const handleClose=()=>{ setLgShow(false)}

  const handleClick =() =>{setLgShow(true)}

  return (
    <>
    <div className=' h-100 mt-5  position-absolute'>

{/*    
      <Container  className='px-2 my-5'>
      <button  className="bg-dark mt-5 text-white  p-3 fs-5  py-2 bg-black bg-opacity-75 rounded-3  "onClick={handleClick}></button>
      </Container> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
        className=" mt-5 bg-black bg-opacity-75  "
      >
        <Modal.Header closeButton className='bg-warning '>
          <Modal.Title id="example-modal-sizes-title-lg" className='text-center text-black fs-4 font-bolder display-5 '>
           Coming Soon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='w-full bg-black  '>
<img src="/webb.jpg" alt="banner" className='w-100'/>


</Modal.Body>
      </Modal>

    </div>
      
    </>
  );
}

export default Popup;