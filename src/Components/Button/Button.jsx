import React from 'react'
import styles from "./Button.module.css"

const Button = ({isSecBtn, text ,icon}) => {
  return (
    <>
    <button className={isSecBtn ? styles.sec_btn : styles.btn}>
    {text}
    {icon}
    </button>
    </>
  )
}

export default Button