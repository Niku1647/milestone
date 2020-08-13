import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'

const like = <FontAwesomeIcon icon={faThumbsUp} />

class LikesButton extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false,
        count:Math.floor(Math.random()*100)
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }
    
    render() {
      const text = this.state.liked ? this.state.count+1 : this.state.count;
      
      return (
        <div className="customContainer">
          <button className="btn btn-primary" onClick={this.handleClick}>
          {like} 
            </button>
          <p>
            {text} 
          </p>
        </div>
      );
    }
  }

export default LikesButton;