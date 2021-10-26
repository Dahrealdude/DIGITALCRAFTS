import React from 'react';

class CalculatorDisplay extends React.Component {
    render() {
      return(
      <button>{this.props.result}</button>
      )
    }
  };
export default CalculatorDisplay;