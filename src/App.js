const App = () => {
  const profiles = [
    {name: "Taro" , age: 10},
    {}
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
  name: "undefined",
  age: 0,
}

export default App;
