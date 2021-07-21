import React from 'react'
import classnames from 'classnames'
import styles from './Toggle.module.css'
import { sizeType, themeType } from '../globalTypes'

interface ToggleProps {
  name: string;
  checked: boolean;
  id?: string;
  size?: sizeType;
  theme?: themeType;
  onChange?: () => void;
  disabled?: boolean;
}

export const Toggle = ({
  size = 'md',
  theme = 'light',
  ...props
}: ToggleProps) => {
  
  const toggleClasses = classnames({
    [styles.toggle]: true,
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.light]: theme === 'light',
    [styles.dark]: theme === 'dark',
  })
  
  return (
    <label className={toggleClasses}>
      <input type="checkbox" {...props} />
      <span></span>
    </label>
  )
}
