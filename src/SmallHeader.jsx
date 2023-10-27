import React from "react"


const style={

    display: 'flex',
     justifyContent: 'center', 
     alignItems: 'center', 
     height: '10vh'
}



function Smallheader(){
    const t = 'T2'
var d = new Date();

    return(
        
    
    <h3 style={style}className='header'>{t} {d.getFullYear()
    + 0}</h3>)

  }


  export default Smallheader