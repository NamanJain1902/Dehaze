import React from 'react'
import ReactCardFlip from 'react-card-flip';

class Card extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div>
          <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2012/enasasatelli.jpg" alt="" />
          <center><button onClick={this.handleClick}>Click here to know more</button></center>
            </div>
  
            <div>
            <p> <br /><br /><br /><center><strong>Coastel</strong></center>Wavelength ranges from 0.433 - 0.453 um<br /><br /></p>
            <center><button onClick={this.handleClick}>View image again</button></center>
            </div>
        </ReactCardFlip>
      )
    }
  }

  export default Card