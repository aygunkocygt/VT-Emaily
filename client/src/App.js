import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';

const Dashboard = () => <h2>Dashboard coming be soon</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


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
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
