import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption=(e)=>{
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="newOption"></input>
                    <button className="button">Add new</button>
                </form>
            </div>
        )
    }
}
