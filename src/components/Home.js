import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    const { characters, filterName, handleFilterName } = this.props;
    return (
      <React.Fragment>
        <main>
          <Filters
            filterName={filterName}
            handleFilterName={handleFilterName}
          />
          <CharacterList characters={characters} filterName={filterName} />
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  characters: PropTypes.arrayOf,
  filterName: PropTypes.string,
  handleFilterName: PropTypes.func
};

export default Home;
