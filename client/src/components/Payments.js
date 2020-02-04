import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
    render() {
        

        return (
            
            <StripeCheckout
             amount={500}
             token={token => this.props.handleToken(token)}
             stripeKey={process.env.REACT_APP_STRIPE_KEY}
             name="Online Ödeme Sistemi"
             description="Test Moddur, No örn:42424242**"
            >
             <Link to={""} className="class-nav-fnt class-nav-fnt2">Add Credits</Link>
             </StripeCheckout>
        );
    }
}

export default connect(null,actions)(Payments);