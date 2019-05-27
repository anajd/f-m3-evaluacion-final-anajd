import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterList extends React.Component {
  render() {
    const { characters, filterName } = this.props;

    return (
      <ul className="character__list">
        {characters
          .filter(item =>
            item.name.toLowerCase().includes(filterName.toLowerCase())
          )
          .map(item => {
            return (
              <Link
                to={`/detail/${item.id}`}
                className="character__card--link"
                key={item.id}
              >
                <li className="character__item">
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
                    <h3 className="character__house">
                      {item.house === '' ? '-' : item.house}
                    </h3>
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
  characters: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string
};

export default CharacterList;
