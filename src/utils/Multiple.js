import React from 'react'


const Mult = props =>{

  const a = props.number.num1
  const b = props.number.num2
  const arr = []
  const digit = b.toString().split('') 

  for(let i=0; i<digit.length; i++){

    const int = digit[i]
    if(!isNaN(int)){
      arr.push(int*a)
    }
  }
    
  return(
    <div className='multResult'>
      { arr.map((item, index) => {
          return (<i key={index} style={{'marginLeft': `${index*8}px`}}>{ isNaN(item) ? null : item}</i>)
      }) }
    </div>
  )
}


export default Mult