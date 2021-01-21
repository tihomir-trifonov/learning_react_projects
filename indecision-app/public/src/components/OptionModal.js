import React from "react";
import Modal from "react-modal";

const OptionModal=(props)=>(
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected option"
        closeTimeoutMS={2000}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button  className="button" onClick={props.handleClearSelectedOption}>Okayyy</button>
    </Modal>
)

export default OptionModal;