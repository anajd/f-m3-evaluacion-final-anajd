import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterList extends React.Component {
  render() {
    const { characters, filterName } = this.props;

    return (
      <ul className="character__list">
        {characters
          .filter(item => item.name.includes(filterName))
          .map(item => {
            return (
              <li className="character__item" key={item.id}>
                <div className="character__div">
                  {/* // Dentro del h2 va el link para la tarjeta de detalles de los
            personajes */}
                  <Link to={`/detail/${item.id}`}>
                    <h2 className="character__name">{item.name}</h2>
                  </Link>
                  <h3 className="character__house">{item.house}</h3>
                  <img
                    className="charcter__image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  filterName: PropTypes.string
};

export default CharacterList;
