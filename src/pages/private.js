import React from 'react';
import { getCurrentUser, isLoggedIn } from '../services/auth';
import NavbarComp from "../components/NavbarComp.js"
import { navigate } from "gatsby"

class Private extends React.Component {

  render() {
    if (!isLoggedIn()) {
      navigate('/private')
    }
    return (
      <div className="shopping-list">
        <NavbarComp />
        <h1>Shopping List for { getCurrentUser().getUsername() }</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default Private;
