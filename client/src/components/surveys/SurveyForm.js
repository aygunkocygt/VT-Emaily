// Surveyform shows a from for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';



class SurveyForm extends Component {
    renderFields(){
       return _.map(formFields, ({ label, name }) => {
        return( 
        <Field
            key={name}
            component={SurveyField}
            type="text"
            label={label}
            name={name}
         />
         );
       });
    }

    render() {
        return(
            <div style={{marginTop:30, marginBottom:50}}>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red accent-2 btn waves-effect  waves-ripple white-text">
                        Cancel
                        <i className="material-icons right">clear</i>
                    </Link>
                    <button type="submit" className="blue accent-2 btn waves-effect waves-ripple white-text right">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    if(!values.title) {
        errors.title = 'You must provide a title';
    }
    if(!values.subject) {
        errors.subject = 'You must provide a subject';
    }
    if(!values.body) {
        errors.body = 'You must provide a body';
    }
    

    

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);