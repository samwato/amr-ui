import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.css'
import { SizeType, VariantType } from '../globalTypes'

import { Icon, iconNamesType, iconStyleType } from '../Icon'
import { Text, TextWeightType } from '../Text'
import { Spinner } from '../Spinner'

interface ButtonProps {
  label?: string;
  icon?: iconNamesType;
  iconStyle?: iconStyleType;
  size?: SizeType;
  type?: 'button' | 'submit';
  variant?: VariantType;
  textWeight?: TextWeightType;
  fullwidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  title?: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  icon,
  iconStyle = 'outline',
  type = 'button',
  size = 'md',
  variant = 'primary',
  textWeight = '600',
  fullwidth = false,
  disabled = false,
  loading = false,
  title,
  onClick,
}: ButtonProps) => {
  
  const buttonClasses = classnames({
    [styles.button]: true,
    [styles.noLabel]: !label,
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
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
    [styles.fullwidth]: fullwidth,
    [styles.disabled]: disabled,
  })
  
  const iconClasses = classnames({
    [styles.icon]: true,
    [styles.noLabel]: !label,
    [styles.loading]: loading,
  })
  
  const labelClasses = classnames({
    [styles.loading]: loading,
  })
  
  const iconComponent = icon ? 
    <div className={iconClasses}>
      <Icon
        icon={icon}
        style={iconStyle}
        size={size}
      />
    </div> : null
    
  const labelComponent = label ?
    <div className={labelClasses}>
      <Text
        tag="span"
        weight={textWeight}
      >{label}</Text>
    </div> : null
    
  const loadingComponent = loading ?
    <div className={styles.loadingContainer}>
      <Spinner
        size={size}
      />
    </div> : null
  
  return (
    <button 
      className={buttonClasses}
      type={type}
      title={title}
      onClick={onClick}
    >
      {loadingComponent}
      {iconComponent}
      {labelComponent}
    </button>
  )
}
