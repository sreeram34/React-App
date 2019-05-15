import React, { Component } from 'react';

class LoadMoney extends Component {
    constructor(){
        super()
        this.state={
            loadmoney: "",
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
      alert("Succesfully Loaded Money");
      console.log(this.state);
      e.preventDefault();
      history.push('/main');
      }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label><b>Load Money</b></label>
                <input type="text" placeholder="Enter Text Here" name="loadmoney"  value={this.state.loadmoney} onChange={this.handleChange}required />

              <button type="submit" className="registerbtn">Submit</button>
              </div>
            </form>            
        </div>
        )
    }

}

export default LoadMoney