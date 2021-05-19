import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clickHandleToRegister = this.clickHandleToRegister.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleChange2(event) {
    this.setState({
      password: event.target.value
    });
  }

  clickHandleToRegister() {
    this.props.view('register');
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    /* eslint-disable no-console */
    console.log(this.state);
  }

  render() {

    return (
      <div>
        <div>Sign In</div>
        <form onSubmit={this.handleSubmit}>
        <label>
            UserName
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
            Password
          <input type="text" value={this.state.password} onChange={this.handleChange2} />
        </label>
        <button className="buttonClick" type="submit">Click to continue</button>
      </form>
      <button className="buttonClick" onClick={this.clickHandleToRegister}>Click to Register</button>
      </div>

    );
  }
}
export default Login;
