import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Main from './Components/Main';


class App extends Component{
  constructor(){
    super()
      this.state = {
        showMe: false,
    }
  }
  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header"> 
            <div className="PageSwitcher">      
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign In</NavLink> OR
              <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</NavLink>
            </div>  
          </header>
          <body>
            <Route exact path="/" component={SignIn}></Route>
            <Route path="/sign-up" component={SignUp}></Route>  
            <Route path="/main" component={Main}>
            {
              this.state.showMe ?
              <Main />
              :
              null
            }
            
            </Route>    
          </body>
        </div>    
      </Router>    
    );
  }  
}

export default App;
