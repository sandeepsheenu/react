import React, { Component } from 'react'

class Counter extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         count:0 
      }
    }

    increment(){

      this.setState((prevState,props)=> ({
        count:prevState.count+1
      }))
      console.log(this.state.count)
    }
    
    //     this.setState({
    //         count : this.state.count +1
    //     },()=> {console.log('Callback value',this.state.count)})
    //    // this.setstate.count=this.state.count+1  --- this method is not rengering the component we need ti use the set state method to render everytime 
    //     console.log (this.state.count)
    // }
    incrementFive(){
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      // this.increment()
      
    }
  render() {
    return (

        <div>
            <div>count -{this.state.count} </div>
            <button onClick={() => this.incrementFive()}>increment </button>
        </div>
      
    )
  }
}

export default Counter