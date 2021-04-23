import React from 'react';
import { getCurrentUser } from '../services/auth';
import NavbarComp from "../components/NavbarComp.js"

class Private extends React.Component {
  render() {
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
