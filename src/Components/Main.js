import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TransactionDetails from './TransactionDetails';
import SendMoney from './SendMoney';
import LoadMoney from './LoadMoney';
import Dashboard from './Dashboard';

class Main extends Component {
	render(){
		return(
			<Router>
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="sidenav">
								<Link exact to="/dashboard">Dashboard</Link>
								<Link to="/send-money">Send Money</Link>
								<Link to="/transaction-details">Transaction Details</Link>
								<Link to="/load-money">Load Money</Link>
							</div>
						</div>
						<div className="col-md-9 pull-right">
							<Route exact path="/dashboard" component={Dashboard}>
							</Route>
							<Route exact path="/send-money" component={SendMoney}>
							</Route>
							<Route exact path="/transaction-details" component={TransactionDetails}>
							</Route>
							<Route exact path="/load-money" component={LoadMoney}>
							</Route>
						</div>
					</div>
				</div>
			</Router>
		)
	}
}

export default Main;