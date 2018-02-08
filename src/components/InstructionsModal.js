import React, { Component } from 'react';

class InstructionsModal extends Component {
  constructor() {
    super();
  }

  render() {

    return (
        <div className="modal fade show" style={{display: 'block'}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="InstructionsModalLabel">Instructions</h5>
                <button type="button" className="close" onClick={ this.props.close }>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul id="instructions">
                  <p>Place your ships by clicking squares on your gameboard.</p> 
                  <p>After you have placed your ships, click the 'Start Game' button.</p> 
                  <p>Click the enemy grid to make a guess.</p> 
                  <p>After each guess, click the button below the grids to allow the opponent to guess your ship locations.</p> 
                  <p>The first player to make 17 hits wins the game.</p> 
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={ this.props.close }>Close</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default InstructionsModal;
