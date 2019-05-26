import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterCard from './components/CharacterCard';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filterName: ''
    };

    this.handleFilterName = this.handleFilterName.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    FetchCharacters().then(data => {
      const newData = data.map((item, index) => {
        return { ...item, id: index };
      });

      this.setState({
        characters: newData
      });
    });
  }

  handleFilterName(event) {
    const characterName = event.currentTarget.value;

    this.setState({
      filterName: characterName
    });
  }

  resetFilters() {
    this.setState({
      filterName: ''
    });
  }

  render() {
    const { characters, filterName } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                handleFilterName={this.handleFilterName}
                characters={characters}
                filterName={filterName}
              />
            )}
          />
          <Route
            path="/detail/:character"
            render={takeParams => (
              <CharacterCard
                takeParams={takeParams}
                characters={characters}
                filterName={filterName}
                resetFilters={this.resetFilters}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
