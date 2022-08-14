import React from 'react'
import styled from './button.module.css';

const Button = ({children, ...props}) => {
  return (
    <button {...props} className={styled.button}>{children}</button>
  )
}

export default Button;