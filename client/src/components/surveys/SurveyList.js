import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
componentDidMount(){
    this.props.fetchSurveys();
}

    renderSurveys() {
        const emptyMessage = (
            <div className="row">
                <p style={{marginTop:80}}></p>
                 <h4 style={{color:'white'}}>
                You don't have a survey yet, but you can create a new one from
                the plus button below.
                </h4>

                <p style={{marginTop:100}}></p>
                <span className="sorry">
                     SORRY   
                 <i style={{paddingTop:10,paddingLeft:5}} className="medium material-icons">sentiment_dissatisfied</i> 
                 </span>
            </div>
            
            
           
        );
        
            if(this.props.surveys.length === 0){
                return(
                   emptyMessage
                );
            }
            else
                return this.props.surveys.reverse().map(survey => {
                    return (
                         <div style={{marginBottom:20,marginTop:20}} className="card grey darken-3" key={survey._id}>
                              <div className="card-content white-text">
                                 <span className="card-title">{survey.title}</span>
                                    <p>
                                        {survey.body}
                                    </p>
                                    <p className="right">
                                        Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="card-action">
                                <a>Yes: {survey.yes}</a>
                                <a>No: {survey.no}</a>
                                </div>
                            </div>
                        );
                    });
                  
        
       
    
        
    }
    

    render() {
        return(
            <div className="container">
                <div className="row">
                <h3 style={{ color: 'white'}}>Dashboard</h3>
                {this.renderSurveys()}
                </div>
        
            </div>
           
        );
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys})(SurveyList);