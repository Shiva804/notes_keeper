import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/styles'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import PaletteIcon from '@material-ui/icons/Palette';

const useStyles = (theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline:'none'
      
    },
    paper: {
      backgroundColor: 'white',
      outline:'none',
      border: '2px solid #000',

    
    },
    title:
    {
        width:'400px',
        height:'40px',
        fontSize:'20px',
        outline:'none',
        border:'0.5px solid white',
        borderBottom:'black solid 0.5px',
        borderTopLeftRadius: '23px',
        borderTopRightRadius: '23px',
        paddingLeft:'15px',
        backgroundColor: '#ffffffb6'

        
    
    },
    content:
    {
        
        resize: 'none',
        minHeight:'180px',
        maxHeight: '300px',
        width: '400px',
        paddingLeft: '20px',
        display: 'inline-block',
        border:'0.5px solid white',
        borderTop:'0px',
        fontSize: '20px',
        outline: 'none',
        borderBottomLeftRadius: '23px',
        borderBottomRightRadius: '23px',
        backgroundColor: '#ffffffb6'
       
                
    
    },

    button:{
        marginLeft:'300px'

    },
    back:
    {
    
        outline:'none',
    }

  });
  
class EditItem extends Component {
    constructor()
    {
        super()

        this.state = 
        {
            title:null,
            content:null,
            open:true
        }
    }

   

    render() {
  console.log(this.state)


        const {classes} = this.props;
        const handleClose = () =>
        {
            this.setState({open:false})
            this.props.close()
        }


        this.change = (name,e) =>
        {
            switch (name) {
                case 'title':
                    this.setState({title:e.target.value})
                    break;
                case 'content':
                    this.setState({content:e.target.value})
                    break;
            
                default:
                    break;
            }
        }


        this.save = () =>
        {
            handleClose()
            this.props.save(this.props.id,this.state.title,this.state.content)
        }
       

        console.log(this.state)
        return (
            <div>
         <Modal
        className={classes.modal}
        open={this.state.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.state.open}>
          <div className={classes.back}>
            <form>
            <input type='text' className={classes.title} defaultValue={this.props.title} placeholder='Title:' onChange={(e)=> this.change('title',e)}></input><br/>
            <textarea type='text' className={classes.content} defaultValue={this.props.content} placeholder='Edit your note..' onChange={(e)=>this.change('content',e)}></textarea> <br />  
            <Button variant="contained" color="primary" size="small" className={classes.button}startIcon={<SaveIcon />} onClick={()=> {this.save() }}>
              Save
             </Button>
 
            </form> 
          </div>
        </Fade>
      </Modal>
                
            </div>
        )
    }
}



export default withStyles(useStyles)(EditItem)