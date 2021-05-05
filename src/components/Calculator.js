import React, {useState} from 'react'

const Calculator = props =>{

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [option, setOption] = useState('+')
  const res = parseFloat(props.result)
  const fixedRes = res % 1 === 0 ?  res : res.toFixed(3)
  
  return(
    <div>
      <h1>Условие:</h1>
      <p>Дробные числа указать через "."</p>
      <input placeholder='Введите цифру' onChange={e=>setNum1(e.target.value)}/> 
              <select onChange={e=>setOption(e.target.value)}> 
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>  
              </select>
            <input placeholder='Введите цифру' onChange={e=>setNum2(e.target.value)}/>
            <button onClick={()=>{props.getValue(num1,num2,option)}}>Go</button>
            {props.result ? <h3>Ответ: {fixedRes} </h3> : null}
    </div>
  )
}

export default Calculator