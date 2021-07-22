import React from 'react'
import classnames from 'classnames'
import styles from './TEMPLATENAME.module.css'
import { sizeType, variantType } from '../globalTypes'

interface TEMPLATENAMEProps {
  size?: sizeType;
  variant?: variantType;
  children?: React.ReactNode;
}

export const TEMPLATENAME = ({
  size = 'md',
  variant = 'info',
  children,
}: TEMPLATENAMEProps) => {
  
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
