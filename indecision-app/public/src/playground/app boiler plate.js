console.log('App.js is running!');

// JSX - JavaScript XML

const appRoot = document.getElementById('app');

const renderApp = () => {

    const template = (
        <div>

        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp()
