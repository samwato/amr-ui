import React from 'react'

import styles from './Toggle.module.css'

interface ToggleProps {
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Toggle = ({ 
  size = 'medium',
  ...props
}: ToggleProps) => {
  return (
    <label className={[styles.switch, styles[`switch--${size}`]].join(' ')}>
      <input className={styles.input} type="checkbox" />
      <span className={[styles.slider, styles[`slider--${size}`]].join(' ')}></span>
    </label>
  )
}
