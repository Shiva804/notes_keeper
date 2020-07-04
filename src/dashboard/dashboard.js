import React from 'react'
import './dashboard.css'
import { auth } from 'firebase'
import authenticate from '../auth'
import { Link } from 'react-router-dom'
import Note from '../notes/notes'

const firebase = require('firebase')

class DashboardComponent extends React.Component
{

    constructor()
    {
        super()

      
      
      
      
 //states are used to store the data, whenever the data changes the component will re-render
    this.state = 
    {
        addItems:[{ content:null,
            title:null,}],
        //email:null,
        content:null,
       title:null
    
    
    }
    }

  




    render()
    {
 
    
        this.change = (type,e) =>
         {
           switch(type)
           {
               case 'title':
                   this.setState({title:e.target.value})
                   break

                case 'content':
                   this.setState({content:e.target.value})
                    
                    break
           }
        
           document.getElementById('title').style.display='inline-block' 
            
        }




     
        this.contentSubmit = (e)=>
        {
            e.preventDefault()
        

           
            document.getElementById('title').value = ''
            document.getElementById('title').style.display='none'  
            document.getElementById('notes').value = ''
            console.log(this.state)
 
            
        }

        this.sub = () =>
        {
            
            this.setState({
                addItems: [ ...this.state.addItems, {
                    'content': this.state.content,
                    'title':this.state.title 
                }],
              });

              this.setState({title:''})
              this.setState({content:''})


              console.log(this.state.addItems.content)

        }
        
    
        



        return(
            <div id='dashboard' >
               
                <header id='header'><h3>NOTES KEEPER</h3>
               
                <button id='logout' onClick ={()=>{authenticate.logout(()=>{this.props.history.push('/')})}}>Logout</button>
                
                </header>
            <div id='containers'>
               
                <div id='inp' >
                    
                    <form onSubmit={e => this.contentSubmit(e)}>
                
                <input type='text' id='title' name='title'  placeholder='Title:'onChange={e=> this.change('title',e)} /><br />
             
               <textarea id='notes'  name='content'  placeholder='Enter Your Notes..' onChange={e=> this.change('content',e)}/><br />
                
                <button id='add' type='submit' onClick={()=>this.sub()}>ADD</button>
                
                </form>
                
                </div>
               


                <div id='content'>
                    

                 { 

                  
                 this.state.addItems.map((note,index)=>(
                     note.content?
                    

                     <Note title={note.title} content={note.content} key={index} id={index}/> 
                    
                    :

                    null
                    
                 ))
                 
                 
                                 
                 
                 }
             
                
                </div>
            
            </div>
            
            </div>
            

            
        )
        
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr)
            this.props.history.push('/')

            else{
               firebase
               .firestore()
               .collection('users')
               .doc(_usr.email)
               .collection('notes')
               .doc()
               .onSnapshot( (data)=>{
                //    console.log(data.data().body)
                console.log(data.value)
               })
            
            }

        })
    }
}


export default DashboardComponent