import React, { Component } from 'react';


class SignIn extends Component {
  constructor(){
    super()
    this.state={
      email: "",
      psw:"",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked :target.value;
    let name = target.name;
    this.setState({
      [name] :value
    });
 }
 handleSubmit(e){
   const { history } = this.props;  
  alert("Login Succesfully");
  console.log(this.state);
  e.preventDefault();
  history.push('/main');
  }
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
              <div className="container">
                <label><b>EMAIL</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />

                <label><b>PASSWORD</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={this.state.psw} onChange={this.handleChange}required />
                <hr />

              <button type="submit" className="registerbtn">SignUp</button>
              </div>
            </form>            
        </div>
    )
}
}

export default SignIn;