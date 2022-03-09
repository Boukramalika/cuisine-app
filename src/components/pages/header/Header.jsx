import React  from 'react'
import "./header.css";

const Header = ({ pseudo})=>{
    // ici on a fais cette fonction pour verifier si la lettre et en voyelle ou une consonne 
    //le i ici ça veut dire peut emporte si c'est maj ou mini 
    //tester le psuedo 0 donc la premiere lettre 
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? ` d'${pseudo}` : `de ${pseudo}`
    return(
        <header>
            <h1> La boite à recette  <span>{formatPseudo(pseudo)}</span></h1>
        </header>
    )
}
 export default Header