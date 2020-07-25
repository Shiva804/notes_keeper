import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import logo1 from '../dashboard/Layer 1.png'
import logo2 from '../dashboard/Layer 3.png'

const firebase = require('firebase')
class SignUpComponent extends React.Component
{
    constructor()
        {
            super()
            this.state = {
                email:null,
                password:null,
                confirm_password:null,
                name:'',
                signUpError:''
            }
        }
    
    render()
    
    {
        this.formValid = () => this.state.password === this.state.confirm_password
        


        //Instead of typing this.props everytime it can be store in a variable
      this.userTyping = (type,e) =>
       {
           switch (type) {
               case 'email':
                   this.setState({email: e.target.value})
                   break;
                case 'password':
                   this.setState({password: e.target.value})
                   break;
                case 'confirm_password':
                   this.setState({confirm_password: e.target.value})
                   break;
                case 'name':
                    this.setState({name: e.target.value})
                   break;
                   
        
           
               default:
                   break;
           }
       }
        

       this.submitSignUp = e =>
       {
           e.preventDefault()

           
           if(!this.formValid())
           {
              this.setState({signUpError: 'Password Mismatch!!'})
              return
           }
           else
           {
               const name = {
                   email:this.state.email,
                   name:this.state.name
               }
            

               firebase
               .auth()
               .createUserWithEmailAndPassword(this.state.email,this.state.password)
               .then(() => {
                
                firebase
                .firestore()
                .collection('names')
                .add(name)


                      
                this.props.history.push('/')
            },dbError => {
                this.setState({signUpError:'Failed to add User'})
                setTimeout(()=>{
                 window.location.reload(false)

             },1000)
            }
            ,authError => {
             this.setState({signUpError:'Email or password is Invalid..'})
             setTimeout(()=>{
                 window.location.reload(false)

             },1000)
            })
            
               
           
       } }
        return(
            <div className='container'>
                <div>
                <div id='img'>
                <img src={logo1} id='logo-1'></img>
                <h3 id='pick'>Picky Note </h3>
                </div>
                <div className='login'>
                    <h2>Sign Up!</h2>
                    <form onSubmit={(e)=> this.submitSignUp(e)} id='signUp'>
                        
                        <input type='text'  onChange={(e) => this.userTyping('name',e)} id='name' placeholder='Enter Your Name..' /><br /><br />
                        <input type='email'  onChange={(e) => this.userTyping('email',e)} id='email' placeholder='Enter a valid Email...' /><br /><br />
                        
                        <input type='password' id='password' onChange={(e) => this.userTyping('password',e)} placeholder='Enter your password..' /><br /><br />

                        <input type='password'onChange={(e) => this.userTyping('confirm_password',e)} id='confirm_password' placeholder='Confirm Password... ' /><br /><br />
                        <div id='sbtn'><Link to='/' style={{ textDecoration: 'none', color:'#0067B8', fontSize:'15px'}}>Already have an account?</Link><button id='sign'>Sign Up</button></div>
                         
                    </form>
                   
                 {this.state.signUpError?
                 <h2 id='err'>{this.state.signUpError}</h2> 
                 :
                 null
                
                
                }

                </div> 
               </div>
            </div>
        )
    }
}


export default SignUpComponent
