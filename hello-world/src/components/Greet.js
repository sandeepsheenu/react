import react from'react'

// function Greet(){
//     return<h1>heloo sandeep</h1>
// }

// const Greet = (props)=>{ 
// console.log(props)

// return  <div><h1>heloo {props.name} aka{props.heroname}</h1> 
// {props.children}</div>
// }
// export default Greet;

const Greet = ({name,heroname})=>{ 
   // console.log(props)
    
    return  <div><h1>heloo {name} aka{heroname}</h1> 
    </div>
    }
    export default Greet;