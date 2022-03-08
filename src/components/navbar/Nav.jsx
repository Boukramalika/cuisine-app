import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import{ useState} from "react"
import "./Nav.css"

function Nav(){
//cette fonction juste pour savoir si le menu ouvert ou fermer 
//ici le menu est fermer par default 
    const[showLinks, setShowLinks] = useState(false)
//ici  le but de cette fonction on va editer la valeur uniquement si le showlinks est defferent de false
    const handleShowlinks=() =>{
        setShowLinks(!showLinks)
    }
    console.log(showLinks)
    return(
    <Navbar className={`navbar ${showLinks  ?'show-nav' : 'hide-nav'}`}>
        <div className='navbar_logo'>Creer ta recette</div>
        <ul className='navbar_links'>
            <li className='navbar_item slideInDown-1'>
                <a href='/' className='navbar_link'>Accueil</a>
            </li>
            <li className='navbar_item slideInDown-2'>
                <a href='/recettes' className='navbar_link'>Recettes </a>
            </li>
            <li className='navbar_item slideInDown-2'>
                <a href='/propos' className='navbar_link'>Qui suis-je ? </a>
            </li>
            <li className='navbar_item slideInDown-3'>
                <a href='/contact' className='navbar_link'>Contact</a>
            </li>
        </ul>
        <button className='navbar_burger' onClick={handleShowlinks}>
            <span className='burger_bar'></span>
        </button>
    </Navbar>
    )
}
export default Nav