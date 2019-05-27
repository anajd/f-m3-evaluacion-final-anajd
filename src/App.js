import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterCard from './components/CharacterCard';
import HarryPotterSoundtrack from './audio/HarryPotterSoundtrack.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filterName: '',
      favCharacter: []
    };

    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleFav = this.handleFav.bind(this);
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

  handleFav(event, obj) {
    const id = parseInt(event.currentTarget.id);
    const newFav = [...this.state.favCharacter];
    let index = newFav.indexOf(obj);
    if (this.state.favCharacter.includes(id) === true) {
      newFav.splice(index, 1);
    } else {
      newFav.push(id);
    }
    this.setState({
      favCharacter: newFav
    });
  }

  resetFilters() {
    this.setState({
      filterName: ''
    });
  }

  render() {
    const { characters, filterName, favCharacter } = this.state;
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
                favCharacter={favCharacter}
                handleFav={this.handleFav}
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
        {/* <audio autoPlay src={HarryPotterSoundtrack} id="pDst9A3sqis" /> */}
      </div>
    );
  }
}

export default App;
