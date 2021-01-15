const obj = {
    name: "Vokoko----------------------------------------------",
    getName(){
        return this.name;
    }
}

const objName = obj.getName.bind({name:"Andrew"});


console.log(objName());



class IndecisionApp extends React.Component {
    render() {
        const title= "Indecision App!"
        const subTitle= "You let a PC choose for you"
        const options = ["thing one", "thing two", "threeeee"]
        
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
    handlePick(){
        alert("What to do Button pressed");
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What shoud I do</button>
            </div>
        )
    }
}


class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                <p>Options come here as a list below</p>
                <p>there are exactly {this.props.options.length} options to choose from</p>
                <ul>
                    {this.props.options.map((opt) => <Option key={opt} optionText={opt} />)}
                </ul>
                <button onClick={this.handleRemoveAll}>Remove all</button>
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
    handleAddOption(e) {
        e.preventDefault();

        const newOption = e.target.elements.newOption.value.trim()

        if (newOption) {
            alert(newOption)
        }

    }
    render() {
        return (
            <div>
                <p>Code adding options here</p>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="newOption"></input>
                    <button>Add new</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));