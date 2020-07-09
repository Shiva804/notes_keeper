import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import CardActions from '@material-ui/core/CardActions';
import logo from './paperclip.png';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import PaletteIcon from '@material-ui/icons/Palette';
import  ColorSelector from './colorselector/color'


function Note(props)
 {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [placement,setPlacement]= React.useState()
   // const [divcolor,setDivColor] = React.useState('blue')
    const [color,setColor] = React.useState('#FFFF88')


    const [arrowref,setArrowRef]= React.useState()
      const colors = (newPlacement)=>(event)=>
      {
        setAnchorEl(event.currentTarget);
        setPlacement(newPlacement)
        setOpen(true)
        
      }
  
       
         const classes = useStyles()

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

        const selectColor = () =>
        {

        }
      

       const handleRef = node => {
           setArrowRef(node)
       }

        
       
       const changeColor = (color) =>
       {
           setColor(color)
           setOpen(false)
           props.colors(color,props.id)
       }

      






     
        return(
            
        <div id={props.id} className={classes.card}>

       <img src = {logo} className={classes.logo}/>
        <Card className={classes.root} variant='outlined' color='blue'  >
        
        
            
          <CardHeader title ={props.title} className={classes.title} onClick={editCard} style={{backgroundColor:props.color}}/>
          
        
            <CardContent className={classes.content} onClick={editCard} style={{backgroundColor:props.color}}>
                 
                <Typography variant="h2" component="p" className={classes.Typography}>
                    {props.content}

                </Typography>

            </CardContent>
         
           <CardActions disableSpacing className={classes.action}  style={{backgroundColor:props.color}}>    
            

            <Fab color='secondary'  className={classes.fab} onClick={deleteCard} size='small'>  <DeleteOutlineRoundedIcon className={classes.del}/></Fab>
            
            <Fab color='primary' size='small' className={classes.pal} onClick={colors('bottom-start')} ref={handleRef} ><PaletteIcon/></Fab>
            
            
    <Popper open={open}  anchorEl={anchorEl} placement={placement} modifiers={{  arrow: {
           enabled: true,
           element: arrowref},flip: {enabled: false,},}} >
    
        <Paper className={classes.colors}>
        < ColorSelector color='#7AFCFF' key='1' id='1'  changeColor={changeColor}/>
        < ColorSelector color='#FF7EB9' key='2' id='2' changeColor={changeColor}/>
        < ColorSelector color='#FFFF88' key='3' id='3' changeColor={changeColor}/>
        < ColorSelector color='#9678D3' key='4' id='4' changeColor={changeColor}/>
        < ColorSelector color='#2ACE82' key='5' id='5' changeColor={changeColor}/>
        < ColorSelector color='#F24E4E' key='6' id='6' changeColor={changeColor}/>
        < ColorSelector color='#F3D5BD' key='7' id='7' changeColor={changeColor}/>
        < ColorSelector color='#FF9A54' key='8' id='8'  changeColor={changeColor}/>




       </Paper>
     
 

        </Popper>
    
           </CardActions>

        </Card>
        </div>
 
    )
     
}


export default Note