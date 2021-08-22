import React from 'react'
import classnames from 'classnames'
import styles from './Toggle.module.css'
import { SizeType } from '../globalTypes'

type ToggleProps = {
  name: string;
  checked: boolean;
  id?: string;
  size?: SizeType;
  darkTheme?: boolean;
  onChange?: () => void;
  disabled?: boolean;
}

export const Toggle = ({
  size = 'md',
  darkTheme = false,
  disabled = false,
  ...props
}: ToggleProps) => {
  
  const toggleClasses = classnames({
    [styles.toggle]: true,
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.darkTheme]: darkTheme,
    [styles.disabled]: disabled,
  })
  
  return (
    <label className={toggleClasses}>
      <input type="checkbox" {...props} />
      <span></span>
    </label>
  )
}
