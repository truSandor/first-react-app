import ReactDOM from 'react-dom/client'

/* const element = document.createElement("h1")
element.innerText = "Hello, everyone!"
root.appendChild(element) */ // this works, but it's not React

// ReactDOMC.render(<h1>Hello everyone!</h1>, document.getElementById("root")) // .render is deprecated on ReactDOM

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<h1>Hello everyone!</h1>)
