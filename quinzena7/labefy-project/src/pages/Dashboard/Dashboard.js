import React from 'react'
import styled from 'styled-components';

const DashboardBackground = styled.div`
  background-color: #111;
  height: 100vh;
  color: white;
`
const WelcomeContainer = styled.div`
  position: absolute;
  left: 20%;
  top: 10%;
  display: inline-block;
  margin: 0;

  h1:after {
  display:block;
  content: '';
  border-bottom: solid 1px #FC6D6D;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

  h2:after {
    display:block;
    content: '';
    border-bottom: solid 1px #FC6D6D;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
}

  h1:hover:after { transform: scaleX(1); }
  h1.fromLeft:after{  transform-origin:  0% 50%; }
  h2:hover:after { transform: scaleX(1); }
  h2.fromLeft:after{  transform-origin:  0% 50%; }
`
const NamePhotoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 62%;
  top: 38%;

  img {
    padding-left: 20px;
    border-radius: 50%;
    transform: scale(1);
    transition: 0.5s;
  }

  img:hover {
  transform: scale(1.06);
}
`

const DashboardTitle = styled.div`
  position: absolute;
  left: 41%;
  top: 35%;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  font-size: 26px;

  h2:after {
  display:block;
  content: '';
  border-bottom: solid 1px #FC6D6D;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

h2:hover:after { transform: scaleX(1); }
`

export default class Dashboard extends React.Component {

  render() {
    return (
      <DashboardBackground>
        <WelcomeContainer>
          <h1 className="fromLeft">Welcome,</h1>
        <NamePhotoContainer>
          <h2 className="fromLeft">{this.props.responseGoogleName}</h2>
          <img src={this.props.responseGoogleImg}></img>
        </NamePhotoContainer>
        </WelcomeContainer>

        <button onClick={() => this.props.PageChange("Home")}>Logout</button>
      <DashboardTitle>
        <h2>Dashboard</h2>
      </DashboardTitle>
        <button onClick={() => this.props.PageChange("CreatePlaylistPage")}>Want to create your playlist?</button>
        <button onClick={() => this.props.PageChange("PlaylistLibrary")}>Your Library</button>
      </DashboardBackground>
    );
  }
}