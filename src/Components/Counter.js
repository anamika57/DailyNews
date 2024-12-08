import React, { Component } from 'react'

export default class Counter extends Component {
     constructor(props){
        super(props);
            this.state={
                 count : 0 
            }


        }
        increment=(props)=>{
            this.setState({
                count:this.state.count+1
            });
        };
     
    render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className='btn btn-sm btn-primary' onClick={this.increment}>Click me</button>
      </div>
    )
  }
}
