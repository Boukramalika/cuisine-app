import React, { Component } from 'react'
// CSS
import "./appAdmin.css";

import Header from './components/pages/header/Header'
import  recettes from './recettes'
import Card from './components/pages/admin/Card';
import Admin from './components/pages/admin/Admin'
class Application extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes:{}
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
            <Admin chargerExemple={this.chargerExemple}></Admin>
      </div>
    )
  }
}

export default Application