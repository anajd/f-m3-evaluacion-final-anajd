import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
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
          </div>
        ) : (
          <p>Po' va ser que no ta' salio</p>
        )}
      </React.Fragment>
    );
  }
}

CharacterCard.propTypes = {
  item: PropTypes.array
};

export default CharacterCard;
