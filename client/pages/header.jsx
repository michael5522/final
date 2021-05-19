import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <i className="fas fa-bars fa-3x"></i>
          {/* <button  onClick={this.clickHandle}> nav</button> */}
        </div>
      </div>
    );
  }
}
export default Header;
