import React from 'react';
import './App.css';

// Import homemade views
import LandingView from './views/LandingView';
import AboutView from './views/AboutView';
import WorkView from './views/WorkView';
import ContactView from './views/ContactView';

function App() {
  return (
    <div className="App">
      <LandingView forename="JAMES" surname="KENYON" />
      <AboutView />
      <WorkView />
      <ContactView />
    </div>
  );
}

export default App;
