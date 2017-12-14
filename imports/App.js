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
    <div>
    <div className="outside">
      <div className="row">
        <h1>Tara Wilson</h1>
        <p>I am a Mobile Developer. Here is some stuff I''ve created.</p>
      </div>
      <div className="row">
          <p><a href="#vid1">Musique Live iOS app</a></p>
      </div>
      <div className="row">
          <p><a href="#vid7">Musique Live android app</a></p>
      </div>
      <div className="row">
          <p><a href="#vid2">Augmented Reality Game</a></p>
      </div>
      <div className="row">
          <p><a href="#vid3">A project to turn my lights on and off</a></p>
      </div>
       <div className="row">
        <p><a href="#vid7">Elevator to the Top, An e-book activity app</a></p>
      </div>
      <div className="row">
          <p><a href="#vid7">Smoochie Poochies</a></p>
     </div>
      <div className="row">
        <p >Here is some stuff I''ve worked on as an employee.</p>
      </div>
      <div className="row">
          <p><a href="#vid4">BuzzFeed</a></p>
      </div>
      <div className="row">
          <p><a href="#vid5">QuizChat by BuzzFeed</a></p>
      </div>
      <div className="row">
          <p><a href="#vid6">Hutch</a></p>
      </div>
    </div>
    <div className="contain">
      <div className="topspace">
      hey
      </div>
      <video id="vid1" className="video" autoplay="autoplay" loop="loop" width="285" height="515">
          <source src="source.mp4" type="video/mp4" /></video>
      <video id="vid2" className="video" autoplay="autoplay" loop="loop" width="285" height="515">
          <source src="maze.mp4" type="video/mp4" /></video>
      <video id="vid3" className="video" autoplay="autoplay" loop="loop" width="285" height="515">
        <source src="lights.mp4" type="video/mp4" /></video>
      <img id="vid4" className="image" src='bfimage.png'/>
      <video id="vid5" className="video" autoplay="autoplay" loop="loop" width="285" height="515">
        <source src="quizchat.mp4" type="video/mp4" /></video>
        <img id="vid6" className="image" src='hutch.png'/>
      <div id="vid7" className="topspace">
         Coming soon...
      </div>
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

