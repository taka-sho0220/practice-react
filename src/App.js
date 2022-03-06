// import React from 'react';

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// const App = () => {
//   const profiles = [
//     {name: "Taro" , age: 10},
//     {name: "test",}
//   ]
//   return (
//     <div>
//       {
//         profiles.map((profiles,index) => {
//           return <User name={profiles.name} age={profiles.age} key={index} />
//         })
//       }
//     </div>
//   )
// }

// const User = (props) => {
//   return <div>{props.name},{props.age}</div>
// }

// User.defaultProps = {
//   name: 'Taro',
//   age: 0
// }

// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
// }



const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0}
  }
  
  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>countValue : {this.state.count}</div>
        <button onClick={this.handlePlusButton}>＋</button>
        <button onClick={this.handleMinusButton}>-</button>
      </React.Fragment>
    )
  }
}


export default App;
