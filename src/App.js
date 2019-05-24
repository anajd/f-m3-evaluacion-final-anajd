import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';
import Filters from './components/Filters';
import { Switch, Route } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filterName: ''
    };

    this.handleFilterName = this.handleFilterName.bind(this);
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

  render() {
    const { characters, filterName } = this.state;
    return (
      <div className="App">
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
                parametros={takeParams}
                characters={characters}
                filterName={filterName}
                handleFilterName={handleFilterName}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
