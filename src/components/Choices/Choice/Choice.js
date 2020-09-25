import React, { PureComponent } from 'react';
import './Choice.css';

class Choice extends PureComponent {
    render(){
        return(
            <div className="choice">
                <input
                className="field"
                type="text"
                value={this.props.desc}
                onChange={this.props.descChanged}
                />
                <button
                className="delete"
                type="submit"
                onClick={this.props.delClicked}>
                ✖</button>
            </div>
        )
    }

}

export default Choice;