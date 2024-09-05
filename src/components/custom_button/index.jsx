import React from "react";
import styles from "./styles.module.scss";

const Button = ({ label, color, bdColor }) => {
  return (
    <button
      style={{
        color: color,
        borderTop: `2px solid ${bdColor}`,
        borderBottom: `2px solid ${bdColor}`,
      }}
      className={styles.btn_wrapper}
    >
      {label}
    </button>
  );
};

export default Button;
