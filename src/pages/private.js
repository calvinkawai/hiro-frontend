import React from 'react';
import NavbarComp from "../components/NavbarComp.js"
import PrivateComp from "../components/PrivateComp.js"
import Survey from "../components/Survey"
class Private extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <NavbarComp />
        <PrivateComp component={Survey}/>
      </div>
    );
  }
}
export default Private;
