
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
