import React from 'react'
import GoogleLogin from 'react-google-login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import './App.css'

export default class App extends React.Component {
  state = {
    page: "Home",
    responseGoogleName: null,
    responseGoogleImg: null,
  }

  responseGoogle = (response) => {
    if(response) {
      this.PageChange("Dashboard")
      this.setState({ responseGoogleName: response.profileObj.givenName })
      this.setState({ responseGoogleImg: response.profileObj.imageUrl })
    } else {
      this.props.PageChange("Home")
    }
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
            <GoogleLogin
              className="google-button"
              clientId="824766333517-38plugusncen1bdcck8q529tqdpihjh8.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        )
      case "Dashboard":
        return (
          <Dashboard
          PageChange={this.PageChange}
          responseGoogleName={this.state.responseGoogleName}
          responseGoogleImg={this.state.responseGoogleImg}
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
