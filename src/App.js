import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro" , age: 10},
    {name: "test",}
  ]
  return (
    <div>
      {
        profiles.map((profiles,index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>{props.name},{props.age}</div>
}

User.defaultProps = {
  name: 'Taro',
  age: 0
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
}

export default App;
