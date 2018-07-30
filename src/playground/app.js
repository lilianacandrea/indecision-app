// import './utils.js';

// in this way we grab a default export
// import subtract, {square, add} from './utils.js';

// console.log('app.js is running!');
// console.log(square(12));
// console.log(add(100, 23));
// console.log(subtract(100, 23));

// in this way we grab a name export
// import {isAdult, canDrink} from './person.js';

// import isSenior, {isAdult, canDrink} from './person.js';

// console.log('app.js is running!');
// console.log(isAdult(12));
// console.log(canDrink(23));
// console.log(isSenior(23));

// install -> import NPM modules -> use
// import validator from 'validator';
// import React from 'react';
// import ReactDOM from 'react-dom';

// const template = <p>This is JSX form Webpack</p>;
// ReactDOM.render(template, document.getElementById('app'));



// How allow a child to communicate with its parent, becauze we know are usually a one way street.
// We fix this by passing functions like handlePick down to the children.
// That children can then call those functions which are defined and that allows us to reverse the data flow.
// Nesting components
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

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

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        // acelasi lucru ca mai sus doar ca inline
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
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
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

//stateless funtional component
const Action = (props) => {
    return (
        <div>
         <button 
             onClick={props.handlePick}
             disabled={!props.hasOptions}
         >
             What should I do?
         </button>
        </div> 
     );
};

 // VS. Classes
// class Action extends React.Component {
//     render() {
//         return (
//            <div>
//             <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//             >
//                 What should I do?
//             </button>
//            </div> 
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        // clear the input if there was no error
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



 //  ES6 class properties example
// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //-------------------- ES6 properties

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}`; 
//     }
// }

// const newSyntax = new NewSyntax;
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());

