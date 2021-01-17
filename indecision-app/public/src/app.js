// const obj = {
//     name: "Vokoko----------------------------------------------",
//     getName() {
//         return this.name;
//     }
// }

// const objName = obj.getName.bind({ name: "Andrew" });


// console.log(objName());



class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }

    handleDeleteAllOptions() {
        this.setState(
            () => {
                return { options: [] }
            }
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
            this.setState(
                (prevState) => {
                    return {
                        options: prevState.options.concat([option])
                    }
                }
            )
        }
    }

    render() {
        const title = "Indecision App!"
        const subTitle = "You let a PC choose for you"
        return (
            <div>
                <Header
                    title={title}
                    subTitle={subTitle}
                />
                <Action
                    hasOptions={this.state.options.length > 1}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What shoud I do
                </button>
            </div>
        )
    }
}


class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options come here as a list below</p>
                <p>there are exactly {this.props.options.length} options to choose from</p>
                <ul>
                    {this.props.options.map((opt) => <Option key={opt} optionText={opt} />)}
                </ul>
                <button onClick={this.props.handleDeleteAllOptions}>Remove all</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state= {
            error : undefined
        }
    }


    handleAddOption(e) {
        e.preventDefault();

        const newOption = e.target.elements.newOption.value.trim()
        const error = this.props.handleAddOption(newOption)

        this.setState(()=>{return{error:error}})

    }
    render() {
        return (
            <div>
                <p>Code adding options here</p>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="newOption"></input>
                    <button>Add new</button>
                </form>
            </div>
        )
    }
}





ReactDOM.render(<IndecisionApp />, document.getElementById('app'));