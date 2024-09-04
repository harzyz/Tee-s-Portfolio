import React from 'react'
import styles from "./styles.module.scss"

const Button = ({label}) => {
  return (
    <button className={styles.btn_wrapper}>
      {label}
    </button>
  )
}

export default Button
