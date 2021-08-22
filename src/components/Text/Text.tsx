import React from 'react'
import classnames from 'classnames'
import styles from './Text.module.css'
import { VariantType } from '../globalTypes'

export type TextTagType = 'label' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextWeightType = '300' | '400' | '500' | '600' | '700';
export type TextSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5';

interface TextProps {
  children: string;
  htmlFor?: string;
  tag?: TextTagType;
  size?: TextSizeType;
  weight?: TextWeightType;
  variant?: VariantType;
}

export const Text = ({
  children,
  tag = 'p',
  htmlFor,
  size,
  weight,
  variant,
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
  
  const textStyles = {
    fontWeight: weight ? weight : 'inherit'
  }
  
  return (
    React.createElement(
      tag,
      {
        className: textClasses,
        style: textStyles,
        htmlFor: htmlFor,
       },
      children
    )
  )
}
