import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandleHeader = this.clickHandleHeader.bind(this);
  }

  clickHandleHeader() {
    this.props.view('menu');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="nav">
          <i className="fas fa-bars fa-3x" onClick={this.clickHandleHeader}></i>
          {/* <button  onClick={this.clickHandle}> nav</button> */}
        </div>
      </div>
    );
  }
}
export default Header;
