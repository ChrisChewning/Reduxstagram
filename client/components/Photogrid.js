import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
        <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props}
        key={i} i ={i} post={post} />
          )}
        </div>
    )
  }
});

export default PhotoGrid;;


//this.props.posts is an array. Return th ePhoto component.
//Photo grabs all the photos and styled but they are just boxes. the props
//is what injects the actual photos.

//... spread operator this.props
//post = {post} gives us specific info ab the post.
