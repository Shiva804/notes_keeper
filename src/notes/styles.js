import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root :{
        minWidth:'160px',
        maxWidth:'300px',
        minHeight:'10px',
        maxHeight:'fitcontent',
        marginRight:30,
        // marginTop:,
        backgroundColor:'#202124',
        color:'white',
        border:'5px white solid',
        borderRadius:'23px',
        outline:'none'
       
        
    },
    card:{
        transition: 'transform .2s',
        outline:'none',
        '&:hover':
        {
            transform: 'scale(1.1)',
            
        }
    },

   content:
   {
       minHeight:'fitcontent',
       maxHeight:'300px',
       overflowY:'hidden',
       overflowX:'hidden',
       backgroundColor:'#FFFF88',
       cursor:'pointer',
       outline:'none'
       
       
       

   },
  div:
  {
      border:'0.2px white solid'
  }
,

    Typography:
    {
        fontSize:'17px',
        color:'black',
        outline:'none'
    },

    fab:
    {

   
   position:'absolute',
   fontSize:'small',
  
   

        
     },
   title:
   {
       position:'sticky',
       fontSize:'14px',
       backgroundColor:'#FFFF88',
       color:'black',
       cursor:'pointer',
       outline:'none'
       
   },

   del:
   {
   
   
       fontSize:'large',
       
       

   },

   action:
   {
       position:'sticky',
       minHeight:'60px',
       maxHeight:'50px',
       backgroundColor:'#FFFF88'
   
   },
   edit:
   {
       fontSize:'small'
   },
   editB:
   {
    position:'absolute',
    marginLeft:'60px',
    
    } ,
    logo:
    {
        height:'50px',
        position:'absolute',
        marginTop:'-17px',
        zIndex:'1'
    }


})

export default useStyles