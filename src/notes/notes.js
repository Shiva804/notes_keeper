import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import CardActions from '@material-ui/core/CardActions';
import logo from './paperclip.png';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import PaletteIcon from '@material-ui/icons/Palette';
import  ColorSelector from './colorselector/color'
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import './notes.css'

function Note(props)
 {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [placement,setPlacement]= React.useState()
    const [arrowref,setArrowRef]= React.useState()
      const colors = (newPlacement)=>(event)=>
      {
        setAnchorEl(event.currentTarget);
        setPlacement(newPlacement)
        setOpen(true)
        
      }


         const deleteCard = () => 
         {
             props.deleteItem(props.id)
         }
         

         const editCard = () =>
         {
             props.editItem(props.id,props.title,props.content)
         }


         const handleClose = () =>
         {
             setOpen(false)
         }


       const handleRef = node => {
           setArrowRef(node)
       }

        
       
       const changeColor = (color) =>
       {
           
           setOpen(false)
           props.colors(color,props.id)
       }

        return(
            
        <div id={props.id} id='cards'>

       <img src = {logo} id='logos'/>
        <Card id='roots' variant='outlined' color='blue'>
        
        
            
          <CardHeader title ={props.title} id='titles' onClick={editCard} style={{backgroundColor:props.color}}/>
          
        
            <CardContent id='contents' onClick={editCard} style={{backgroundColor:props.color}}>
                 
                <Typography variant="h2" component="p" id='Typographyy'>
                    {props.content}

                </Typography>

            </CardContent>
         
           <CardActions disableSpacing id='actions'  style={{backgroundColor:props.color}}>    
            

            <Fab color='secondary'  id='fabs' onClick={deleteCard} size='small'>  <DeleteOutlineRoundedIcon id='dels'/></Fab>
            
            <Fab color='primary' size='small' id='pals' onClick={colors('bottom-start')} ref={handleRef} ><PaletteIcon/></Fab>
            
            
    <Popper open={open}  anchorEl={anchorEl} placement={placement} modifiers={{  arrow: {
           enabled: true,
           element: arrowref},flip: {enabled: true}, preventOverflow: {
            enabled: true,
            boundariesElement: 'scrollParent',
          },}} >
    
        <Paper id='colorss'>
        <CloseSharpIcon id='closes' onClick={handleClose}/>
        <div id='cc'>
        < ColorSelector color='#7AFCFF' key='1' id='1'  changeColor={changeColor}/>
        < ColorSelector color='#FF7EB9' key='2' id='2' changeColor={changeColor}/>
        < ColorSelector color='#FFFF88' key='3' id='3' changeColor={changeColor}/>
        < ColorSelector color='#9678D3' key='4' id='4' changeColor={changeColor}/>
        < ColorSelector color='#2ACE82' key='5' id='5' changeColor={changeColor}/>
        < ColorSelector color='#F24E4E' key='6' id='6' changeColor={changeColor}/>
        < ColorSelector color='#F3D5BD' key='7' id='7' changeColor={changeColor}/>
        < ColorSelector color='#FF9A54' key='8' id='8'  changeColor={changeColor}/>
        </div>




       </Paper>
     
 

        </Popper>
    
           </CardActions>

        </Card>
        </div>
 
    )
     
}


export default Note