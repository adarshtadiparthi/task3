import React, { useState } from 'react';
import "./NavBar.css"
import logo from "./assets/logo.png";
import logo2 from './assets/logo2.png'
import logo3 from './assets/logo3.png'
import logo4 from './assets/logo4.png'

import Dashboard from './Dashboard.js';
import SignUp from './Signup.js';
import SignIn from './Signin.js';
import ColorChoice from './ColorChoice.js';

export default function Navbar() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const navigateToSignIn = () => {
    setActiveComponent('signin');
  }

  const [backgroundColor, setBackgroundColor] = React.useState('#318DFA');
  
  const [colorChoices , setColorChoices] = React.useState({});

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  React.useEffect(()=>{
    switch(backgroundColor){
      case "#318DFA":
        setColorChoices({
          primaryColor: "#318DFA",
          secondaryColor: "#0E2F56",
          otherColor: "#89baf5",
          gradient: "linear-gradient(65deg,rgba(36, 133, 249,1) , rgba(120, 181, 252, 1) 100%)",
        })
        break;

        case "#1DD1a1":
        setColorChoices({
          primaryColor: "#1DD1a1",
          secondaryColor: "#054735",
          otherColor: "#60F6C0",
          gradient: "linear-gradient(65deg,#1DD1a1,#60F6C0 100%)",
        })
        break;

        case "#FF6B6B":
        setColorChoices({
          primaryColor: "#FF6B6B",
          secondaryColor: "#4A0202",
          otherColor: "#FF9B9B",
          gradient: "linear-gradient(65deg, #FF6B6B , #FF9898 100%)",
        })
        break;

        case "#F368E0":
        setColorChoices({
          primaryColor: "#F368E0",
          secondaryColor: "#57044C",
          otherColor: "#F891EA",
          gradient: "linear-gradient(65deg, #F368E0 , #F891EA 100%)",
        })
        break;

        default:
          setColorChoices({
            primaryColor: "#318DFA",
            secondaryColor: "#0000FF",
            otherColor: "#89baf5",
            gradient: "linear-gradient(65deg,rgba(36, 133, 249, 100%), rgba(120, 181, 252, 1) 100%)",
          })
          break;
      }
  },[backgroundColor]);

  const root = document.documentElement;

  React.useEffect(()=>{
        root.style.setProperty('--primary-color',colorChoices.primaryColor);
        root.style.setProperty('--secondary-color',colorChoices.secondaryColor);
        root.style.setProperty('--other-color',colorChoices.otherColor);
        root.style.setProperty('--gradient',colorChoices.gradient);
  },[colorChoices]);

  return (
    <div>
    <div className="navbar">
      <div className="leftNav">
        {backgroundColor == "#318DFA" && <img src={logo} className="logo" />}
        {backgroundColor == "#FF6B6B" && <img src={logo2} className="logo" />}
        {backgroundColor == "#1DD1a1" && <img src={logo3} className="logo" />}
        {backgroundColor == "#F368E0" && <img src={logo4} className="logo" />}
        <p className="brandName">Vibe Connect</p>
      </div>
      <div className="rightNav">
        <p
          className={`navComponents ${activeComponent === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleNavClick('dashboard')}
        >
          DashBoard
        </p>
        <p
          className={`navComponents ${activeComponent === 'signup' ? 'active' : ''}`}
          onClick={() => handleNavClick('signup')}
        >
          SignUp
        </p>
        <p
          className={`navComponents ${activeComponent === 'signin' ? 'active' : ''}`}
          onClick={() => handleNavClick('signin')}
        >
          SignIn
        </p>
      </div>
    </div>
    {activeComponent === 'dashboard' && <Dashboard  />}
    {activeComponent === 'signin' && <SignIn /> }
    {activeComponent === 'signup' && <SignUp  navigateToSignIn = {navigateToSignIn} colorChoices = {colorChoices}/>}
    <ColorChoice onColorChange={handleColorChange} />
    </div>
  );
}
