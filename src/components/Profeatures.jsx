import { useState } from "react";

import Row from 'react-bootstrap/Row';

import Buttons from "./Buttons"
import Card from "./Card";


const Profeatures = ({Projectlisting}) => {
    
    const [item, setItems]=  useState(Projectlisting);
     const menuItems = [...new Set(Projectlisting.map((Val) => Val.Place))];
   
     const filterItem = (finditems) => {
       const newItem = Projectlisting.filter((newVal) => {

         return newVal.Place === finditems;
       });
       setItems(newItem);
     };

  
    return (
    
    <div >
        <div className=" container-fluid" bg-dark>
<Buttons
            filterItem={filterItem}
            setItems={setItems}
            menuItems={menuItems}
          />
   


</div>


      
      
      
      
        <Row className="poper px-2 justify-content-center d-flex  ">
        <Card item={item} />
       
    </Row>



 
    </div>
  
    
      );
}
 
export default Profeatures;