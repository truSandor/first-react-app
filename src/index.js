import React from 'react'
import ReactDOM from 'react-dom/client'

/* const element = document.createElement("h1")
element.innerText = "Hello, everyone!"
root.appendChild(element) */ // this works, but it's not React

// ReactDOMC.render(<h1>Hello everyone!</h1>, document.getElementById("root")) // .render is deprecated on ReactDOM

const root = ReactDOM.createRoot(document.getElementById('root'))

const Img = () => <img className="nav-logo" src="react-logo.png" alt="react logo" />

const Nav = () => (
  <nav className="nav">
    <Img />
    <ul className="nav-items">
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

const Header = () => (
  <header>
    <Nav />
  </header>
)

const Footer = () => (
  <footer className="footer">
    <small>© 2023 TruSandor development. No rights reserved.</small>
  </footer>
)

const MainContent = () => (
  <div className="main-content">
    <h1>Fun facts about React</h1>
    <ol>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ol>
  </div>
)

const Page = () => (
  <div className="page">
    <Header />
    <MainContent />
    <Footer />
  </div>
)

root.render(<Page />)
