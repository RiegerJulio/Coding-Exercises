import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { character, error, loading } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

//mapeie o estado global para a propriedade da sua aplicação
const mapStateToProps = ({ charReducer: { loading, character, error }}) => ({ loading, character, error });

export default connect(mapStateToProps)(CharacterInfo);

CharacterInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  character: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
}