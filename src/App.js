import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';
import Filters from './components/Filters';
import CharacterCard from './components/CharacterCard';

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

  // //Esta funcion va en el componente del input
  // paintFilterArray() {
  //   const { characters, filterName } = this.state;
  //   return characters
  //     .filter(item => item.name.includes(filterName))
  //     .map(item => {
  //       return (
  //
  //         <li className="character" key={item.id}>
  //           {item.name}
  //         </li>
  //       );
  //     });
  // }

  render() {
    const { characters, filterName } = this.state;
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
          <Filters characters={characters} filterName={filterName} />
        </ul>
      </div>
    );
  }
}

export default App;
