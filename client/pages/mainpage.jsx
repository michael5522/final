import React from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.clickLogin = this.clickLogin.bind(this);
  }

  clickHandle() {
    this.props.view('setup');
    // alert('this is working ');
    event.preventDefault();
  }

  clickHandleLogin() {
    this.props.view('setup');
    alert('this is working setup');
    event.preventDefault();
  }

  clickLogin() {
    this.props.view('login');
    alert('this is login working ');
    event.preventDefault();
  }

  render() {
    return (
      <div className="back-ground-colorXX">
        <div>
          <div className="mt-5 font">Generic Name</div>
          <img src={'./images/logo.jpeg'} className="card-img-top img-auto"></img>
          <div className="font">Location  Chooser</div>

        </div>
        <div className="login">
          <button className="buttonClick" onClick={this.clickHandle}> START</button>
          <button className="buttonClick" onClick={this.clickLogin}> LOGIN</button>
        </div>
      </div>
    );
  }
}
export default MainPage;
