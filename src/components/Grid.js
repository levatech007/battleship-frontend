import React, { Component } from 'react';

class Grid extends Component {
  constructor() {
    super();
    this.onBoxClick = this.onBoxClick.bind(this);
  }

  onBoxClick(row, column) {
    console.log(`Clicked row ${row}, column ${column}`)
  }

  render() {

  	let gameBoard = new Array()
  	let gameRow = new Array(10);
  	gameRow.fill(0)
  	for(let i = 0; i < gameRow.length; i++) {
  		gameBoard.push(gameRow)
    }

    return (
	    <div id="your-gameboard" className="gameboard">
	        {gameBoard.map((oneRow, rowIdx) => {
	          return( <div className='row justify-content-md-center'>
	            {
	              oneRow.map((oneSquare, colIdx) => {
	                return( <div className='col-1 square' onClick={ () => this.onBoxClick(rowIdx, colIdx) }></div> )
	              })
	            }
	            </div>)
	          })
	        }
	    </div>
    );
  }
}

export default Grid;
