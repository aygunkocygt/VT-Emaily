import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';


class App extends Component{
   
  componentDidMount(){
      this.props.fetchUser();
  }
  
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
           
            <Route path='/' exact component={Landing} />
           
            <div className="container">
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/surveys/new' exact component={SurveyNew} />
            </div>
           
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
