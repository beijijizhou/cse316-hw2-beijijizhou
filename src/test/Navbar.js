import React from 'react'
// import QuestionPage from './QuestionPage/QuestionPage'
function Navbar() {
  return (
    <div id="sticky">
        <div className="nav" id="nav">
          <a href='questionPage' tabIndex="1" >
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