import React, { Component } from 'react';

class Grid extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Grid is here!")
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
	                return( <div className='col-1 square' onClick={ () => this.props.onBoxClick(rowIdx, colIdx) }></div> )
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
