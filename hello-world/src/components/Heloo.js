import React from'react'

const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Hello sandeep!</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
           { id:'heloo',ClassName:'dummyClass'},
        React.createElement('h1',null,'heloo sandeep')
    )
}


export default Hello