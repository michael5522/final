import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    /* eslint-disable no-console */
    console.log(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
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
            <div>UserName:<input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
              </div>
          </div>

          <div>
            <div>First Name:<input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
              </div>
          </div>

          <div>
            <div>Last Name:<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </div>
          </div>

          <div>
            <div>Email:<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
          </div>

          <div>
            <div>Password<input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
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
