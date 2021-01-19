import React from "react";

export default class AddOption extends React.Component {
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
