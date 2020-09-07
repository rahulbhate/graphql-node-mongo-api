import React from 'react';
import './sass/main.scss';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import BookingsPage from './components/BookingsPage';
import SignInPage from './components/SignInPage';
import FooterPage from './components/FooterPage';
import Navigation from './components/Navigation';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="container">
        <BrowserRouter>
          <Navigation />
        <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/signin' component={SignInPage} />
              <Route path='/events' component={EventsPage} />
              <Route path='/bookings' component={BookingsPage} />
          </Switch>
        </BrowserRouter>
        <FooterPage />
   </div>
  );
}

export default App;
