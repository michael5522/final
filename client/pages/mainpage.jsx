import React from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    this.props.view('setup');
    // alert('this is working ');
    event.preventDefault();
  }

  render() {
    return (
      <div className="back-ground-colorp">
        <div>
          <div className="mt-5 font">Generic Name</div>
          <img src={'./images/logo.jpeg'} className="card-img-top img-auto"></img>
          <div className="font">Restaurant Chooser</div>
          <button className="buttonClick" onClick={this.clickHandle}> START</button>
        </div>
      </div>
    );
  }
}
export default MainPage;
