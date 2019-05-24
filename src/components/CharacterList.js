import React from 'react';

class CharacterList extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="character__div">
        {/* // Dentro del h2 va el link para la tarjeta de detalles de los
        personajes */}
        <h2 className="character__name" item={item}>
          {item.name}
        </h2>
        <h3 className="character__house">{item.house}</h3>
        <img className="charcter__image" src={item.image} alt={item.name} />
      </div>
    );
  }
}

export default CharacterList;
