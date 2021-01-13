console.log('App.js is running!');

// JSX - JavaScript XML

const appRoot = document.getElementById('app');

let shownMore = false

const shownMoreSwitch = () => {
    if (shownMore) {
        shownMore = false
        console.log(shownMore)
    } else {
        shownMore = true
        console.log(shownMore)
    }
    renderApp()
}

const renderApp = () => {

    const template = (
        <div>
            <h1>Every other newspaper title</h1>
            <button onClick={shownMoreSwitch}>{shownMore ? "Show less" : "Show more"}</button>
            { shownMore &&
                <p>
            A bunch of more info and the article
            </p>}

        
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp()