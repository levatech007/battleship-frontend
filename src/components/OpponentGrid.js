import React, { Component } from 'react';

class OpponentGrid extends Component {
  constructor() {
    super();
    this.state = {
      board : [[]],
      opponentBoxesClicked: [],
      myGuesses: [],
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
    let singleGuess = [row, column];
    this.setState({
      myGuesses: this.state.myGuesses.concat([singleGuess])
    })
    console.log("single guess - ", singleGuess)
    console.log("all guesses - ", this.state.myGuesses);
    console.log("opponent page - ", this.props.gameIdFromGamePage)

    let currentGameID = this.props.gameIdFromGamePage;
    fetch(`http://localhost:8080/api/games/${currentGameID}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        p1_guesses: singleGuess
      })
    }).then((res) => {
      return res.json();
    }).then((updatedPlayerGuess) => {
      console.log("found a match - ", updatedPlayerGuess);
      // if(updatedPlayerGuess === true) {
      //   console.log(this.state.isBoxRed)
      //   this.setState({
      //     isBoxRed: true
      //   });
      //   console.log(this.state.isBoxRed)
      //   // this.setState({
      //   //   isBoxRed: false
      //   // })
      })

    
    // console.log(`Clicked row ${row}, column ${column}`);
    let copiedBoard = this.state.board.slice();
    if(this.props.turnRed) {
      copiedBoard[row][column] = 'red'
    } else {
      copiedBoard[row][column] = 'gray'
    }
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
                  return( <div key={ colIdx } className='col-1 square' style={ {backgroundColor: oneSquare }} onClick={ () => {this.onBoxClick(rowIdx, colIdx); this.props.allOpponentBoxClicks(rowIdx, colIdx)} }></div> )
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
