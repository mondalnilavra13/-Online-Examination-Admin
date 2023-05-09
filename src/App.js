import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import StudentPanel from './components/StudentPanel';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={<StudentPanel/>} />
        <Route path="/admin" component={<AdminPanel/>} />
      </Switch>
    </Router>
  );
}

export default App;
