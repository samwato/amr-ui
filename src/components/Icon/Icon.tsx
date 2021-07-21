import React from 'react'
import classnames from 'classnames'
import styles from './Icon.module.css'
import { iconNameTypes } from './src/types'

const icons = require('./src')

interface IconProps {
  name: iconNameTypes;
  type: 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'info' | 'warning' | 'error' | 'success';
  backdrop?: boolean;
}

export const Icon = ({
  name,
  type,
  size = 'md',
  variant = 'info',
  backdrop = false,
}: IconProps) => {

  const containerClasses = classnames({
    [styles.backdrop]: backdrop,
    [styles.info]: variant === 'info',
    [styles.warning]: variant === 'warning',
    [styles.error]: variant === 'error',
    [styles.success]: variant === 'success',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
  })
  
  const buildIcon = icons[type][name]()
  
  return (
    <div className={containerClasses}>
      {buildIcon}
    </div>
  )
}
