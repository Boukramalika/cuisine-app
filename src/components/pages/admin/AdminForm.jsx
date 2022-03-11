import React from 'react'

const AdminForm = ({
  id: key,
  majRecette,
  recettes,
  supprimerRecette
}) => {
  const recette = recettes[key]

  // dans cette fonction :
  //on a recuperer la valeur du champ saisi dans le formulaire 
  // on a recuperer un recette qui est dans notre state recettes
  // cette recette o li a donner une valeur
  //puis le majRecette il va recuperer le state et prendre la bonne clée pour savoir laquel qu'il faut modifier
  // et la mettre a jour 
  const handleChange = (event, key) => {
    const { name, value } = event.target
    const recette = recettes[key]
    recette[name] = value
    majRecette(key, recette)
  }

  return (
    <div className='card' >
      <form className='admin-form'>

        <input value={recette.nom}
        onChange={e => handleChange(e, key)} 
        type='text' 
        name='nom' 
        placeholder='Nom de la recette' />

        <input value={recette.image}
         onChange={e => handleChange(e, key)} 
         type='text' 
         name='image' 
         placeholder="Adresse de l'image" />

        <textarea value={recette.ingredients} 
        onChange={e => handleChange(e, key)} 
        name='ingredients' 
        rows='3' 
        placeholder='Liste des ingrédients' />

        <textarea value={recette.instructions} 
        onChange={e => handleChange(e, key)} 
        name='instructions' 
        rows='15' 
        placeholder='Liste des instructions' />

      </form>
      <button onClick={() => supprimerRecette(key)}>-Supprimer</button>
    </div>
  )
}

export default AdminForm