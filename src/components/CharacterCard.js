import React from 'react';

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

export default CharacterCard;
