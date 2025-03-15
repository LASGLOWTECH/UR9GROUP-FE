
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Col, Row } from 'react-bootstrap';
import Slideshow from '../components/urslides';
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Ur9Lin = () => {

  useEffect(() => {
    setInterval(() => {
      AOS.init({ duration: 3000 });

    }, 1000);

  }, []);



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>
      <Helmet>
        <title>Ur9 LIN</title>
        <meta
          name="description"
          content="UR9 Leadership Insight Network is an exclusive community dedicated to nurturing leadership excellence across diverse industries and sectors." />

        <link rel="canonical" href="/ur9lin" />
      </Helmet>

      <Carousel responsive={responsive}
        customTransition="all .5s"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}

      >


        {Slideshow.map((creative, index) => {
          return (


            <div className="z-index:-50">


          
              <div className=''
                key={index}
                data-aos-duration="1500"
                data-aos="fade-down-right"
                style=
                {{
                  zIndex: "-999",
                  backgroundImage: `url(${creative.imageUr})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh ",
                  width: "100%",


                }}>
                

                <div className='backdrop '>

                

                  <div className='w-100 mb-2 rounded-medium  h-4 bg-warning' data-aos="slide-right" />
                  <h1 className='lin-h1 fs-1  text-center fw-semibold text-white ' data-aos-duration="1500" data-aos="zoom-in-down">{creative.title}</h1>
                  <p className=' textfield px-2 pt-6 text-light text-center text-wrap  shadow-sm font-normal ' data-aos-duration="1500" data-aos="slide-down">{creative.text}</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWf3UyMJfZAf-oyfrpIxrfq7z1g7BNKhkijrM5Fh3Bhq4-7w/viewform?usp=pp_url" className='btn btn-warning btn-custom
            px-4  mt-6 py-2 rounded-2   transition duration-500 ease-in-out text-normal '

                  >Read More</a>

                </div>



              </div>
            </div>



          )

        })}




      </Carousel>






    </>
  )
}

export default Ur9Lin;