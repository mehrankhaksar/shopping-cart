import React from "react";

function Button({ styles, text, onClick }) {
  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
