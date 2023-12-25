import React,{ Component } from 'react'

class Message  extends Component{
    constructor(){
        super()
        this.state={
              message: 'welcome visitor'
        }
    }

      changeMessage(){
        this.setState({message:'thankyou for subscribe'})
      }

    render(){
        return( <div>
            
            <button onClick={() => this.changeMessage()}>subscribe</button> <h1>{this.state.message}</h1>
        </div>)

    }

}

export default  Message