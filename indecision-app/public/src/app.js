console.log('App.js is running!');

// JSX - JavaScript XML
const template =(
    <div>
        <h1>This is JSX from app.js! aaaand changes</h1>
        <p>More info</p>
            <ol>
                <li> a</li>
                <li> b</li>
                <li> c</li>
            </ol>

    </div>
);

let count = 0

const addOne = () => {
    count++
    console.log("+1")
    renderCounterApp()
}
const subOne =  () => {
    count--
    console.log("-1")
    renderCounterApp()
}
const resetBtn = () => {
    count = 0
    console.log("Reset")
    renderCounterApp()
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={subOne}>-1</button>
            <button onClick={resetBtn}>RESET</button>
            <button onClick={addOne}>+1</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
};

renderCounterApp()