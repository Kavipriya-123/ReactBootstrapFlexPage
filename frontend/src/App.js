import {BrowserRouter,Routes,Route} from "react-router-dom";
import {act, Component} from "react";
import Home from "./components/Home";
import ActiveItemContext from "./ActiveItemContext";
import './App.css';

class App extends Component{
  state={activeState:"Home"};

  changeActiveState=(name)=>{
    this.setState({activeState:name});
  }

  render(){
    const {activeState}=this.state;
    return(<ActiveItemContext.Provider value={{activeState,changeActiveState:this.changeActiveState}}>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ActiveItemContext.Provider>
    )
  }
}

export default App;
