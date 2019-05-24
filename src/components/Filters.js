import React from 'react';
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

export default Filters;
