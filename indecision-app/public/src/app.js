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
    render() {
        return (
            <div>
                <button>What shoud I do</button>
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
                {this.props.options.map((opt)=><Option key={opt} optionText={opt}/>) }
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {
    render () {
        return(
            <li key={this.props.key}>{this.props.optionText}</li>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>Code adding options here</p>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));