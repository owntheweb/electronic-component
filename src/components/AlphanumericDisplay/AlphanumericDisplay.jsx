import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './MyFontsWebfontsKitLed.css';
import './AlphanumericDisplay.css';

// TODO: What if props change? Need to recreate array.

class AlphanumericDisplay extends Component {
  
  constructor(props) {
    super(props);
    const characters = this.createCharacterArray(props.characters);
    const displayString = this.trimCharactersForDisplay(characters);
    // TODO: May need to break this out and refactor, especially if watching for prop changes
    const displayBackground = displayString.split('').map(x => '█').join('');
    this.state = {
      characters,
      displayString,
      displayBackground
    };
  }

  // Setup "scrolling" animation for alphanumeric display
  componentDidMount() {
    this.timerID = setInterval(
      () => this.scroll(),
      this.props.animationTime
    );
  }

  // Clear the timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Break a string up into an array with a minimum character count to match the display.
  createCharacterArray(characterString) {
    let characters = characterString.split('');

    // Make an array with minimum count (no maximum).
    while (characters.length < this.characterCount) {
      characters.push(' ');
    }

    // Add a space at the end to break up the scroll.
    if (this.props.addSpace === true) {
      characters.push(' ');
    }

    return characters;
  }

  // Scroll the LED display.
  scroll() {
    // scroll the array by the specified amount
    let scrollInt = 0;
    let characters = this.state.characters;
    while (scrollInt < this.props.scrollAmount) {
      characters.push(characters.shift());
      scrollInt++;
    }
    
    // trim to display length and create string to display
    const displayString = this.trimCharactersForDisplay(characters);
    
    // update the state
    this.setState({
      characters,
      displayString
    });
  }

  trimCharactersForDisplay(characterArray) {
    return characterArray.join('').substring(0, this.props.characterCount);
  }
  
  render() {
    return (
      <div className="AlphanumericDisplay">
        <div className="AlphanumericDisplayFrontPanel">
          <div className="AlphanumericDisplayCharacters">{ this.state.displayString }</div>
          <div className="AlphanumericDisplayCharactersBack">{ this.state.displayBackground }</div>
          <div className="AlphanumericDisplayBottom"></div>
          <div className="AlphanumericDisplaySide"></div>
        </div>
      </div>
    );
  }
}

AlphanumericDisplay.defaultProps = {
  characters: 'HELLO AWESOME PEOPLE ',
  animationTime: 200,
  characterCount: 12,
  addSpace: true,
  scrollAmount: 1
};

AlphanumericDisplay.propTypes = {
  characters: PropTypes.string,
  animationTime: PropTypes.number,
  characterCount: PropTypes.number,
  addSpace: PropTypes.bool,
  scrollAmount: PropTypes.number
};

export default AlphanumericDisplay;