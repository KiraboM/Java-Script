function Header(){
    return (
        <header>
            <nav>
                <img src="icon.png" width="40px"/>
            </nav>
        </header>
    )
}

function MyFooter(){
    return(
        <div>
            <small>2025 Musoke Development. All rights reserved</small>
        </div>
    )
}

function MyList(){
    return(
        <div>
            <ol>
                <li>It's fun!</li>
                <li>It's fun!</li>
                <li>It's fun!</li>
                <li>It's fun!</li>
                <li>It's fun!</li>
            </ol>
        </div>
    )
}

function Page(){
    return(
        <div>
            <Header />
            <h1>Why I'm Excited to Learn React!</h1>
            <MyList />
            <MyFooter />
        </div>

    )
}

ReactDOM.render(Page(), document.getElementById("root"))