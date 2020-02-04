import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                 <ul className="collection grey lighten-3">
            <li className="collection-item avatar grey darken-3">
              <i className="material-icons circle white-text">assignment</i>
                <span className="title white-text underLine">{label}</span>
                 <p className="white-text padTopBot"> {formValues[name]} </p>
                 <a href="#!" className="secondary-content white-text"><i className="material-icons small">assignment_turned_in</i></a>
             </li>
             </ul>
            </div>

        );
    });

    return(
            <div style={{marginTop:30,marginBottom:50}}>
                <h5 className="header white-text">Please confirm your entries</h5>
               
                 {reviewFields}
               
               
                <button 
                className="deep-orange lighten-1 white-text btn-flat"
                onClick={onCancel}
                >
                Back
                <i className="material-icons right">reply</i>
                </button>
                <button
                 onClick={() => submitSurvey(formValues, history)}
                 className="green accent-4 btn-flat white-text right"
                 >
                    Send Survey
                    <i className="material-icons right">send</i>
                </button>
            </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));