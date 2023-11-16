import React from "react";

function Btn(props) {
  const buttonStyle = {
      color: props.color,
      fontSize: props.fontSize + 'px'
  };
  
  return (
    <button style={buttonStyle}>
      {props.text}
    </button>
  );
}


export default Btn;