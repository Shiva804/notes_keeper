import React, { Component } from 'react'
import './colors.css'

class ColorSelector extends Component {
    constructor()
    {
        super()
  
    }
    render() {

        this.change = () =>
        {
            this.props.changeColor(this.props.color)
        }
    
      
       

        return (

            <div id={this.props.id} >
                
              <button id='col' style={{backgroundColor:this.props.color}} onClick={this.change}></button>
              
               
            </div>
            
        )
    
    }
}


export default ColorSelector