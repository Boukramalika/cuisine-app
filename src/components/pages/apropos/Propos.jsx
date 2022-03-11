import React  from "react";
import Tilt from "react-tilt"
import ProposImage from "../../../assets/images/contact/propos.jpg";
import "./propos.css";

function Propos() {


  return (
    <div className="propos">
      <div
        className="leftpropos"
        style={{ backgroundImage: `url(${ProposImage})` }}
      ></div>
      
      <div className="rightpropos">
            <Tilt options={{max: 25}}>
                <h1> A propos de moi </h1>
                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>

            </Tilt>
      </div>
     
    </div>
  );
}

export default Propos;