import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Form from './forms/Form';

class App extends Component {
  state = {
    users: [],
    requestMade: false,
  };

  onSubmit = async updatedValue => {
    try {
      const userRequest = await axios.get('/users/search', {
        params: {
          firstName: updatedValue.firstName,
          lastName: updatedValue.lastName
        }
      })
      if (userRequest.hasOwnProperty('data') && Array.isArray(userRequest.data)) {
        this.setState({
          users: userRequest.data,
          requestMade: true
        });
        console.log(this.state.users);
      }

    } catch (error) {
      console.log(error);
    }

  };

  render() {
    let result = "";
    if(this.state.users.length) {
      result = <ul className="userList">
        {this.state.users.map(el => 
          <li key={el.id}>
            <p>{el.first_name} {el.last_name}</p>
            <p>{el.email}</p>
            <img className="avatar" alt="user avatar" src={el.avatar}/>
          </li>
        )}
      </ul>;
    }else if(this.state.requestMade) {
      result = <p>No records found</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Form onSubmit={fields => this.onSubmit(fields)} />
        {result}
        
      </div>
    );
  }
}

export default App;

/*<ul className="userList">
          {this.state.users.map(el => 
            <li key={el.id}>
              <p>{el.first_name} {el.last_name}</p>
              <p>{el.email}</p>
              <img className="avatar" alt="user avatar" src={el.avatar}/>
            </li>
          )}
        </ul> */