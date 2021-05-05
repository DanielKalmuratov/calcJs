import {Component} from 'react'
import Calculator from './components/Calculator'
import Decision from './components/Decision'




class App extends Component {

  state = {}

  getValue = (num1, num2, option)=>{

    let a = parseFloat(num1)
    let b = parseFloat(num2)
    let res = null

    switch(option){
      case '+':
        res = a + b
        break;
      case '-':
        res = a - b
        break;
      case '/':
        res = a / b
        break;
      case '*':
        res = a * b
        break;
      default:
        console.log('Нет данных')
    }

    const data = {
      num1: num1,
      num2: num2,
      option: option,
      res: res
    }

    this.setState(data)
    
  }

  
 

  

  render(){
    
    return (
        <div className='app'>
            <Calculator getValue={this.getValue} result={this.state.res}/>
            {this.state.num1 ? <Decision data={this.state}/> : null }
            
        </div>
      )
  }
 
}

export default App;
