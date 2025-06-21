// src/components/FacebookFeed.jsx
import { useEffect } from "react";
import "../styles/FacebookFeed.scss"; 

const FacebookFeed = () => {
  useEffect(() => {
    // Si le SDK est chargé, on "parse" pour afficher le plugin
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="facebook-feed">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/InstitutSuperieurRapha"
        data-tabs="timeline"
        data-width=""
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/InstitutSuperieurRapha"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/InstitutSuperieurRapha">
            Institut Supérieur Rapha
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookFeed;
