import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import FAQ from "./faqslist";
const Faq = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    
    }, []);

   
    const [itemsOpen, setItemsOpen] = useState(false)

    const handleClick = (index) => {
  
 
if (itemsOpen === index){
    return setItemsOpen(null)
    
    
}
setItemsOpen(index)
    }
    
   
    return (

        <>
            <div className="Faq">

<h2 className=" text-center mt-5 pt-5 fw-bold">FAQS</h2>

            <div className="d-flex mt-3 py-2 w-auto mb-4 bg-dark flex-row align-items-center justify-content-center ">
            <h2 className="   text-warning  display-7 py-3 px-2 fw-bold  text-center">Frequenly Asked Questions</h2>





</div>



                <div className="  col container py-5">

{FAQ.map((faqlist, index) => {
    return (
        <div className=" bg-dark d-flex flex-column " key={index} >

        <span className=" header d-flex flex-row justify-content-between px-5 md:px-5 py-3 border bg-white shadow-lg text-white cursor align-items-center" onClick={() => handleClick(index)} >
            <p className="text-dark hover:text-light P-text   font-medium ">{faqlist.question}</p> 

            {itemsOpen === index ? (<BiMinus className="text-white  P-text bg-dark rounded-full " />) :
                (<BiPlus className="text-white fs-7 bg-dark rounded-full" />)
            }</span>

            {itemsOpen === index ? (
        <div className=" bg-white px-5 py-3 ">
            <p className="text-dark "> {faqlist.Answer} </p>
        </div>): null}

    </div>


    )
}
)}

            

                </div> 
            </div>




        </>
    );
}

export default Faq;