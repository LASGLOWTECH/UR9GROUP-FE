
import Projectlisting from "./Project-listing";

const Buttons = ({ filterItem, setItems, menuItems }) => {
  return (
   
      <div className="btn-tool-bar  " role="toolbar" aria-label="Too bar with button groups">
       
       
        {menuItems.map((Val, id) => {
          return (
            <div className="btn-group mr-2 items-center justify-center pt-2 " role="group">
            <button
              className="btn btn-outline-secondary btn-md mx-2 fw-normal "
              onClick={() => filterItem(Val)}
              key={id}>  {Val}
       
            </button>
            </div>
          );
        })}

<div className="btn-group mr-2 " role="group">
        <button type="button"
          className="btn btn-outline-secondary btn-md mt-2  mx-2 fw-normal "
          onClick={() => setItems(Projectlisting)}
        >
          All Listings
        </button>
        </div>

      </div>

  );
};

export default Buttons;