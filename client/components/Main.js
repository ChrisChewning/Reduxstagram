import React from 'react';
import {Link} from 'react-router';


const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
            <Link to = "/" > Reduxstagram < /Link>
          </h1> {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;


//
//this.props.children is populated by react-router. changes to photo-grid or single.
//takes any props from
