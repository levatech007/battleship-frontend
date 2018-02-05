import React, { Component } from 'react';

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      playerBoxesClicked: []
    }

    this.onBoxClick = this.onBoxClick.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.match.params.post_id)
  // }

  onBoxClick(row, column) {
    console.log(`Clicked row ${row}, column ${column}`)

    console.log(`[${row}, ${column}]`)

    if (row===0) {
      document.getElementsByClassName('square')[column].style.backgroundColor = "gray"; 
    }else{
    document.getElementsByClassName('square')[`${row}`+`${column}`].style.backgroundColor = "gray";
    } 
  }

  render() {

  	let gameBoard = new Array()
  	let gameRow = new Array(10);
    console.log(gameRow)
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
