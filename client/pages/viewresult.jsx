import React from 'react';

class ViewResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.view('home');
    // event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          The results are in

        </label>
        <h1> The winner is {this.props.winner}</h1>
        <input type="submit" value="Click to go Home" />
      </form>
    );
  }
}
export default ViewResult;
