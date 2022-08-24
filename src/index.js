import React from "react";
import {createRoot} from "react-dom/client"
import "./index.css"

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      Tweet
    </div>
  );
}

function Avatar() {
  return (
    <img src="https://www.gravatar.com/avatar/nothing" alt="avatar" className="avatar"/>
  )
}


const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<Tweet />)