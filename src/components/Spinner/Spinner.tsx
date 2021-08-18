import React from 'react'
import classnames from 'classnames'
import styles from './Spinner.module.css'
import { spinnerSizeType, variantType } from '../globalTypes'

interface SpinnerProps {
  size?: spinnerSizeType;
  variant?: variantType;
}

export const Spinner = ({
  size = 'md',
  variant
}: SpinnerProps) => {
  
  const spinnerClasses = classnames({
    [styles.xs]: size === 'xs',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.xl]: size === 'xl',
    [styles.xl2]: size === 'xl2',
    [styles.xl3]: size === 'xl3',
    [styles.xl4]: size === 'xl4',
    [styles.xl5]: size === 'xl5',
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.light]: variant === 'light',
    [styles.dark]: variant === 'dark',
    [styles.info]: variant === 'info',
    [styles.warning]: variant === 'warning',
    [styles.error]: variant === 'error',
    [styles.success]: variant === 'success',
  })
  
  return (
    <div className={spinnerClasses}>
      <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" aria-label="audio-loading">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="currentColor" strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
            </path>
            <circle fill="currentColor" cx="36" cy="18" r="1">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
            </circle>
          </g>
        </g>
      </svg>
    </div>
  )
}
