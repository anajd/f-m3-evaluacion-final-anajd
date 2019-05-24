import React from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';

class Filters extends React.Component {
  render() {
    const { handleFilterName } = this.props;
    return (
      <React.Fragment>
        <div className="character__input">
          <label className="character__input--title" htmlFor="name" />
          <input
            className="character__input"
            type="text"
            name="name"
            id="name"
            placeholder="Escribe el nombre de tu personaje favorito"
            onChange={handleFilterName}
            pattern="[A-Za-z]+"
          />
        </div>
      </React.Fragment>
    );
  }
}

CharacterList.propTypes = {
  handleFilterName: PropTypes.func
};

export default Filters;
