// How allow a child to communicate with its parent, becauze we know are usually a one way street.
// We fix this by passing functions like handlePick down to the children.
// That children can then call those functions which are defined and that allows us to reverse the data flow.
// Nesting components

import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: props.options
    //     };
    // }

    handleDeleteOptions = () =>  {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        // acelasi lucru ca mai sus doar ca inline
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        // set the modal (popup) instead of alert
        this.setState((prevState) => ({selectedOption: option}));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

     // life circle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options =JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
            console.log('fetching data!');
        } catch (e) {
            // do nothing at all :))
        }     
    }  
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data!');
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount!');
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/> 
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption  
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}