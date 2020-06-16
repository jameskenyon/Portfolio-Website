import React from "react";

//media
import downArrow from '../media/down_arrow.png';
// styles and components
import './views.css';
import './LandingView.css';
import NavigationBar from './components/NavigationBar';

class LandingView extends React.Component {

  /*
    Pass in the forename and surname to be displayed and save current state
    (the name that is currently being displayed on the screen)
  */
  constructor(props) {
    super(props);
    this.state = {
      forename: "",
      surname: "",
      i: 0,
    }
  }

  /*
    Handle the typing animation when the view loads.
  */
  handleTyping = () => {
    if (this.state.i < this.props.forename.length) {
      this.setState({
        forename: this.state.forename + this.props.forename[this.state.i],
        i: this.state.i + 1
      });
      setTimeout(this.handleTyping, 100);
    } else {
      if (this.state.i < this.props.forename.length + this.props.surname.length) {
        this.setState({
          surname: this.state.surname +
            this.props.surname[this.state.i - this.props.forename.length],
          i: this.state.i + 1
        });
        setTimeout(this.handleTyping, 100);
      }
    }
  }

  /* 
    When the component loads, begin the typing animation
  */
  componentDidMount() {
    setTimeout(this.handleTyping, 500);
  }

  render() {
    return (
      <div className="View LandingView">

        <NavigationBar />

        <div id="view_block_1"></div>

        <div className="name forename" id="forename">
          {this.state.forename}
        </div>

        <div className="name surname" id="surname">
          {this.state.surname}
        </div>

        <div id="cursor"></div>

        <div id="landing_view_info">
          ELECTRONIC AND INFORMATION ENGINEERING UNDERGRADUATE STUDENT
          WITH A LOVE FOR TECHNOLOGY. PROGRAMMING SINCE THE AGE OF 16 AND
          STILL GOING STRONG.
        </div>

        <div id="landing_view_footer">
          READ MORE
          <br></br>
          <img src={downArrow} width="25px" height="25px" alt=" " />
        </div>

      </div>
    );
  }

}

export default LandingView;