import React from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';

class Filters extends React.Component {
  render() {
    const { handleFilterName } = this.props;
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
        </div>
      </React.Fragment>
    );
  }
}

CharacterList.propTypes = {
  handleFilterName: PropTypes.func
};

export default Filters;
