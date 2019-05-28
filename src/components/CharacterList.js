import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterList extends React.Component {
  filterHouses(characterList) {
    if (this.props.houseSearch !== 'Without House') {
      return characterList.filter(character =>
        character.house.includes(this.props.houseSearch)
      );
    } else {
      return characterList.filter(character => character.house === '');
    }
  }

  render() {
    const {
      characters,
      filterName,
      favCharacter,
      handleFav,
      filterHouse
    } = this.props;

    return (
      <ul className="character__list">
        {characters
          .filter(item =>
            item.name.toLowerCase().includes(filterName.toLowerCase())
          )
          .filter(item => item.house.includes(filterHouse))
          .map(item => {
            return (
              <li className="character__item" key={item.id}>
                <div className="character__div">
                  <p className="character__title">
                    Have you seen this{' '}
                    {item.gender === 'male' ? 'wizard' : 'witch'}?
                  </p>
                  <div className="character__image--wrapper">
                    <img
                      className="character__image"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <h2 className="character__name">{item.name}</h2>
                  <h3
                    className="character__house"
                    id={item.id}
                    onClick={handleFav}
                  >
                    {item.house === '' ? '-' : item.house}{' '}
                    <i
                      className={`fas fa-magic ${
                        favCharacter.includes(item.id) ? 'fa-magic-fav' : ''
                      }`}
                    />
                  </h3>
                </div>
                <Link
                  to={`/detail/${item.id}`}
                  className="character__card--link"
                >
                  See more
                </Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  filterName: PropTypes.string,
  favCharacter: PropTypes.array,
  handleFav: PropTypes.func
};

export default CharacterList;
