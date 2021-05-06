import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage'

class App extends  React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title:"hello",
      count:0
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     title:"welcome"
  //   })

  // }

  render() {
  return (
    <div className="App">
      <h1>{this.state.title} {this.state.count}</h1>
      <button onClick={()=>{
        this.setState({
          count:this.state.count+1
        })
      }}>button</button>

    </div>
  );
}
}

function AppFun(props) {
  const {appTitle} = props;
  const [title,setTitle] = React.useState("hello")
  const [count,setCount] = React.useState(0);

  React.useEffect(()=>{
    setTitle("function ")
  },[])


  return (
    <div className="App">
      <h1>{title} {count}</h1>
      <button onClick={()=>{
       setCount(count+1)
      }}>button</button>
      <App />
    </div>
  );

}

export default AppFun;
