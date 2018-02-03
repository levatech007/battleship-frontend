import React, { Component } from 'react';

class Grid extends Component {
  render() {
	let gameBoard = new Array()
	let gameRow = new Array(10);
	gameRow.fill(0)
	for(let i = 0; i < gameRow.length; i++) {
		gameBoard.push(gameRow)
    }
    return (
    	<div className="row">
    	<div className="col-md-6">
    	<h1>adfads</h1>
    	</div>
		  <div className="col-md-6">
		    <h2>Sink your opponent</h2>
		    <div id="your-gameboard" className="gameboard">
		        {gameBoard.map((oneRow, rowIdx) => {
		          return( <div className='row justify-content-md-center'>
		            {
		              oneRow.map((oneSquare, colIdx) => {
		                return( <div className='col-1 square' onClick={ () => this.onClick(rowIdx, colIdx) }></div> )
		              })
		            }
		            </div>)
		          })
		        }
		    </div>
		  </div>
		 </div> 
    );
  }
}

export default Grid;
