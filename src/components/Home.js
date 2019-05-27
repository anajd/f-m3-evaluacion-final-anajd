import React from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';
import Footer from './Footer';

class Home extends React.Component {
  render() {
    const { characters, filterName, handleFilterName } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="app__main">
          <Filters
            filterName={filterName}
            handleFilterName={handleFilterName}
          />
          <CharacterList characters={characters} filterName={filterName} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  filterName: PropTypes.string,
  handleFilterName: PropTypes.func
};

export default Home;
