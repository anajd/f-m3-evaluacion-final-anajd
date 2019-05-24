import React from 'react';
import CharacterList from './CharacterList';

class Filters extends React.Component {
  render() {
    const { characters, filterName } = this.props;
    return characters
      .filter(item => item.name.includes(filterName))
      .map(item => {
        return (
          <li className="character__item" key={item.id}>
            <CharacterList item={item} />
          </li>
        );
      });
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array
};

CharacterList.propTypes = {
  characters: Prop.array,
  favPokemon: PropTypes.array,
  handleFav: PropTypes.func
};

export default Filters;
