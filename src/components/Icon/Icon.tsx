import React from 'react'
import classnames from 'classnames'
import styles from './Icon.module.css'
import { IconNamesType, IconStyleType } from './src/types'
import { VariantType } from '../globalTypes'

const icons = require('./src')

export type IconSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
  icon: IconNamesType;
  style: IconStyleType;
  size?: IconSizeType;
  variant?: VariantType;
  backdrop?: boolean;
}

export const Icon = ({
  icon,
  style,
  size = 'md',
  variant,
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
    [styles.xs]: size === 'xs',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.xl]: size === 'xl',
  })
  
  const buildIcon = icons[style][icon]()
  
  return (
    <div className={containerClasses}>
      {buildIcon}
    </div>
  )
}
