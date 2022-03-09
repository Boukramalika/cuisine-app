import React, { Component } from 'react'

import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'


class Admin extends Component {

    render (){

        const {recettes, ajouterRecette, majRecette, supprimerRecette, chargerExemple}= this.props

        return (
            <div className='cards'>
                  <AjouterRecette ajouterRecette={ajouterRecette}/>
                {
                    Object.keys(recettes)
                        .map(key => <AdminForm
                        key={key}
                        id={key}
                        majRecette={majRecette}
                        supprimerRecette={supprimerRecette}
                        recettes={recettes} />)
                }
                <footer>
                  
                    <button onClick={chargerExemple}>Afficher</button>
                </footer>
            </div>

        )
    }
}

export default Admin