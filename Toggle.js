import React from 'react';

class Toggle extends React.Component {
  state = {
    show: true,
  }

  render() {
    const {show} = this.state;
    return (
      <div>
        <button onClick={()=> this.setState({show: !show })}>
          toggle: {show ? 'show' : 'hide'}
        </button>    
        <img className="imageHide"/>
      </div>
     );
  }
}

export default Toggle;