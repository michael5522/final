import React from 'react';

class CreateNewFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      groupName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ number: event.target.value });
  }

  handleChange2(event) {
    this.setState({
      groupName: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.view('creatingNewFavorites', this.state.number, this.state.groupName);

    /* eslint-disable no-console */
    console.log('Amount of people in your group: ' + this.state.number);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name of List:
          <input type="text" value={this.state.groupName} onChange={this.handleChange2} />
        </label>
        <label>
          How many restaurants would you like to Add?
          <input type="text" value={this.state.number} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Click to Continue" />
      </form>
    );
  }
}
export default CreateNewFavorites;
