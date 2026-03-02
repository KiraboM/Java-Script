/* const element = <h1 className="header">This is JSX</h1>
console.log(element)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element) */

const nav = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById("root"))

const myList = (
    <div>
        <h1>List</h1>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    </div>
)
ReactDOM.render(page, document.getElementById("root"))
document.getElementById("root").append(JSON.stringify(myList))