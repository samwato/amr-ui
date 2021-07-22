import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.css'
import { sizeType, variantType } from '../globalTypes'

interface ButtonProps {
  size?: sizeType;
  variant?: variantType;
  children?: React.ReactNode;
}

export const Button = ({
  size = 'md',
  variant = 'info',
  children,
}: ButtonProps) => {
  
  const containerClasses = classnames({
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.light]: variant === 'light',
    [styles.dark]: variant === 'dark',
    [styles.info]: variant === 'info',
    [styles.warning]: variant === 'warning',
    [styles.error]: variant === 'error',
    [styles.success]: variant === 'success',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
  })
  
  return (
    
  )
}
