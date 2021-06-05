import React from 'react'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import './App.css'
import styled from 'styled-components';

const LoginContainer = styled.a`
  position: absolute;
  left: 86.5vw;
  top: 9vh;
  z-index: 2;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;

  a:after {
  display:block;
  content: '';
  border-bottom: solid 2px #FC6D6D;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

  a:hover:after { transform: scaleX(1); }
  a.fromLeft:after{  transform-origin: 0% 50% ; }
`

export default class App extends React.Component {
  state = {
    page: "Home",
  }

  PageChange = (page) => {
    this.setState({
      page: page,
    });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "Home":
        return (
          <div>
            <Home 
            PageChange={this.PageChange}
            />
            <LoginContainer>
              <a
              onClick={() => this.PageChange("Dashboard")}>
              Login
              </a>
            </LoginContainer>
          </div>
        )
      case "Dashboard":
        return (
          <Dashboard
          PageChange={this.PageChange}
          />
        )
      default:
        return <h1>Page not found</h1>
    }
  };

  render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    );
}
}
