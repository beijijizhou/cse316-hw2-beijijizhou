import React from 'react'

function Navbar() {
  return (
    <div id="sticky">
        <div className="nav" id="nav">
          <a routerLink='/questionPage' id="questionsDiv" tabIndex="1" >
            Questions
          </a>
          <a href='tagPage' tabIndex="1" >
            Tags
          </a>
          <h1>Fake Stack Overflow</h1>
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search..."
             
            ></input>
          </div>
        </div>
      </div>
  )
}

export default Navbar