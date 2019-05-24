import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filerName: []
    };
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
    const { characters } = this.state;
    return (
      <div className="App">
        <div className="character__input">
          <label className="character__input--title" htmlFor="name" />
          <input
            className="character__input"
            type="text"
            name="name"
            value=""
            id="name"
            placeholder="Escribe el nombre de tu personaje favorito"
            onChange=""
          />
        </div>
        <ul className="characters__list">
          {characters.map(item => {
            return (
              <li className="character" key={item.id}>
                <h2 className="character__name">{item.name}</h2>
                <h3 className="character__house">{item.house}</h3>
                <img
                  className="charcter__image"
                  src={item.image}
                  alt={item.name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
