import React from 'react';

import './components.css';

class TitleView extends React.Component {
  render() {
    return (
      <div className="TitleView">
        {this.props.text}
      </div>
    );
  }
}

export default TitleView;