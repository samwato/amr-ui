import React from 'react'
import classnames from 'classnames'
import styles from './Tag.module.css'
import { variantType } from '../globalTypes'

import { Icon, iconNamesType, iconStyleType } from '../Icon'
import { Text } from '../Text'

type TagProps = {
  label: string;
  icon?: iconNamesType;
  iconStyle?: iconStyleType;
  variant?: variantType;
  removable: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}

export const Tag = ({
  label,
  icon,
  iconStyle = 'outline',
  variant = 'primary',
  removable = false,
  disabled = false,
  onClick,
  onRemove,
}: TagProps) => {
  
  const tagClasses = classnames({
    [styles.tag]: true,
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
  
  const iconClasses = classnames({
    [styles.icon]: true,
  })
  
  const removableClasses = classnames({
    [styles.removable]: true,
  })
  
  const iconComponent = icon ? 
    <div className={iconClasses}>
      <Icon
        icon={icon}
        style={iconStyle}
        size="sm"
      />
    </div> : null
    
  const labelComponent = 
    <div>
      <Text
        tag="span"
        size="sm"
      >{label}</Text>
    </div>
  
  const removableComponent = 
    <div
      className={removableClasses}
      onClick={onRemove}>
      <Icon
        icon="XCircleIcon"
        style="solid"
        size="sm"
      />
    </div>
  
  return (
    <button 
      className={tagClasses}
      type="button"
      onClick={onClick}
    >
      {iconComponent}
      {labelComponent}
      {removable ? removableComponent : null}
    </button>
  )
}
