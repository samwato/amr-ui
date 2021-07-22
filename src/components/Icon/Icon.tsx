import React from 'react'
import classnames from 'classnames'
import styles from './Icon.module.css'
import { iconNamesType } from './src/types'
import { sizeType, variantType } from '../globalTypes'

const icons = require('./src')

interface IconProps {
  icon: iconNamesType;
  type: 'outline' | 'solid';
  size?: sizeType;
  variant?: variantType;
  backdrop?: boolean;
}

export const Icon = ({
  icon,
  type,
  size = 'md',
  variant = 'info',
  backdrop = false,
}: IconProps) => {

  const containerClasses = classnames({
    [styles.backdrop]: backdrop,
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
  
  const buildIcon = icons[type][icon]()
  
  return (
    <div className={containerClasses}>
      {buildIcon}
    </div>
  )
}
