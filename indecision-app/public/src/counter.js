class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinOne = this.handleMinOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : props.count
        };
    }

    componentDidMount(){
        try {
            if (localStorage.getItem("count")){
                const countSaved = parseInt(localStorage.getItem("count"), 10)
                if (countSaved !== isNaN) {
                    this.setState(()=>({count:countSaved}))
                }
            }
        } catch  (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.count !== prevState.count){
        localStorage.setItem("count", this.state.count)
        }
    }


    render() {
        return (
            <div>
                <h1>Count:  {this.state.count}</h1>
                <button onClick={this.handleMinOne}>-1</button>
                <button onClick={this.handleReset}>RESET</button>
                <button onClick={this.handleAddOne}>+1</button>
            </div>
        );
    }

    handleAddOne(){
        this.setState(
            (prevState) => {
               return{
                   count: prevState.count + 1
               } 
            }
        )
    }
    handleMinOne(){
        this.setState(
            (prevState) => {
               return{
                   count: prevState.count - 1
               } 
            }
        )
    }
    handleReset(){
        this.setState(
            () => {
               return{
                   count: 0
               } 
            }
        )
    }
}

Counter.defaultProps = {
    count:0
}

ReactDOM.render(<Counter />, document.getElementById('app'));


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