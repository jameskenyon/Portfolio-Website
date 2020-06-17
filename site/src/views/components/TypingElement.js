import React from "react";

class TypingElement extends React.Component {

  /*
    Pass in the word to be displayed and save current state
    (the name that is currently being displayed on the screen) also the
    initial delay time so that the animations can be synced 
  */
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      i: 0,
    }
  }

  /* 
    When the component loads, begin the typing animation
  */
  componentDidMount() {
    setTimeout(this.handleTyping, this.props.initialDelay);
  }

  /*
    Handle the typing animation when the view loads.
  */
  handleTyping = () => {
    if (this.state.i < this.props.word.length) {
      this.setState({
        word: this.state.word + this.props.word[this.state.i],
        i: this.state.i + 1
      });
      setTimeout(this.handleTyping, 100);
    }
  }

  render() {
    return (
      <div>
        {this.state.word}
      </div>
    );
  }
}

export default TypingElement;