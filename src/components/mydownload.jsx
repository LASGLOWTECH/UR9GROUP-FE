import React from 'react';

import { Button } from 'react-bootstrap';
const PDFDownload = () => {
  return (<>





  <div className=''>
 <img  className="w-100 align-content-center " src="/ur9brochure.jpg" alt="Download PDF" />
<Button variant='warning' className='mt-2 px-3 py-2'><a className=" " style={{ textDecoration: 'none', color: 'black' }} href="https://drive.google.com/uc?export=download&id=1YiL7ddezLuLQnY15Lr3uWtbZiqUP96oJ" download="UR9_brochure.pdf">DOWNLOAD</a></Button>
    
     


    </div>

   
    </>
  );
};

export default PDFDownload;