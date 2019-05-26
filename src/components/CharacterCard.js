import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterCard extends React.Component {
  componentWillUnmount() {
    this.props.resetFilters();
  }

  render() {
    const { characters } = this.props;
    const id = parseInt(this.props.takeParams.match.params.character);
    const findCharacter = characters.find(item => item.id === id);

    return (
      <div className="character__card">
        {findCharacter ? (
          <div className="character__detail">
            <div className="character__img--wrapper">
              <img
                className="character__img"
                src={findCharacter.image}
                alt={findCharacter.name}
              />
            </div>
            <div className="character__description">
              <h2 className="character__name--detail">
                Name:{' '}
                <span className="subtitle__cursive">
                  {findCharacter.name === '' ? '-' : findCharacter.name}
                </span>
              </h2>
              <p className="character__house--detail">
                House:{' '}
                <span className="subtitle__cursive">
                  {findCharacter.house === '' ? '-' : findCharacter.house}
                </span>
              </p>
              <p className="character__birth">
                Birth:{' '}
                <span className="subtitle__cursive">
                  {findCharacter.dateOfBirth === ''
                    ? '-'
                    : findCharacter.dateOfBirth}
                </span>
              </p>
              <p className="character__patronus">
                Patronus:{' '}
                <span className="subtitle__cursive">
                  {findCharacter.patronus === '' ? '-' : findCharacter.patronus}
                </span>
              </p>
              <p className="character__alive">
                Alive:{' '}
                <span className="subtitle__cursive">
                  {findCharacter.alive === true ? 'Alive' : 'Die'}
                </span>
              </p>
              <Link className="link__back" to="/">
                Go back
              </Link>
            </div>
            <div className="character__description--wrapper">
              <div
                className={`character__house--wrapper character__${
                  findCharacter.house === ''
                    ? 'none'
                    : findCharacter.house === 'Gryffindor'
                    ? 'gr'
                    : findCharacter.house === 'Slytherin'
                    ? 'sl'
                    : findCharacter.house === 'Hufflepuff'
                    ? 'hu'
                    : 'ra'
                }`}
              />
            </div>
          </div>
        ) : (
          <p>Po' va ser que no ta' salio</p>
        )}
      </div>
    );
  }
}

CharacterCard.propTypes = {
  characters: PropTypes.array
};

export default CharacterCard;
