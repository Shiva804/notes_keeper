import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import useStyles from './styles'



function Note(props)
 {

    
       
         const classes = useStyles()
         
         
        return(

        <Card className={classes.root} >
            <CardContent >
                <Typography component="h5" variant="h5" className={classes.title} >
                    {props.title}

                </Typography>
                <Divider />

                <Typography variant="h6" component="h6" className={classes.content}>
                    {props.content}

                </Typography>
            </CardContent>

        </Card>

    
    )
     
}


export default Note