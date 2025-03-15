import React from 'react';

const GoogleMap = () => {
  return (

    <div style={{ width: '100%', height: '450px' }}
    className="  google-map-container">

      <iframe  className="google-map-iframe pt-5 "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9272002127796!2d7.440955173753113!3d9.070396988342209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b959a449077%3A0xfad53f9e7a60238b!2s4%20Ajose%20Adeogun%20St%2C%20Mabushi%2C%20Abuja%20900108%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1721136830519!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    
  );
};

export default GoogleMap;
