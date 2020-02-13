import React, { Component } from 'react';

class ImageShow extends Component {
  state = {
    show: 'imageShow'
  }

render(){

const showImageHidden = () => {
  return <img className="imageShow"></img>
}

return (
  <button onClick={this.showImageHidden}>Press</button>
 )
  }
}

export default ImageShow