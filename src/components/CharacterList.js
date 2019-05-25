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
              <Link className="character__card--link" to={`/detail/${item.id}`}>
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
                    <h3 className="character__house">{item.house}</h3>

                    <Link
                      className="character__card--link"
                      to={`/detail/${item.id}`}
                    >
                      See more
                    </Link>
                  </div>
                </li>
              </Link>
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
