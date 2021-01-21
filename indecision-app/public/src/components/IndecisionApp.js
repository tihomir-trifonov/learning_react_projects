import React from "react";
import AddOption from "./AddOption.js";
import Header from "./Header.js";
import Action from "./Action.js";
import Options from "./Options.js";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
    state = {
            options: [],
            selectedOption: undefined
    }

    handleDeleteAllOptions=()=>{
        this.setState(() => ({ options:[]}))
    }

    handleClearSelectedOption=()=>{
        this.setState(() => ({ selectedOption:undefined}))
    }

    handleDeleteOptionSingular=(optionToRemove)=>{
        this.setState(
            (prevState) => ({
                options: prevState.options.filter((option) => optionToRemove !== option)
            })
        )
    }

    handlePick=()=>{
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(
            () => ({
                selectedOption: option
            })
        )
        console.log(this.state.selectedOption)
        // alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }

    handleAddOption=(option)=>{
        if (!option) {
            return "Enter valid item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "Item already in list"
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
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


    render() {
        const subTitle = "You let a PC choose for you"
        return (
            <div>
                <Header
                    subTitle={subTitle}
                />
                <div className="container">
                <Action
                    hasOptions={this.state.options.length > 1}
                    handlePick={this.handlePick}
                />
                <div  className="widget">
                <Options
                options={this.state.options}
                handleDeleteAllOptions={this.handleDeleteAllOptions}
                handleDeleteOption = {this.handleDeleteOptionSingular}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
                </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}


export {IndecisionApp as default}
