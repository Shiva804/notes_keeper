import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
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
               firebase
               .auth()
               .createUserWithEmailAndPassword(this.state.email,this.state.password)
               .then(authRes =>{
                   const userObj = {
                       email: authRes.user.email,
                       title:[],
                       notes:[]

                   }
                   firebase
                   .firestore()
                   .collection('users')
                   .doc(this.state.email)
                   .set(userObj)
                   .then(()=>{
                       this.props.history.push('/')
                   },dbError => {
                       this.setState({signUpError:'Failed to add User'})
                   })
                },authError => {
                    this.setState({signUpError:'Failed to add User'})
                   })
               
               
           }
       } 
        return(
            <div className='container'>
                <h1 id='nk'>Notes Keeper</h1>
                <div className='login'>
                    <h2>Sign Up!</h2>
                    <form onSubmit={(e)=> this.submitSignUp(e)} id='signUp'>
                        
                        <input type='email'  onChange={(e) => this.userTyping('email',e)} id='email' placeholder='Enter Your Email...' /><br /><br />
                        
                        <input type='password' id='password' onChange={(e) => this.userTyping('password',e)} placeholder='Enter Your Password...' /><br /><br />

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
        )
    }
}


export default SignUpComponent
