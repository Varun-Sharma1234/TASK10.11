import React  from "react";




function LargHeader(){
    var d = new Date();
    const month = d.getMonth() + 1;
    const style={
        
        color:'red'
        
        }
        if (month === 9 || month ===10 || month === 11)
        {
        style.color ='pink'
        
        }
        else if (month === 2 || month ===1 || month === 3)
        
        {
          style.color ='green'
          
          }
          else if (month === 6 || month === 4 || month === 5)
        
        {
          style.color ='orange'
          
          }

          else if (month === 7 || month === 8 || month === 9)
        
        {
          style.color ='light green'
          
          }
        
          else
          {
            style.color= 'blue'
          }
        
    return(<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
    <h1 style={style}>DevLink Market Place</h1>
  </div>
);
}








export default LargHeader