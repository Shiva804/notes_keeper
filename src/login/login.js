import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import auth from "../auth";
import logo1 from '../dashboard/Layer 1.png'


const firebase = require('firebase')

class LoginComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            email:null,
            password:null,
            loginError:''
        }
    }

    render()
    {
        this.userTyping = (type,e) =>
        {
            switch (type) {
                case 'email':
                    this.setState({email: e.target.value})
                    
                    break;
                 case 'password':
                    this.setState({password: e.target.value})
                    break;
                  
                 
                    
                    
            
                default:
                    break;
            }
        }

        this.submitLogin = async e =>
        {
             e.preventDefault()
             localStorage.setItem('email',this.state.email)
             firebase
             .auth()
             .signInWithEmailAndPassword(this.state.email,this.state.password)
             .then(() => {
                

                auth.login(() => {
                    this.props.history.push("/dashboard");
                  
                 })
             }, err => {
                 this.setState({loginError : 'Invalid Credentials!'})
                
                 setTimeout(()=>{
                     window.location.reload(false)

                 },1000)
             })
        }
         
        return(
            <div id='container'>
                {/* <h1 id='nk'>Notes Keeper</h1> */}
                <div id='img'>
                <img src={logo1} id='logo-1'></img>
                <h3 >Picky Notes</h3>
                </div>
                <div id='login'>

                    <h2>Login!</h2>
                    <br />
                    <br />
                    <form onSubmit = {e => this.submitLogin(e)}>
                        <input type='email'  id='email1' placeholder='Enter your email...' onChange={e => this.userTyping('email',e)} /><br /><br/><br />
                        <input type='password' id='password1' placeholder='Enter your password...' onChange={e => this.userTyping('password',e)} /><br /><br />
                         {this.state.loginError?
                          
                            <h4>{this.state.loginError}</h4>
                            

                         
                         :
                        null}
                        <p>Don't have an account ?</p>
                       <div id='sbn'><Link to='/signup' style={{ textDecoration: 'none', color:'#0067B8', fontSize:'19px'}}>Create account!</Link> <button type='submit' id='log' > Login </button></div>
               
                    


                    </form>


                </div>
                
            </div>
        )
    }
}


export default LoginComponent