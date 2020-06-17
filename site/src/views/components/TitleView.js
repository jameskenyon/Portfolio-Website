import React from 'react';

import './components.css';

class TitleView extends React.Component {
  render() {
    return (
      <div className="TitleView" id={this.props.color}>
        {this.props.text}
      </div>
    );
  }
}

export default TitleView;