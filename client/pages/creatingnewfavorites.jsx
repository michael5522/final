import React from 'react';

class CreatingNewFavorites extends React.Component {
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
        supposed to render here based on click
      </div>
    );
  }
}
export default CreatingNewFavorites;
