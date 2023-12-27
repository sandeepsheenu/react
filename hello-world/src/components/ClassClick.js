import React, { Component } from 'react'

 class ClassClick extends Component {
    clickhandler(){
        console.log("button is clicked from class")
    }

     
  render() {
    return (
        <div>
        <button onClick={this.clickhandler}>Click</button>
    </div>
  )
    
  }
}

export default ClassClick