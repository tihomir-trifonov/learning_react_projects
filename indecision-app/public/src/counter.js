class Counter extends React.Component {
    constructor(props) {
        super(props);
        var count = 1;
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinOne = this.handleMinOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Count:  {this.props.count}</h1>
                <button onClick={this.handleMinOne}>-1</button>
                <button onClick={this.handleReset}>RESET</button>
                <button onClick={this.handleAddOne}>+1</button>
            </div>
        );
    }

    handleAddOne(){
        console.log("+")
    }
    handleMinOne(){
        console.log("-")
    }
    handleReset(){
        console.log("Reset")
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));


// // COUNTER

// const appRoot = document.getElementById('app');

// let count = 0

// const addOne = () => {
//     count++
//     console.log("+1")
//     renderCounterApp()
// }
// const subOne =  () => {
//     count--
//     console.log("-1")
//     renderCounterApp()
// }
// const resetBtn = () => {
//     count = 0
//     console.log("Reset")
//     renderCounterApp()
// }


// const renderCounterApp = () => {
//     const counterApp = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={subOne}>-1</button>
//             <button onClick={resetBtn}>RESET</button>
//             <button onClick={addOne}>+1</button>
//         </div>
//     );
//     ReactDOM.render(counterApp, appRoot);
// };

// renderCounterApp()