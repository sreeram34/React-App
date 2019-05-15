import React, { Component } from 'react';


class TransactionDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id:1,
                    name:'Divya',
                    accountNumber:358998458688,
                    amount:1200,
                    status:'Pending',        
                },
                {
                    id:2,
                    name:'Vani',
                    accountNumber:3589974658688,
                    amount:12000,
                    status:'Completed', 
                },
                {
                    id:3,
                    name:'Karthikee',
                    accountNumber:358998458688,
                    amount:1300,
                    status:'Pending', 
                },
                {
                    id:4,
                    name:'Hema',
                    accountNumber:358998458688,
                    amount:1900,
                    status:'Pending', 
                },
                {
                    id:5,
                    name:'HemKumar',
                    accountNumber:358998458688,
                    amount:15000,
                    status:'Completed', 
                },
                {
                    id:6,
                    name:'Santhu',
                    accountNumber:358998458688,
                    amount:14000,
                    status:'Pending', 
                },
                {
                    id:7,
                    name:'KishoreBabu',
                    accountNumber:358998458688,
                    amount:1150,
                    status:'Pending', 
                },
                {
                    id:8,
                    name:'Manoj',
                    accountNumber:358998458688,
                    amount:1850,
                    status:'Completed', 
                },
                {
                    id:9,
                    name:'Valleti',
                    accountNumber:358998458688,
                    amount:500,
                    status:'Pending', 
                },
                {
                    id:10,
                    name:'Shiva',
                    accountNumber:358998458688,
                    amount:1000,
                    status:'Completed', 
                }
            ],
        }
    }
    render(){
        const items = this.state.items;
        console.log(items);
        return(
            <div
            className="ag-theme-balham"
            style={{ 
            height: '500px', 
            width: '100%',
            padding:'30px' }} >
                <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Account No</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                        </thead>  
                        <tbody>   
                        {items.map((item, index) => {
                             return (                      
                                <tr>
                                    <td>{item.id }</td>
                                    <td>{ item.name }</td>
                                    <td>{ item.accountNumber }</td>
                                    <td>{ item.amount }</td>
                                    <td>{ item.status}</td>
                                </tr>
                                 );
                                })}
                        </tbody>
            </table>
            </div>
        )
    }

}


export default TransactionDetails;