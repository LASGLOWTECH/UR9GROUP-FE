// import React, { useEffect } from 'react';

// const TawkToWidget = () => {
//   useEffect(() => {
//     var Tawk_API = Tawk_API || {};
    

//     (function () {
//       var s1 = document.createElement("script"),
//         s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = 'https://embed.tawk.to/65c0d10e8d261e1b5f5c8434/1hlsj18il';
//       s1.setAttribute('crossorigin', '*');
//       s0.parentNode.insertBefore(s1, s0);
//     })();
//   }, []);

//   return (
//     <div>
//       {/* Additional React components or content can go here */}
//     </div>
//   );
// };

// export default TawkToWidget;
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Check if the script is already added to prevent multiple loads
    if (!window.Tawk_API) {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.src = "https://embed.tawk.to/65c0d10e8d261e1b5f5c8434/1hlsj18il";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      document.body.appendChild(script);
    }
  }, []);

  return null; // This component does not render anything
};

export default TawkToWidget;
