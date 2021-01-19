import React from "react";
import AddOption from "./AddOption.js";
import Header from "./Header.js";
import Action from "./Action.js";
import Options from "./Options.js";

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


export {IndecisionApp as default}
