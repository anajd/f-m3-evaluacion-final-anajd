import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
  render() {
    const { item } = this.props;
    const id = this.props.parametros.match.params.character;
    const character = item.find(item => item.id === id);
    return (
      <React.Fragment>
        {character ? (
          <div className="character__detail">
            <p>Soy un detalle de {character.name}.</p>
          </div>
        ) : (
          <p>Esto es todo amigos</p>
        )}
      </React.Fragment>
    );
  }
}

CharacterCard.propTypes = {
  item: PropTypes.array
};

export default CharacterCard;
