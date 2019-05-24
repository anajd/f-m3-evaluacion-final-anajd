import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render() {
    const { characters } = this.props;
    const id = parseInt(this.props.takeParams.match.params.character);
    const findCharacter = characters.find(item => item.id === id);

    return (
      <React.Fragment>
        {findCharacter !== undefined ? (
          <div className="character__detail">
            <p>Soy un detalle de {findCharacter.name}.</p>
          </div>
        ) : (
          <p>Po va ser que no</p>
        )}
      </React.Fragment>
    );
  }
}

CharacterCard.propTypes = {
  item: PropTypes.array
};

export default CharacterCard;
