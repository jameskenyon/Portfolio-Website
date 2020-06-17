import React from 'react';

import './views.css';
import './WorkView.css';
import './components/TitleView';
import TitleView from './components/TitleView';

class WorkView extends React.Component {
  render() {
    return (
      <div className="View WorkView">

        <div className="ContainerView" id="WorkContainer">

          <TitleView text="WORK" color="white" />

        </div>

      </div>
    );
  }
}

export default WorkView;