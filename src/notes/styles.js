import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root :{
        minWidth:160,
        maxWidth:300,
        spacing:20,
        maxHeight:300,
        marginRight:30,
        marginTop:40,
        overflowY:'scroll'
        
    },
    content:
    {
        fontSize:20
    },
    title:
    {
        fontWeight:'bolder'
    }


})

export default useStyles