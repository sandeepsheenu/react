import React, { Component } from 'react'

class Counter extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         count:0 
      }
    }

    increment(){
        this.setState({
            count : this.state.count +1
        },()=> {console.log('Callback value',this.state.count)})
       // this.setstate.count=this.state.count+1  --- this method is not rengering the component we need ti use the set state method to render everytime 
        console.log (this.state.count)
    }
  render() {
    return (

        <div>
            <div>count -{this.state.count} </div>
            <button onClick={() => this.increment()}>increment </button>
        </div>
      
    )
  }
}

export default Counter