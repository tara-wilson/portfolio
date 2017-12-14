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
        <p>I am a Mobile Developer. Here is some stuff I've created.</p>
      </div>
      <div className="row">
          <h4><a href="#vid1">Musique Live</a></h4>
          <p className="links"><a href="https://github.com/musique-live/iosApp">Github</a><a href="https://www.musiqueliveapp.com">Website</a><a href="https://itunes.apple.com/us/app/musique-live/id1217586564">iOS App</a><a href="https://play.google.com/store/apps/details?id=com.musiqueliveapp">Android App</a></p>
      </div>
      <div className="row">
          <h4><a href="#vid2">Augmented Reality Game</a></h4>
          <p className="links"><a href="https://github.com/tara-wilson/ARMaze">Github</a><a href="https://itunes.apple.com/us/app/md-sunrise-farms-corn-maze/id1289492274?mt=8">Download Link</a></p>
      </div>
      <div className="row">
          <h4><a href="#vid3">NFC Lights Project</a></h4>
          <p className="links"><a href="https://github.com/tara-wilson/nfc-lights">Github</a></p>
      </div>
       <div className="row">
        <h4><a href="#vid11">E-book activity app</a></h4>
        <p className="links">App download coming soon, <a href="http://ryanstewman.com/">Client Website</a></p> 
      </div>
      <div className="row">
          <h4><a href="#vid10">Smoochie Poochies Scheduler App</a></h4>
          <p className="links">App download coming soon, <a href="https://www.mysmoochiepoochies.com/">Client Website</a></p> 
     </div>
     </div>
     <div className="outsideright">
      <div className="row">
        <p >Here is some stuff I've worked on as an employee.</p>
      </div>
      <div className="row">
          <h4><a href="#vid4">BuzzFeed</a></h4>
          <h4><a href="#vid5">Quizchat</a></h4>
          <h4><a href="#vid6">Hutch</a></h4>
      </div>
      <div className="row extra">
        <p>Here is where I learned to build stuff</p>
        </div>
        <div className="row">
          <h4><a href="#vid8">Cornell Tech, M.Eng, Computer Science</a></h4>
          <h4><a href="#vid9">NYU, B.A. Computer Science</a></h4>
        </div>
        <div className="row extra">
          <p><a href="https://github.com/tara-wilson/portfolio">Here</a> is the link to this website</p>
      </div>
    </div>
    <div className="contain">
      <img id="vid7" className="image" src='linkedin.png'/>
      <video id="vid1" className="video" autoplay="autoplay" loop="loop" width="285" height="515">
          <source src="source.mp4" type="video/mp4" /></video>
      <video id="vid2" className="video" autoplay="autoplay" loop="loop" width="285" height="515">
          <source src="maze.mp4" type="video/mp4" /></video>
      <video id="vid3" className="video" autoplay="autoplay" loop="loop" width="285" height="515">
        <source src="lights.mp4" type="video/mp4" /></video>
        <video id="vid10" className="videolarge" autoplay="autoplay" loop="loop" width="285" height="515">
        <source src="smooch.mp4" type="video/mp4" /></video>
        <video id="vid11" className="videolarge" autoplay="autoplay" loop="loop" width="285" height="515">
        <source src="ebook.mp4" type="video/mp4" /></video>
      <img id="vid4" className="image" src='bfimage.png'/>
      <video id="vid5" className="videolarge" autoplay="autoplay" loop="loop" width="285" height="515">
        <source src="quizchat.mp4" type="video/mp4" /></video>
        <img id="vid6" className="image" src='hutch.png'/>
        <img id="vid8" className="image" src='cornell.png'/>
        <img id="vid9" className="image" src='nyu.png'/>
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

