import React from 'react';
import CalculatorDisplay from "./CalculatorDisplay" //importing in the display 
import CalculatorButton from "./calculatorButton"
<components />; //importing in the buttons

class Calculator extends React.Component {
    render() {
      return(
      <div>
          <h1>My Calculator</h1>
          <CalculatorDisplay result="5"/> 
          <CalculatorButton buttonText="0"/> 
          <CalculatorButton buttonText="1"/> 
          <CalculatorButton buttonText="2"/>
          <CalculatorButton buttonText="3"/>
          <CalculatorButton buttonText="4"/>
          <CalculatorButton buttonText="5"/>
          <CalculatorButton buttonText="6"/>
          <CalculatorButton buttonText="7"/>
          <CalculatorButton buttonText="8"/>
          <CalculatorButton buttonText="9"/>    
      </div>
      )
    }
  }
  export default Calculator; //finally we export the whole calculator