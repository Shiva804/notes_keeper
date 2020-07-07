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
import EditIcon from '@material-ui/icons/Edit';

function Note(props)
 {

       
         const classes = useStyles()

         const deleteCard = () => 
         {
             props.deleteItem(props.id)
         }
         

         const editCard = () =>
         {
             props.editItem(props.id,props.title,props.content)
         }
        
        return(
            
        <div id={props.id}>

        <Card className={classes.root} variant='outlined'  onClick={editCard}>
          <CardHeader title ={props.title} className={classes.title}/>
          <Divider />
            <CardContent className={classes.content}>
                
                <Typography variant="h6" component="h6" className={classes.Typography}>
                    {props.content}

                </Typography>

            </CardContent>
            <Divider/>
           <CardActions disableSpacing className={classes.action}>    
            

            <Fab color='secondary' className={classes.fab} onClick={deleteCard} size='small'>  <DeleteOutlineRoundedIcon className={classes.del}/></Fab>
            {/* <Fab color='primary' className={classes.editB} size='small'><EditIcon  className={classes.edit}/></Fab>  */}
           </CardActions>

        </Card>
        </div>
 
    )
     
}


export default Note