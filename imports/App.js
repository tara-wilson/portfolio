import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import { createContainer } from 'meteor/react-meteor-data';


class App extends Component {
  constructor(props) {
    super(props);


    this.state = {

    };
  }


  render() {
    return ( 
    <div className="contain">
      <div className="row">
      <h1>Tara Wilson</h1>
      <p>I am a Mobile Developer. Here is some stuff I''ve created.</p>
      </div>
      <div className="row">
          <h2>Musique Live iOS app</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <video className="video" autoplay="autoplay" loop="loop" width="380" height="670">
          <source src="source.mp4" type="video/mp4" /></video>
      <div className="row">
          <h2>Musique Live android app</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="row">
          <h2>Augmented Reality Game</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="row">
          <h2>A project to turn my lights on and off</h2>
          <p>wherein I learned that it is really not that hard to turn on and off the lights yourself...</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="row">
          <h2>An e-book activity app</h2>
          <p>wherein I learned that it is really not that hard to turn on and off the lights yourself...</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="row">
          <h2>Smoochie Poochies</h2>
          <p>wherein I learned that it is really not that hard to turn on and off the lights yourself...</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <p className="subhead">Here is some stuff I''ve worked on as an employee.</p>
      <div className="row">
          <h2>Buzzfeed</h2>
          <p>wherein I learned that it is really not that hard to turn on and off the lights yourself...</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="row">
          <h2>QuizChat</h2>
          <p>wherein I learned that it is really not that hard to turn on and off the lights yourself...</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="row">
          <h2>Hutch</h2>
          <p>wherein I learned that it is really not that hard to turn on and off the lights yourself...</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
    )
  }
}

App.propTypes = {
    history: PropTypes.object,
};

export default createContainer(() => {
  return {
  }
}, App);

