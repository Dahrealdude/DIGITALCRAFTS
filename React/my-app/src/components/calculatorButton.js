import React from 'react';

class CalculatorButton extends React.Component {
    render() {
      return(
      <div>
          <button>{this.props.buttonText}</button>
      </div>   
      )
    };

}
export default CalculatorButton;