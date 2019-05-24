import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render() {
    const { characters } = this.props;
    const id = this.props.parametros.match.params.character;
    const character = characters.find(item => item.id === id);

    return (
      <React.Fragment>
        {character ? (
          <div className="character__detail">
            <p>Soy un detalle de {character.name}.</p>
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
