import React from 'react';
import './index.css';

const styleArgument={fontSize:'100px',color:'red'};

class HelloCGU extends React.Component{
    constructor(props){
      super(props)
      this.state={
        counter:0
      }
      this.handleClick=this.handleClick.bind(this)
    }
    handleClick(event){
      this.setState({counter: this.state.counter+1});
      console.log(this.state);
    }
    render(){
        var text =this.state.counter;
        return (
          <h1 style={styleArgument} onClick={this.handleClick}>
          helloCGU!!你點了{text}次.
          </h1>
        );
    }
    
}
    /*const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText=event.target.innerText+"被點了"
    
};
const HelloCGU=()=>{
   return(
        <div className="App">
            <h1 style={styleArgument}onClick={changeText}>helloCGU!!</h1>
        </div>
   );
}
*/

export default HelloCGU;