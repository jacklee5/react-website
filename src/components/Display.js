import { Route } from 'react-router-dom';
import React from 'react';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import UpcomingPage from './UpcomingPage';

class Display extends React.Component{
    render(){
        return (
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/upcoming" component={UpcomingPage} />
            </div>
        )
    }
}

export default Display;
