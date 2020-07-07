import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root :{
        minWidth:'160px',
        maxWidth:'300px',
        minHeight:'10px',
        maxHeight:'fitcontent',
        marginRight:30,
        marginTop:40,
        backgroundColor:'#202124',
        color:'white',
        border:'1px white solid',
        borderRadius:'23px'
        
    },
   content:
   {
       minHeight:'fitcontent',
       maxHeight:'300px',
       overflowY:'scroll',
       

   },
  div:
  {
      border:'0.2px white solid'
  }
,

    Typography:
    {
        fontSize:'14px'
    },

    fab:
    {

   
   position:'absolute',
   fontSize:'small',
  
   

        
     },
   title:
   {
       position:'sticky',
       fontSize:'14px'
       
   },

   del:
   {
   
    //    position:'absolute',
       fontSize:'large',
       
       

   },

   action:
   {
       position:'sticky',
       minHeight:'60px',
       maxHeight:'50px',
   
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