import React from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';

class Filters extends React.Component {
  render() {
    const { characters, filterName } = this.props;
    return characters
      .filter(item => item.name.includes(filterName))
      .map(item => {
        return (
          <li className="character__item" key={item.id}>
            <CharacterList item={item} />
          </li>
        );
      });
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  filterName: PropTypes.string
};

export default Filters;
