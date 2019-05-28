import React from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';

class Filters extends React.Component {
  render() {
    const { handleFilterName, handleFilterHouse } = this.props;
    return (
      <React.Fragment>
        <div className="app__div--input">
          <label className="app__input--label" htmlFor="name">
            Find your favorite character
          </label>
          <input
            className="app__input"
            type="text"
            name="name"
            id="name"
            placeholder="Search"
            onChange={handleFilterName}
            pattern="[A-Za-z]+"
          />

          <select
            name="app__select"
            id="app__select"
            onChange={handleFilterHouse}
          >
            <option value="">Choose a House</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Without House">Without house</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

CharacterList.propTypes = {
  handleFilterName: PropTypes.func,
  handleFilterHouse: PropTypes.func
};

export default Filters;
