import { useState } from 'react';
import Services from './Services';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  BsArrowUpRightCircle } from 'react-icons/bs'


const ImageSlider = () => {

  const [show, setShow] = useState(false)






  const handledisplay = (index) => {


    if (show === index) {
      return setShow(null)


    }
    setShow(index)
  }


  const handlehide = (index) => {

setShow(!show)
  }



  //   const imgBackgrounds = {

  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat",
  //     height: "100%",
  //     width: "100%"
  // }


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>
      <section className='bg-dark'>
        <div className=''>
          <Carousel


            keyBoardControl={true}
            customTransition="all 7s"
            transitionDuration={2000}
            responsive={responsive}

            removeArrowOnDeviceType={["tablet", "mobile"]}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
            //  autoPlay={responsive !== "mobile" ? true : false}
            // style={{ backgroundImage: `url(${Services.sectionimg})`, height: "80vh", width: "auto" }}

            containerClass="carousel-container ">

            {/* backgroundImage:`url(${Services.symbol})` */}
            {Services.map((Services, index) => {
              return (

                <div className="  " key={index} >
                  <div className="d-flex  py-2  flex-row justify-content-center align-items-center " style={{ backgroundColor: "black" }}>
                    <img src={Services.symbol} className='' alt='ur9 ' style={{ width: "50px" }}></img>
                    <h5 className="  px-3 P-text fw-bold gold font-bold  ">
                      {Services.info} </h5></div>
                  <div className=' position-relative ' style={{height:""}} >

                    {show === index ? (   <a style={{ textDecoration: "none" }} href={Services.link}> <div className='position-absolute   secimg  w-100 h-100 top-50 start-50 translate-middle  p-5 d-flex align-items-center justify-content-center py-5 ' style={{ zIndex: "1", transition: "all 2s" }} > 
                 
                    <BsArrowUpRightCircle className=' fs-1 display-1 gold    '  onMouseOut={() => handlehide(index)}/>
                   </div> </a> ) : null
                    }
                    <img src={Services.sectionimg} className=' w-100' alt='ur9 ' style={{ height: "auto" }}   onMouseOver={() => handledisplay(index)} ></img>



                  </div>


                </div>
              )
            })}










          </Carousel>
        </div>
      </section>
    </>
  )
}

export default ImageSlider;