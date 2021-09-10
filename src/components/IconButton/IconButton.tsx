import React from 'react'
import classnames from 'classnames'
import styles from './IconButton.module.css'
import { VariantType } from '../globalTypes'

import { Icon, IconNamesType, IconStyleType, IconSizeType } from '../Icon'

interface IconButtonProps {
  icon: IconNamesType;
  iconStyle?: IconStyleType;
  size?: IconSizeType;
  type?: 'button' | 'submit';
  variant?: VariantType;
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  iconStyle = 'outline',
  type = 'button',
  size = 'md',
  variant = 'primary',
  disabled = false,
  title,
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
      title={title}
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