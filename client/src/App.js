import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote';
import NotesList from './components/NoteList';
import CreateUser from './components/CreateUser';

function App() {

  return (
  <BrowserRouter className="App">
    <Navigation/>
      <div className="container p-4">
      <Route path="/"  exact  component={NotesList} />   
      <Route path="/edit/:id"   component={CreateNote} />   
      <Route path="/create"   component={CreateNote} />   
      <Route path="/creatuser"   component={CreateUser} />   
      </div>
     
    </BrowserRouter>
  );
}

export default App;
