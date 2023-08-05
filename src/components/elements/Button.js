import React from "react";

function Button({ styles, type, onClick, text }) {
  return (
    <button className={styles} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
