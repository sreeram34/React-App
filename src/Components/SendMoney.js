import React, { Component } from 'react';

class SendMoney extends Component {
    constructor(){
        super()
        this.state={
            accountno: "",
            amount:"",
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
      alert("Transfered Succesfully");
      console.log(this.state);
      e.preventDefault();
      history.push('/main');
      }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label><b>Account Number</b></label>
                <input type="text" placeholder="Enter Text Here" name="accountno"  value={this.state.accountno} onChange={this.handleChange} required />
                <label><b>Amount</b></label>
                <input type="text" placeholder="Enter Text Here" name="amount" value={this.state.amount} onChange={this.handleChange}  required />

              <button type="submit" className="registerbtn">Submit</button>
              </div>
            </form>            
        </div>
        )
    }

}

export default SendMoney