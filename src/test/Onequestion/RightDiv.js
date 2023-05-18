import React from 'react'

const RightDiv = (divinfo) => {
  return (
    <div className="rightDiv">
      <li>
        Asked by <span className="askedBy">{divinfo.askedBy}</span>
      </li>
      <div>
        On <span className="askedOn">{divinfo.askedOn}</span>
      </div>
      <div>
        At <span className="askedAt">{divinfo.askedAt}</span>
      </div>
    </div>
  )
}

export default RightDiv