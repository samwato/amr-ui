import React from 'react'
import classnames from 'classnames'
import styles from './Text.module.css'
import { textSizeType, variantType } from '../globalTypes'

interface TextProps {
  children: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: textSizeType;
  variant?: variantType;
}

export const Text = ({
  children,
  tag = 'p',
  size = 'md',
  variant = 'dark',
}: TextProps) => {
  
  const textClasses = classnames({
    [styles.text]: true,
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
    [styles.xl2]: size === 'xl2',
    [styles.xl3]: size === 'xl3',
    [styles.xl4]: size === 'xl4',
    [styles.xl5]: size === 'xl5',
  })
  
  return (
    React.createElement(
      tag,
      { className: textClasses },
      children
    )
  )
}
