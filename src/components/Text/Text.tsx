import React from 'react'
import classnames from 'classnames'
import styles from './Text.module.css'
import { textSizeType, variantType, themeType } from '../globalTypes'

interface TextProps {
  children: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: textSizeType;
  theme?: themeType;
  variant?: null | variantType;
}

export const Text = ({
  children,
  tag = 'p',
  size = 'md',
  theme = 'light',
  variant,
}: TextProps) => {
  
  const textColor = !variant ? theme : variant
  
  const textClasses = classnames({
    [styles.text]: true,
    [styles.light]: textColor === 'light',
    [styles.dark]: textColor === 'dark',
    [styles.info]: textColor === 'info',
    [styles.warning]: textColor === 'warning',
    [styles.error]: textColor === 'error',
    [styles.success]: textColor === 'success',
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
