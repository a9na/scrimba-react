import React from "react"
import ReactDOM from "react-dom"



/*function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}



ReactDOM.render(

<div>
    <MainContent />
</div>, document.getElementById("root")


)
*/


/* 
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

console.log(h1)
*/

/*
//JSX

const page = (

<div>
    <h1>This is JSX</h1>
    <p>This is a paragraph</p>
</div> 
)
ReactDOM.render(page, document.getElementById("root"))
*/

/*
const navbar = (

<nav>
    <h1>Bob's bistro</h1>
    <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>

)

ReactDOM.render(navbar, document.getElementById("root"))
*/


const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I Love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

/*
document.getElementById("root").append(JSON.stringify(page))
*/

ReactDOM.render(page, getElementById("root"))