 
import { Link } from 'react-router-dom'; 
import { Helmet } from 'react-helmet-async';
 const Failurepage = () => {
  return (

    <>
    <Helmet>
        <title>About Us</title>
        <meta name="description" content="UR9 GROUP is a diversified and fully integrated conglomerate registered with the Corporate Affairs Commission and under the laws of The Federal Republic of Nigeria." />
        <link rel="canonical" href="/failure" />
        <div className=" d-flex align-items-center justify-content-center  flex-column bg-light  py-5 px-5 mt-5">

<h1 className="fw-bold text-dark fs-1 display-5 py-6 ">404</h1>
<h5 className="">Page not found!</h5>
<p className="P-text ">
  Sorry the page your are trying to access does not exist, please check your route

</p>
<div className=''>
<button type="button" class="btn btn-warning"><Link to="/" className=' fw-bold  text-dark text-decoration-none fs-5 '>Back to home</Link></button>
</div>

</div>
      </Helmet>
    
    </>
   
  );
}

export default Failurepage;