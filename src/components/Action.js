import React from 'react';

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

export default Action;