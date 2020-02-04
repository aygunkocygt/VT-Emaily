// SurveyField contains logic to render a single
// label and text input

import React from 'react';

export default ({ input, label, meta: { error , touched } }) => {
    return(
        <div>
            <label className="white-text">{label}</label>
            <input className="white-text" style={{marginBottom: '5px'}} {...input} />
            <div className="red-text" style={{marginBottom: '20px'}}>
             {touched && error}
            </div>
           
        </div>
    );
};