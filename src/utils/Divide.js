import React from 'react'

const Divide = props => {
  
  
  const num1 = parseFloat(props.data.num1)
  const num2 = parseFloat(props.data.num2)
  const fixedRes = props.data.res % 1 === 0 ?  props.data.res.toString().split('') : props.data.res.toFixed(3).toString().split('')
  const arr = [] 
  

  for(let i=0; i<fixedRes.length; i++){
    const int = fixedRes[i]


    if(int!==0){
      const first = int * num2 

      arr.push(first)
    }
    
    console.log(props.data.res)
  }
  
  return(
    <div className='divResult'>
      <div >
        
        <span>{num1}</span>
        {arr.map((item, index)=>{
          return(
            <div key={index}>
              <span style={{'borderBottom': '1px solid black'}}>{ isNaN(item) ? null : item}</span>
              {}
            </div>
          )
        })}
        
        
        
      </div>
      <p>
          <span>{num2}</span>
          <span style={{'borderTop': '1px solid black'}}>{fixedRes}</span>
        </p>
    </div>
  )

}

export default Divide