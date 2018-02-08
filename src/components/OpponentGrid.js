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
    let singleGuess = [row, column];
    console.log("single guess - ", singleGuess)

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
    }).then((matchWasFound) => {
      console.log("found a match - ", matchWasFound);
      let copiedBoard = this.state.board.slice();
      if(matchWasFound) {
        copiedBoard[row][column] = 'red'
        } else {
        copiedBoard[row][column] = 'lightgray'
        }
        this.setState({
          board: copiedBoard,
        });
      })

      fetch(`http://localhost:8080/api/games/${currentGameID}`)
        .then((res) => {
          return res.json(); // res cannot be read, need to convert to json
        }).then((json) => {
          if (json.p1_hits >= 6) {
            console.log("You win!")
            this.setState({game_finished: true});
          } else {
            console.log(json.p1_hits);
            console.log(json.p2_hits);
        }

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
