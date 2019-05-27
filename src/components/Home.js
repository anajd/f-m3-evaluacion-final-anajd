import React from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import Footer from './Footer';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    const {
      characters,
      filterName,
      handleFilterName,
      favCharacter,
      handleFav
    } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="app__main">
          <Filters
            filterName={filterName}
            handleFilterName={handleFilterName}
          />
          <CharacterList
            characters={characters}
            filterName={filterName}
            favCharacter={favCharacter}
            handleFav={handleFav}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  characters: PropTypes.array,
  filterName: PropTypes.string,
  handleFilterName: PropTypes.func,
  favCharacter: PropTypes.array,
  handleFav: PropTypes.func
};

export default Home;
