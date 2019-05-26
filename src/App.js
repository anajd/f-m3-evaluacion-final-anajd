import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';
import Filters from './components/Filters';
import { Switch, Route } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
// import HarryPotterSoundtrack from './audio/HarryPotterSoundtrack.mp3';

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
        <header className="app__header">
          <h1 className="header__title">Harry Potter Character's List</h1>
        </header>
        <main className="app__main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <Filters handleFilterName={this.handleFilterName} />
                  <CharacterList
                    characters={characters}
                    filterName={filterName}
                  />
                </React.Fragment>
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
        </main>
        <footer className="app__footer">
          {/* <audio autoPlay src={HarryPotterSoundtrack} id="pDst9A3sqis" /> */}
          <p>Copyright &copy; 2019 Ana JD.</p>
        </footer>
      </div>
    );
  }
}

export default App;
