import React from 'react'
import classnames from 'classnames'
import styles from './IconButton.module.css'
import { iconSizeType, variantType } from '../globalTypes'

import { iconNamesType, iconStyleType } from '../Icon/src/types'
import { Icon } from '../Icon'

type IconButtonProps = {
  icon: iconNamesType;
  iconStyle?: iconStyleType;
  size?: iconSizeType;
  type?: 'button' | 'submit';
  variant?: variantType;
  disabled?: boolean;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  iconStyle = 'outline',
  type = 'button',
  size = 'md',
  variant = 'primary',
  disabled = false,
  onClick,
}: IconButtonProps) => {
  
  const buttonClasses = classnames({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.plain]: variant === 'plain',
    [styles.outline]: variant === 'outline',
    [styles.light]: variant === 'light',
    [styles.dark]: variant === 'dark',
    [styles.info]: variant === 'info',
    [styles.warning]: variant === 'warning',
    [styles.error]: variant === 'error',
    [styles.success]: variant === 'success',
    [styles.disabled]: disabled,
  })

  return (
    <button 
      className={buttonClasses}
      type={type}
      onClick={onClick}
    >
      <Icon
        icon={icon}
        style={iconStyle}
        size={size}
        variant={variant}
      />
    </button>
  )
}
