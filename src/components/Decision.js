import React from 'react'
import Mult from '../utils/Multiple'
import Divide from '../utils/Divide'

const Decision = props => {

  const res = parseFloat(props.data.res)
  const fixedRes = res % 1 === 0 ?  res : res.toFixed(3)
  const num1 = parseFloat(props.data.num1)
  const num2 = parseFloat(props.data.num2)
  


  return(
    <div className='operation_box'>
      <h1>Решение:</h1>
      
        {props.data.option === '/' 
        ?  <Divide data={props.data}/>
        : <div className='numbers'>
            <p>{num1}</p>
            <span style={{
              'position': 'absolute',
              'top': '10px',
              'left': '-9px'}}>{props.data.option}</span>
            <p style={{'borderBottom':'1px solid black'}}>{num2}</p>
            {props.data.option === '*' && <Mult number={props.data}/>}
            {props.data.option === '*' ?  <p style={{'borderTop':'1px solid black'}}>{fixedRes}</p> : <p>{fixedRes}</p>}
          </div>}   
    </div>
  )

}

export default Decision