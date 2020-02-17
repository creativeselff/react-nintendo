import React from 'react';

function Hello(props) {
  
  const showMessage = () => {
    alert('Followed ' + props.user);
    <img className="imageStyle"></img>
  };

  const handleClick = () => {
    setTimeout(showMessage, 2000);
  };

  return (
    <button onClick={handleClick}>Follow</button>
  );
}
export default Hello
