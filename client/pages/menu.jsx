import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandleFavorites = this.clickHandleFavorites.bind(this);
    this.clickHandleCreateNewFavorites = this.clickHandleCreateNewFavorites.bind(this);
    this.clickHandleGoHome = this.clickHandleGoHome.bind(this);
  }

  clickHandleFavorites() {
    this.props.view('favorites');
    alert('this is working favorites');
    event.preventDefault();
  }

  clickHandleCreateNewFavorites() {
    this.props.view('createnewfavorites');
    alert('create new favorites ');
    event.preventDefault();
  }

  clickHandleGoHome() {
    this.props.view('home');
    alert('go home ');
    event.preventDefault();
  }

  render() {
    return (
      <div className="back-ground-colorX">
        <div>User Menu</div>
        <div>
          <button className="buttonClick" onClick={this.clickHandleCreateNewFavorites}> Create New Favorites List</button>
          <button className="buttonClick" onClick={this.clickHandleFavorites}> My Favorites</button>
          <button className="buttonClick" onClick={this.clickHandleGoHome}> Return</button>
        </div>
      </div>
    );
  }
}
export default Menu;
