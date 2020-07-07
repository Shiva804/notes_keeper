import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root :{
        minWidth:160,
        maxWidth:300,
        minHeight:'10px',
        maxHeight:'fitcontent',
        marginRight:30,
        marginTop:40,
        
    },
   content:
   {
       minHeight:'fitcontent',
       maxHeight:'300px',
       overflowY:'scroll'

   },



    Typography:
    {
        fontSize:'20px'
    },

    fab:
    {

   
   position:'absolute'

        
     },
   title:
   {
       position:'sticky',
       
   },

   del:
   {
   
       position:'absolute',
       fontSize:'medium',
       
       

   },

   action:
   {
       position:'sticky',
       minHeight:'60px',
       maxHeight:'50px'

   },
   edit:
   {
       fontSize:'small'
   },
   editB:
   {
    position:'absolute',
    marginLeft:'60px',
    
} 

})

export default useStyles