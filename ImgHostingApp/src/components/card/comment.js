import React, { Component } from 'react';

class CommentBox extends Component {
  

  render() {
    return (
      <div>
        
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <textarea className="textarea" name="comment" placeholder="Add a comment"></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;