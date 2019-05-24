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
      <React.Fragment>
        {findCharacter ? (
          <div className="character__detail">
            <div className="character__img--container">
              <img src={findCharacter.image} alt={findCharacter.name} />
            </div>
            <div className="character__description--container">
              <h2 className="character__name">{findCharacter.name}</h2>
              <p className="character__house">{findCharacter.house}</p>
              <p className="character__birth">{findCharacter.dateOfBirth}</p>
              <p className="character__patronus">{findCharacter.patronus}</p>
              <p className="character__alive">
                {findCharacter.alive === true ? 'Vivo' : 'Muerto'}
              </p>
            </div>
            <Link to="/">Volver atrás</Link>
          </div>
        ) : (
          <p>Po' va ser que no ta' salio</p>
        )}
      </React.Fragment>
    );
  }
}

CharacterCard.propTypes = {
  resetFilters: PropTypes.func,
  characters: PropTypes.array
};

export default CharacterCard;
