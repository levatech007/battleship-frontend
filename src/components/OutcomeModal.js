import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OutcomeModal extends Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="OutcomeModalLabel">Outcome</h5>
              </div>
              <div className="modal-body">
                <h2 className="display-3">{this.props.result}</h2>
              </div>
              <div className="modal-footer">
              <Link to={ '/' } className="btn btn-outline-danger btn-lg">Start New Game</Link>
                
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default OutcomeModal;
