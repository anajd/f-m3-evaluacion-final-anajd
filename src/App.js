import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      filerName: ''
    };

    this.handleFilterName = this.handleFilterName.bind(this);
    this.paintFilterArray = this.paintFilterArray.bind(this);
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

  //Esta funcion va en el componente del input
  paintFilterArray() {
    const { characters, filterName } = this.state;
    return characters
      .filter(item => item.name.includes(filterName))
      .map(item => {
        return (
          // Dentro del li va el link para la tarjeta de detalles de los personajes
          <li className="character" key={item.id}>
            {item.name}
          </li>
        );
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
            id="name"
            placeholder="Escribe el nombre de tu personaje favorito"
            onChange={this.handleFilterName}
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
