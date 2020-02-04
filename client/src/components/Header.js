import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  

  renderContent() {
    switch (this.props.auth) {
       case null:
         return;
       case false:
        return ( <li> <a href="/auth/google" className='class-nav-fnt class-nav-fnt2'><i className="fab fa-google fa-lg mg-rg"> </i>Sign up with Google</a></li> );
       default:
         return (
           <Fragment>
           <li>
             <Payments />
           </li>
           <li style={{margin: '0 10px', color:'#e0e0e0'}}>
             Credits: {this.props.auth.credits}
           </li>
           <li>
           <a href="/surveys" className="class-nav-fnt class-nav-fnt2">Surveys</a>
           </li>
           <li>
              <a href="/api/logout" className="class-nav-fnt class-nav-fnt2"><i className="fas fa-sign-out-alt fa-lg mg-rg"></i>Log out</a>
           </li>
           </Fragment>
         );
    };
  };


  render() {
    return (
     
      <nav className='class-bg class-shadow'>
        <div className='nav-wrapper'>
        
          <Link to={this.props.auth ?   '/surveys' : '/'  } 
          className='left brand-logo class-mglf class-nav-fnt2'
          > 
            VT Emaily
          </Link>
          
          <ul className='right hide-on-med-and-down'>
             {this.renderContent()}
          </ul>
        </div>
        
      </nav>

               
    

    );
  }
}

function mapStateToProps(state){
  return { auth : state.auth };
}

export default connect(mapStateToProps)(Header);