import React from 'react'
import './dashboard.css'
import { auth } from 'firebase'
import authenticate from '../auth'
import { Link } from 'react-router-dom'

const firebase = require('firebase')

class DashboardComponent extends React.Component
{

    constructor()
    {
        super()
    this.state = 
    {
        email:null,
        notes:[]
    }
    }
    render()
    {
        
        return(
            <div id='dashboard'>
                <header id='header'><h3>NOTES KEEPER</h3>
                <button id='logout' onClick ={()=>{authenticate.logout(()=>{this.props.history.push('/')})}}>Logout</button>
                </header>
            <div id='container'>
                
            </div>
            </div>

            
        )
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr)
            this.props.history.push('/')

            else{
                await firebase
                .firestore()
                .collection('notes')
                .where('users','array-contains',_usr.email)
                .onSnapshot(async res => {
                    const notes = res.docs.map(_doc => _doc.data)
                    await this.setState({
                        email: _usr.email,
                        notes: notes 
                    })
                    console.log(this.state)

                }) 
            
            }

        })
    }
}


export default DashboardComponent