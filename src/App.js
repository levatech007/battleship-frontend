import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this)
  }

  onClick(row, column) {
    console.log("Square clicked!")
  }

  render() {
    let gameBoard = new Array()
    let gameRow = new Array(10);
    gameRow.fill(0)
    for(let i = 0; i < gameRow.length; i++) {
      gameBoard.push(gameRow)
    }

    return (
      <div className='container'>
            {
              gameBoard.map((oneRow, rowIdx) => {
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
    );
  }

}

export default App;
