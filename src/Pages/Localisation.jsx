import React from 'react';

const Localisation = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        title="localisation-google-map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3979.6141794106265!2d9.799229874697813!3d4.0986600465830705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srapha%20institut%20pk17!5e0!3m2!1sfr!2scm!4v1747267975547!5m2!1sfr!2scm"  // Mets ton lien ici
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Localisation;
