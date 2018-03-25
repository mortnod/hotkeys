import { h, render } from 'preact';
import { Router } from 'preact-router';
import { injectGlobal } from 'styled-components';

import Home from './pages/Home';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Proxima Nova", sans-serif;
    background: hsl(199, 10%, 94%);
    color: #292929;
    cursor: default;
  }

  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
  }
  
  .hotkey {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hotkey:not(:last-child) {
    border-bottom: 1px solid whitesmoke;
  }
  
  .hotkey:hover {
    background: hsl(199, 20%, 98%);
  }
  
  .hotkeys {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: white;
  }
  
  .hotkeys :first-child {
    border-radius: 4px;
  }
  
  .text p {
    opacity: 0.7;
    margin-top: 5px;
    font-weight: 300;
  }
  
  .text kbd {
    font-size: 0.9em;
    padding: 1px 6px;
  }
  
  .or,
  .plus {
    margin: 0 10px 0 10px;
  }
  
  .or {
    color: hsla(0, 0%, 0%, 0.3);
  }
  
  .plus {
    font-weight: 700;
  }
  
  .header {
    margin-bottom: 10px;
    display: flex;
    padding: 0 10px;
    margin-top: 20px;
  }
  
  .logo-wrapper {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }
  
  .logo {
    max-width: 100%;
    max-height: 100%;
  }
  
  .brand {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  
  .brand img {
    width: 100%;
    max-height: 100%;
  }
  
  .search {
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 5px;
    border: 0;
    background-color: whitesmoke;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
    margin-left: 20px;
    flex-grow: 1;
  }
  
  .search:focus {
    outline: none;
    border-color: #66c7f4;
  }
  
  .search::placeholder {
    color: #999;
  }
  
  nav {
    background-color: white;
    border-top: 2px solid hsl(344, 97%, 55%);
    box-shadow: 0 2px 6px hsla(0, 0%, 0%, 0.08);
  }
  
  .nav-wrapper {
    display: flex;
    align-items: center;
  }
  
  nav h1 {
    font-weight: 400;
  }
  
  h2 {
    font-weight: 600;
  }
  
  h3 {
    font-weight: 400;
  }
  
  .group {
    margin-bottom: 40px;
  }
  
  .category {
    border-bottom: 1px solid whitesmoke;
    padding: 5px 20px 3px 20px;
    background-color: #f9f9f9;
    text-transform: uppercase;
    font-weight: 600;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  .shortcut {
    display: flex;
    align-items: center;
  }
  
  .cursor {
    height: 20px;
  }
`;

const Main = () => (
  <Router>
    <Home path="/" />
  </Router>
);

render(<Main />, document.body);
