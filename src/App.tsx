import * as React from 'react';
import './App.css';

import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

class App extends React.Component {
  public render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://github.com/nattapatee">
                <img src="https://avatars1.githubusercontent.com/u/40555076?s=460&v=4" alt="DEVAHOY LOGO" />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact={true} to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                <a className="navbar-item" href="https://github.com/nattapatee" target="_blank">Star on <i className="fab fa-github" /></a>
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/projects" component={Project} />
            <Route exact={true} path="/posts" component={Post} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
