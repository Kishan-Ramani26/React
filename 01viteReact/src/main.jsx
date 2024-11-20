import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <div>
            <h1>Custom heading !</h1>
        </div>
    )
}

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://googel.com',
//         target: '_blank',
//     },
//     children : 'click me to visit google.com'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Google</a>
)

const name = "REact"
const reactElement =  React.createElement(
    'a',
    {href : 'https://google.com'},
    'Click to Google.com ',
    name
)


const createH1 = React.createElement(
    'h1',
    {},
    'Heading Demo',
)

createRoot(document.getElementById('root'))
.render(
    // <App />
    // Myapp()
    // anotherElement
    // reactElement,
    createH1,
)
