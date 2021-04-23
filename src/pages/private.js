import React from 'react';
import NavbarComp from "../components/NavbarComp.js"
import PrivateComp from "../components/PrivateComp.js"

class Private extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <NavbarComp />
        <PrivateComp />
      </div>
    );
  }
}
export default Private;
