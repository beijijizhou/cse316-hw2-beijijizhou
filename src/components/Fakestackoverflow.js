import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import Model from "../models/model.js";
import Nav from "./nav.js";
import Data from "./data.js";
import { Context } from "./Context.js";

function Fakestackoverflow() {
  const [count, setCount] = useState(new Model());

  return (

    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default Fakestackoverflow

// export default class FakeStackOverflow extends React.Component {
//   constructor() {
//     super();
//     var temp = new Model().data;
//     this.setcontent = this.setcontent.bind(this);
//     this.nameRef=React.createRef()
//     this.state = {
//       navbar: (
//         <Nav
//           data={temp}
//           setnavbar={this.setnavbar}
//           setcontent={this.setcontent}
//         />
//       ),
//       content: (
//         <Data
//           handleTitleClick={this.handleTitleClick}
//           data={temp}
//           setcontent={this.setcontent}
//         />
//       ),
//     };
//   }
//   setcontent(newcontent) {
//     this.setState({ content: newcontent });
//   }
//   setnavbar(newnav) {
//     this.setState({ navbar: newnav });
//   }
//   test=(e)=>{
//     // console.log("123")
  
//     e.preventDefault();
//     console.log(this.nameRef.current.value)
   
    
//     console.log("123")
//   }
//   render() {
   
  
//     return (
//       <div>
//         <Context.Provider value='user'>
//         {this.state.navbar}
//         <form onSubmit={this.test}>
//         <label> email</label>
//         <input placeholder="test" ref={this.nameRef}/> 
//         <input type="submit"/>
//       </form>
//         {this.state.content}
//         </Context.Provider>
     
//       </div>
//     );
//   }
// }
