import React from 'react';
import './App.css';
import ResourceTable from './components/ResourceTable';
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ProjectTable from './components/ProjectTable';
import NavBar from './components/NavBar';
import SkillTable from './components/SkillTable';
import TimeSheetPage from './components/TimeSheetPage';
function App() {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' component={RegisterForm} exact />
        <Route path="/login" component={LoginForm} />
        <Route path="/ResourceDetails" component={ResourceTable} />
        <Route path="/ProjectDetails" component={ProjectTable} />
        <Route path="/SkillDetails" component={SkillTable} />
        <Route path="/TimeSheetForm" component={TimeSheetPage} />
        <Redirect to="/" component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
