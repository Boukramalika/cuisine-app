import React, { Component }  from 'react'

class  AjouterRecette extends Component {
    state={
        nom:'',
        image:'',
        ingredients:'',
        instructions:''
    }

    //on a creer une seule fonction dinamique et adaptable qui recuperer et mettre ajour
    // tout les names et valeurs qu'on a dans le formulaire
    handleChange =event => {
        const {name, value}= event.target
        this.setState({[name]:value})
    }

    // avec cette preventDefault on va gerer la submission du formulaire
    //ensuite on a copier notre state
    // ensuite on a appeler la fonction ajouterRecette
    handleSubmit =event => {
        event.preventDefault()
        const recette = { ...this.state}
        this.props.ajouterRecette(recette)
        // Reset => on va boucler autour de notre formulaire puis on met le state a Zéro
        Object.keys(recette).forEach(item => {
            recette[item]=""
        })
        this.setState({...recette})
    }


    render(){
        return (
            <div className='card'>
                <form className='admin-form ajouter-recette' onSubmit={this.handleSubmit}>
                    <input value={this.state.nom} 
                    onChange={this.handleChange} 
                    name="nom" type="text" 
                    placeholder='Nom de la recette'/>

                    <input value={this.state.image}
                    onChange={this.handleChange} 
                    name="image" type="text"
                    placeholder={'Nom de l\'image'}/>

                    <textarea value={this.state.ingredients}
                    onChange={this.handleChange} 
                    name="ingredients"  rows="3" 
                    placeholder='Liste des ingredients'/>

                    <textarea value={this.state.instructions}
                    onChange={this.handleChange} 
                    name="instructions" 
                    rows="15"placeholder='Liste des instructions' />
                    
                    <button type='submit'>+ Ajouter une recette</button>
                </form>
            </div>
        )
    }
  
}
 export default AjouterRecette