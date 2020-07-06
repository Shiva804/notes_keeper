import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useStyles from './styles'
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import CardActions from '@material-ui/core/CardActions';

function Note(props)
 {

       
         const classes = useStyles()

         const deleteCard = () => 
         {
             props.deleteItem(props.id)
         }
         
        
        return(
            
        <div id={props.id}>

        <Card className={classes.root} variant='outlined' >
          <CardHeader title ={props.title} className={classes.title}/>
          <Divider />
            <CardContent className={classes.content}>
                
                <Typography variant="h6" component="h6" className={classes.Typography}>
                    {props.content}

                </Typography>

            </CardContent>
           <CardActions disableSpacing className={classes.action}>      

            <Fab color='secondary' className={classes.fab} onClick={deleteCard}>  <DeleteOutlineRoundedIcon className={classes.del}/></Fab>

           </CardActions>

        </Card>
        </div>
 
    )
     
}


export default Note