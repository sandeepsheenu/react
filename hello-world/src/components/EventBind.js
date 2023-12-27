import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'heloo'
      }
    //   this.clickhandler=this.clickhandler.bind(this)
    }

    // clickhandler(){
    //     this.setState({
    //         message:'goodbye'
            
    //     })
    // }

    clickhandler=()=>{
        this.setState({
            message:'goodbye'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
      {/* <button onClick={this.clickhandler.bind(this)}> click bind</button> */}
      {/* <button onClick={() => this.clickhandler()}> click 2</button> */}
      <button onClick={this.clickhandler}> click bind3</button>

      </div>
    )
  }
}

export default EventBind