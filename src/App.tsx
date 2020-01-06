import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
     <div className="music-container">
      <div className="music-img text-center">
        <div className="music-header">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          <div className="title"><p>Now Playing</p></div>
          <i className="fa fa-list-ul" aria-hidden="true"></i>
        </div>
        <div className="inner-img">
          <img src="album-thumbnail.jpg"></img>
        </div>
        <p><b>Music</b></p>
      </div>
      <div className="music-control">
        <div className="music-bar">
          <div className="progress">
            <div className="progress-bar"> </div>
          </div>
        </div>
      </div>

      <div className="control-bar text-center">
        <i className="fa fa-random"></i>
        <i className="fa fa-step-backward"></i>
        <i className="fa fa-play"></i>
        <i className="fa fa-step-forward"></i>
        <i className="fa fa-retweet"></i>
      </div>
     </div>
     <div className="user-menu text-center">
       <ul>
         <li><a href="#"><i className="fa fa-home"></i><p>Home</p></a></li>
         <li><a href="#"><i className="fa fa-music"></i><p>Albums</p></a></li>
         <li><a href="#"><i className="fa fa-microphone"></i><p>Titles</p></a></li>
         <li><a href="#"><i className="fa fa-user"></i><p>Editorials</p></a></li>

       </ul>
     </div>
    </div>
  );
}

export default App;
