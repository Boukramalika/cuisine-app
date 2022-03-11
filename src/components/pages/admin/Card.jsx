import React  from 'react'
import "../../../appAdmin.css";

//ici on a importer les props details
const Card = ({details}) =>{

    //ici pour ameliorer l'affichage de mes ingredients et instruction ona utilisé  les methodes suivants:
    //le split qu'on a utiliser ça nous permet de couper notre tableau avec une vergule, puis on a maper chaque
    //item pour le mettre dans un li
    const ingredients = details.ingredients
    .split(',')
    .map(item=><li key={item}>{item}</li>)


    //on duplique ce qu'est fais pour ingredients mais ici pour retour a la ligne qui est presenter par \n
    const instructions = details.instructions
    .split('\n')
    .map(item=><li key={item}>{item}</li>)


    //on a ajouter cette methode dans le but si l'utilisateur se trompe dans l'image , pour qu'on aura pas
    //une erreur  =>on va afficher une image par default
    const requireImage = chemin =>{
      try {
          return require(`../../../assets/images/img/${chemin}`)
      }  catch(err){
        return require(`../../../assets/images/img/default.jpeg`)
      }
    }
  

    return(
        <div className='card'>
            <div className='image'>
                <img src={requireImage(details.image)} alt={details.nom}/>
            </div>
            <div className='recette'>
                <h2>{details.nom}</h2>
                <ul className='liste-ingredients'>
                    {ingredients}
                </ul> 
                <ol className='liste-instructions'>
                {instructions}
                </ol>  
            </div>
        </div>
    )
}

export default Card