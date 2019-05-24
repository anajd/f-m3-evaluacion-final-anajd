import React from 'react';
import './App.scss';
import { FetchCharacters } from './services/FetchCharacters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
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

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
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
