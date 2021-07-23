import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.css'
import { sizeType, variantType, textWeightTypes } from '../globalTypes'

import { iconNamesType, iconStyleType } from '../Icon/src/types'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { Spinner } from '../Spinner'

type ButtonProps = {
  label?: string;
  icon?: iconNamesType;
  iconStyle?: iconStyleType;
  size?: sizeType;
  type?: 'button' | 'submit';
  style?: 'outline' | 'solid';
  variant?: variantType;
  textWeight: textWeightTypes;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  icon,
  iconStyle = 'outline',
  type = 'button',
  size = 'md',
  style = 'solid',
  variant = 'primary',
  textWeight = '600',
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) => {
  
  const buttonClasses = classnames({
    [styles.button]: true,
    [styles.noLabel]: !label,
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
    [styles.outline]: style === 'outline',
    [styles.solid]: style === 'solid',
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.light]: variant === 'light',
    [styles.dark]: variant === 'dark',
    [styles.info]: variant === 'info',
    [styles.warning]: variant === 'warning',
    [styles.error]: variant === 'error',
    [styles.success]: variant === 'success',
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
      { style === 'outline' ?
      <Icon
        icon={icon}
        style={iconStyle}
        size={size}
        variant={variant}/> : 
      <Icon
        icon={icon}
        style={iconStyle}
        size={size}
        variant={variant  === 'light' ? 'dark' : 'light'}/>
      }
    </div> : null
    
  const labelComponent = label ?
    <div className={labelClasses}>
      { style === 'outline' ?
        <Text
          tag="span"
          size={size}
          weight={textWeight}
          variant={variant}
        >{label}</Text> : 
        <Text
          tag="span"
          size={size}
          weight={textWeight}
          variant={variant  === 'light' ? 'dark' : 'light'}
        >{label}</Text>
      }
    </div> : null
    
  const loadingComponent = loading ?
    <div className={styles.loadingContainer}>
      { style === 'outline' ?
        <Spinner
          size={size}
          variant={variant}
        /> :
        <Spinner
          size={size}
          variant={variant  === 'light' ? 'dark' : 'light'}
        />
      }
    </div> : null
  
  return (
    <button 
      className={buttonClasses}
      type={type}
      onClick={onClick}
    >
      {loadingComponent}
      {iconComponent}
      {labelComponent}
    </button>
  )
}
