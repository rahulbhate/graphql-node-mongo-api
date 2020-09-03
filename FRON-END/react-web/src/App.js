import React from 'react';
import logo from './peaceful-mind (1).png';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        {/* Hello world */}
        <div className="App-border">
          <img src={logo} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel, odio beatae qui possimus minus distinctio veniam officiis, suscipit dolor tempore et hic ullam! Placeat cumque eum quaerat debitis voluptatibus!</p>
        </div>
        <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione et sequi reiciendis doloremque soluta placeat vitae voluptatum voluptatem, recusandae itaque, quidem sit excepturi ipsa aliquam vero culpa beatae facilis dolor consectetur, quasi impedit praesentium! Atque quod eligendi cumque! Modi veniam error optio exercitationem nihil ducimus cum aperiam praesentium, velit perspiciatis.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
