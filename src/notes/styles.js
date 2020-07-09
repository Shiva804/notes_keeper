import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root :{
        minWidth:'160px',
        maxWidth:'300px',
        minHeight:'10px',
        maxHeight:'fitcontent',
        marginRight:30,
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
       display:'flex',
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
    
    } ,


    logo:
    {
        height:'50px',
        position:'absolute',
        marginTop:'-17px',
        zIndex:'1'
    },

    pal:
    {
        marginLeft: '50px',
    },

    colors:
    {
        height:'130px',
        width:'160px',
        border:'2px black solid',
        borderRadius:'23px'
    
    },

    close:
    {
        marginTop:'1px',
        marginLeft:'125px',
        '&:hover':{
            transform:'scale(1.2)'
        }

    },

    cc:
    {
        marginTop:'2px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
 






})

export default useStyles