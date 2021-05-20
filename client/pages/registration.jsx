import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
  }

  handleSubmit(event) {
    /* eslint-disable no-console */
    console.log(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleChange1(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleChange2(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleChange3(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleChange4(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleChange5(event) {
    this.setState({
      password: event.target.value
    });
  }

  greenRed() {
    if (this.state.password.length < 8) {
      return 'red';
    } else {
      return 'green';
    }
  }

  whatMark() {
    if (this.state.password.length < 8) {
      return 'fas fa-times';
    } else {
      return 'fas fa-check';
    }
  }

  whatMessage() {
    if (this.state.password === '') {
      return 'A longer value is required';
    } else if (this.state.password.length < 8) {
      return 'Your length is too short';
    } else {
      return null;
    }
  }

  render() {
    const color = this.greenRed();
    const icon = this.whatMark();
    const text = this.whatMessage();
    return (
      <div>
        <div>Create Account</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>UserName:<input type="text" value={this.state.userName} onChange={this.handleChange1} />
              <i className={` ${color} ${icon}`} /></div>
          </div>

          <div>
            <div>First Name:<input type="text" value={this.state.firstName} onChange={this.handleChange2} />
              <i className={` ${color} ${icon}`} /></div>
          </div>

          <div>
            <div>Last Name:<input type="text" value={this.state.lastName} onChange={this.handleChange3} />
              <i className={` ${color} ${icon}`} /></div>
          </div>

          <div>
            <div>Email:<input type="text" value={this.state.email} onChange={this.handleChange4} />
              <i className={` ${color} ${icon}`} /></div>
          </div>

          <div>
            <div>Password<input type="text" value={this.state.password} onChange={this.handleChange5} />
              <i className={` ${color} ${icon}`} /></div>
          </div>

        </form>
        <div className={color}>{text}</div>
        <button>Click to Continue</button>
      </div>
    );
  }
}
export default Registration;
