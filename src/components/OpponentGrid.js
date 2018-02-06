import React, { Component } from 'react';

class OpponentGrid extends Component {
  constructor() {
    super();
    this.state = {
      board : [[]],
    }
    this.onBoxClick = this.onBoxClick.bind(this);
  }

  componentDidMount() {
    console.log("Opponent Grid is here!");
  }

  componentWillMount() {
    let gameBoard = new Array()
    for(let i = 0; i < 10; i++) {
      let gameRow = new Array(10);
      gameRow.fill(0)
      gameBoard.push(gameRow) 
    }
    this.setState({
      board: gameBoard,
    })
  }

  onBoxClick(row, column) {
    console.log(`Clicked row ${row}, column ${column}`);
    let copiedBoard = this.state.board.slice();
    copiedBoard[row][column] = 'gray'
    this.setState({
      board: copiedBoard,
    });
  }

  render() {
    return (
      <div id="your-gameboard" className="gameboard">
          {this.state.board.map((oneRow, rowIdx) => {
            return( <div key={ rowIdx } className='row justify-content-md-center'>
              {
                oneRow.map((oneSquare, colIdx) => {
                  return( <div key={ colIdx } className='col-1 square' style={ {backgroundColor: oneSquare }} onClick={ () => {this.onBoxClick(rowIdx, colIdx); this.props.sendOpponentBoxClick(rowIdx, colIdx)} }></div> )
                })
              }
              </div>)
            })
          }
      </div>
    );
  }
}

export default OpponentGrid
