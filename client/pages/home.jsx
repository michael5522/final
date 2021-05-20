import React from 'react';
import MainPage from './mainpage';
import Header from './header';
import Setup from './setup';
import Ballot from './ballot';
import Vote from './vote';
import Login from './login';
import Registration from './registration';
import Menu from './menu';
import Favorites from './favorites';
import CreateNewFavorites from './createnewfavorites';
import CreatingNewFavorites from './creatingnewfavorites';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'home',
        params: {}
      },
      foodSuggestions: {
        restaurant: []
      }
    };
    this.setView = this.setView.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  addRestaurant(foodInput) {
    this.setState({
      foodSuggestions: {
        restaurant: foodInput
      }
    });
  }

  render() {

    const viewType = this.state.view.name;
    if (viewType === 'home') {
      return (
        <div>
          < Header view={this.setView}/>
          < MainPage view={this.setView} />
        </div>
      );
    } else if (viewType === 'setup') {
      return (
        <div>
          < Header view={this.setView}/>
          < Setup view={this.setView} />
        </div>
      );
    } else if (viewType === 'ballot') {
      return (
        <div>
          < Header view={this.setView}/>
          < Ballot view={this.setView} numberOfPeople={this.state.view.params} res={this.addRestaurant} />
        </div>
      );
    } else if (viewType === 'vote') {
      return (
        <div>
          < Header view={this.setView}/>
          < Vote numberOfPeople={this.state.view.params} foodSug={this.state.foodSuggestions.restaurant} />
        </div>
      );
    } else if (viewType === 'login') {
      return (
        <div>
          <Header view={this.setView}/>
          <Login view={this.setView} />
        </div>
      );
    } else if (viewType === 'register') {
      return (
        <div>
          <Header view={this.setView}/>
          <Registration view={this.setView} />
        </div>
      );
    } else if (viewType === 'menu') {
      return (
        <div>
          <Header view={this.setView}/>
          <Menu view={this.setView} />
        </div>
      );
    } else if (viewType === 'favorites') {
      return (
        <div>
          <Header view={this.setView} />
          <Favorites view={this.setView} />
        </div>
      );
    } else if (viewType === 'createnewfavorites') {
      return (
        <div>
          <Header view={this.setView} />
          <CreateNewFavorites view={this.setView} />
        </div>
      );
    } else if (viewType === 'creatingNewFavorites') {
      return (
        <div>
          <Header view={this.setView} />
          <CreatingNewFavorites view={this.setView} />
        </div>
      );
    }

  }
}
