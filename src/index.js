import React from 'react'
import ReactDOM from 'react-dom/client'

/* const element = document.createElement("h1")
element.innerText = "Hello, everyone!"
root.appendChild(element) */ // this works, but it's not React

// ReactDOMC.render(<h1>Hello everyone!</h1>, document.getElementById("root")) // .render is deprecated on ReactDOM

const root = ReactDOM.createRoot(document.getElementById('root'))

const Page = () => (
  <div>
      <img src="react-logo.png" alt="react logo" width="80px" />
      <h1>Fun facts about React</h1>
      <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  </div>
)

root.render(<Page />)
