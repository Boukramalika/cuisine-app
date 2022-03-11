import React, { Component } from 'react'
// CSS
import "./appAdmin.css";

import Header from './components/pages/header/Header'
import  recettes from './recettes'
import Card from './components/pages/admin/Card';
import Admin from './components/pages/admin/Admin'

// firebase 
import base  from './base'

class Application extends Component {
    state = {
      pseudo: this.props.match.params.pseudo,
      recettes:{}
    }
  
    //ici on synchronise au moment ou l'application est charger 
    //et on lui a precisé ou il faut ajouter les pseudo
    //le 2em para qu'on a donner a la fonction :
    //context:this => qui est notre application et on a precisé quel state c'est recettes
    //on a ajouter this.ref => dans le but quant on modifier les donner on modifier pas la page de l'autre 
    //pour ne pas ecraser les info qui nous apartiennent pas 
    //le but est dés qu'il change de page on termine cette Synchronisation 
    componentDidMount(){
      this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
        context:this,
        state: 'recettes'
      })
    }
  
    //cette fonction pour desynchroniser au moment ou le component se ferme
    // removeBinding ça veut dire on suprime se qui est fait dans le componentDidMount
    componentWillUnmount(){
      base.removeBinding(this.ref)
    }
  
    //on a creer cette fonction  quant on ajoute une recette 
    //dans 1er on recupere nos recette 
    //2em on renom les recettes pour que ça sois unique avec recette-date d'aujord'hui
    ajouterRecette = recette => {
      const recettes ={ ...this.state.recettes }
      recettes[`recette-${Date.now()}`] = recette
      this.setState({recettes})
    }
  
    majRecette = (key, newRecette) => {
      const recettes ={ ...this.state.recettes }
      recettes[key] = newRecette
      this.setState({recettes})
    }
  
    supprimerRecette= key => {
      const recettes ={ ...this.state.recettes }
      recettes[key]= null
      this.setState({recettes})
    }
  
    //ici on a fais cette fonction pour charger et remplir l'ensemble des recette qu'on a
    chargerExemple= () => this.setState({recettes})
  
    render () {
      //faire un tableau de clée puis faire le map pour bouclé autour
      const  cards =  Object.keys(this.state.recettes)
      .map(key=><Card key={key} details={this.state.recettes[key]}></Card>)
      console.log(cards)
      return (
        <div className='box'>
          <Header pseudo={this.state.pseudo} />
          <div className='cards'>
            {cards}
          </div>
          <Admin 
          pseudo={this.state.pseudo}
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}
          chargerExemple={this.chargerExemple}></Admin>
        </div>
      )
    }
  }
export default Application
  