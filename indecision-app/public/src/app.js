class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const storedOptions = JSON.parse(localStorage.getItem("options"))
            if (storedOptions) {
                this.setState(() => ({ options: storedOptions }))
            }
        } catch (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
        console.log("saving data")
        const json = JSON.stringify(this.state.options)
        localStorage.setItem("options" , json)
        }
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    handleDeleteAllOptions() {
        this.setState(() => ({ options:[]}))
    }

    handleDeleteOptionSingular(optionToRemove) {
        this.setState(
            (prevState) => ({
                options: prevState.options.filter((option) => optionToRemove !== option)
            })
        )
    }

    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter valid item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "Item already in list"
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
        }
    }

    render() {
        const subTitle = "You let a PC choose for you"
        return (
            <div>
                <Header
                    subTitle={subTitle}
                />
                <Action
                    hasOptions={this.state.options.length > 1}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}
                    handleDeleteOption = {this.handleDeleteOptionSingular}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

// // Header as component with state
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         )
//     }
// };


// Header as stateless funktional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: "Indecision App"
}

// // Action as class component with state
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What shoud I do
//                 </button>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What shoud I do
            </button>
        </div>)
}

// // Options as class component with state
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Options come here as a list below</p>
//                 <p>there are exactly {this.props.options.length} options to choose from</p>
//                 <ul>
//                     {this.props.options.map((opt) => <Option key={opt} optionText={opt} />)}
//                 </ul>
//                 <button onClick={this.props.handleDeleteAllOptions}>Remove all</button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <p>Options come here as a list below</p>
            <p>there are exactly {props.options.length} options to choose from</p>
            <ul>
                {props.options.map((opt) => (
                    <Option
                        key={opt}
                        optionText={opt}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))}
            </ul>
            { props.options.length === 0 && <p>Add options below to be able to make a choice</p>}
            <button onClick={props.handleDeleteAllOptions}>Remove all</button>
        </div>
    )
}

// // Option as class component with state
// class Option extends React.Component {
//     render() {
//         return (
//             <li>{this.props.optionText}</li>
//         )
//     }
// }

const Option = (props) => {

    return (
        <p>
            <li>{props.optionText}
                <button
                    onClick={(e) => { props.handleDeleteOption(props.optionText) }}
                >X</button>
            </li>
        </p>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }


    handleAddOption(e) {
        e.preventDefault();
        const newOption = e.target.elements.newOption.value.trim()
        const error = this.props.handleAddOption(newOption)
        this.setState(() => ({ error }))
        if (!error){
            e.target.elements.newOption.value = ""
        }
    }
    render() {
        return (
            <div>
                <p>Add more options here</p>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="newOption"></input>
                    <button>Add new</button>
                </form>
            </div>
        )
    }
}

/* 
    Stateless functional component
*/
// const User = (props)=>{
//     return(
//         <div>
//         <p>Name: {props.name}</p>
//         </div>
//     )
// }



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));