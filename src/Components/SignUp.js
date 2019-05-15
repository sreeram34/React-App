import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(){
    super()
    this.state={
      email:"",
      psw:"",
      repeatPsw:"",

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name] : value
    });
  }
  handleSubmit(e){
    const { history } = this.props;
    alert("Successfully Registered");
    console.log(this.state);
    e.preventDefault();
    history.push('/');
  }
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
              <div className="container">
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
              <hr />

              <label><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />

              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={this.handleChange} required />

              <label><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="repeatPsw" value={this.state.repeatPsw} onChange={this.handleChange} required />
              <hr />

              <button type="submit" className="registerbtn">SignUp</button>
              </div>
            
            <div className="container signin">
              <p>Already have an account? <Link exact to="/">Sign In</Link></p>
            </div>
          </form>         
        </div>
    )
}
}

export default SignUp;