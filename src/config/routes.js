import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import GamePage from '../components/GamePage.js';

export default (
  <Switch>
    <Route exact path='/' component={ HomePage }/>
    <Route path='/gamepage' component={ GamePage }/>
  </Switch>
  )