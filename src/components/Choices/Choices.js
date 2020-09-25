import React, { PureComponent } from 'react';

import Choice from './Choice/Choice';

class Choices extends PureComponent {
    render() {
        return this.props.choices.map((choice, index) => {
          return (
            <Choice
              desc={choice.desc}
              key={choice.id}
              descChanged={event => this.props.descChanged(event, choice.id)}
              delClicked={()=> this.props.delClicked(index)}
            />
          );
        });
    }

}

export default Choices;