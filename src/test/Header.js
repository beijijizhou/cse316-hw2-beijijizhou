import React, { useEffect,useState } from "react";
const Header = (props) => {
  return (
        <div id="header">
          <div>
            {props.length} {props.left} 
          </div>
          <div>
              {props.mid} 2
              </div>
          <a href="newQuestion" className="button" >
            Ask A Question{" "}
          </a>
        </div>
  
  )
}
export default Header;

