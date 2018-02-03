import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      allGuesses: ["A1", "A3", "B3", "C3", "B1", "C1", "D6", "E6", "D7", "G7", "A2", "B2"]
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(row, column) {
    console.log(`Clicked row ${row}, column ${column}`)
  }

  render() {
 

    return (
      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Stay out of hot water!</h1>
          </div>
        </div> 
        <Grid />

         

        <div className="row">
          <div className="col-md-6">
            <h2>High Scores</h2>
            <hr/>
              <ul>
                <h4>KJE - 850</h4>
                <h4>SJD - 740</h4>
                <h4>DBP - 720</h4>
                <h4>AML - 690</h4>
              </ul>
          </div>

          <div className="col-md-6">
            <h2>Guesses</h2>
            <hr/>
            <div className="row">
              {this.state.allGuesses.map(eachGuess => {
                return <div className="col-md-4">
                  <h3>{eachGuess}</h3>
                  </div>
                })
              }
            </div>

          </div>
        </div>
        <Link to={ '/' } className="btn btn-outline-info btn-lg">Return Home</Link>
      </div>
      )
  }
}

export default GamePage
