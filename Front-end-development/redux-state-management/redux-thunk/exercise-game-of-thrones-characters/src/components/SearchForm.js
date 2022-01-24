import React from 'react';
import propTypes from 'prop-types';
import './SearchForm.css';
import { thunkChar } from '../actions';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { thunk } = this.props;

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })

  thunk(inputText)
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

const mapDispatchToProps = (dispatch) => ({
  thunk: (char) => dispatch(thunkChar(char))
});

export default connect(null, mapDispatchToProps)(SearchForm);

SearchForm.propTypes = {
  thunk: propTypes.func.isRequired,
}

