import React from 'react';
import PageContent from './components/PageContent'
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <PageWrapper/>
      <PageContent />
    </div>
  );
}

export default App;
